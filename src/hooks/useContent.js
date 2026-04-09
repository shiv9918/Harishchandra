import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const useContent = (slug) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) {
            setLoading(false);
            return;
        }

        setLoading(true);
        // Standard efficient query
        const q = query(
            collection(db, 'pages'),
            where('slug', '==', slug)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
                const docData = snapshot.docs[0].data();
                setData(docData);
            } else {
                setData(null);
            }
            setLoading(false);
        }, (error) => {
            console.error("useContent: Error fetching data:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [slug]);

    return { data, loading };
};
