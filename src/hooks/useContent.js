import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocsFromServer } from 'firebase/firestore';
import { db } from '../firebase';

const toMillis = (value) => {
    if (!value) return 0;
    if (typeof value?.toMillis === 'function') return value.toMillis();
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
};

const pickLatestByTimestamp = (snapshot) => {
    if (snapshot.empty) return null;

    const mappedDocs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const sorted = [...mappedDocs].sort((a, b) => {
        const bTime = toMillis(b.updatedAt || b.createdAt);
        const aTime = toMillis(a.updatedAt || a.createdAt);
        return bTime - aTime;
    });

    return sorted[0] || mappedDocs[mappedDocs.length - 1];
};

export const useContent = (slug) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) {
            setLoading(false);
            return;
        }

        let isMounted = true;
        setLoading(true);

        const q = query(
            collection(db, 'pages'),
            where('slug', '==', slug.trim())
        );

        // Force one fresh server read so Vercel users don't get stuck with stale cached page data.
        const hydrateFromServer = async () => {
            try {
                const serverSnapshot = await getDocsFromServer(q);
                if (isMounted) {
                    setData(pickLatestByTimestamp(serverSnapshot));
                    setLoading(false);
                }
            } catch (error) {
                console.warn('useContent: Server fetch failed, falling back to realtime cache+network.', error);
            }
        };

        hydrateFromServer();

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (isMounted) {
                setData(pickLatestByTimestamp(snapshot));
                setLoading(false);
            }
        }, (error) => {
            console.error("useContent: Error fetching data:", error);
            if (isMounted) setLoading(false);
        });

        return () => {
            isMounted = false;
            unsubscribe();
        };
    }, [slug]);

    return { data, loading };
};
