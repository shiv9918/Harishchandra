import { useContent } from '../hooks/useContent';
import { useState } from 'react';

const Gallery = () => {
  const { loading } = useContent('gallery');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const TOTAL_IMAGES = 164;

  return (
    <div className="bg-[#fff4dc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#913c07] mb-8 text-center">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: TOTAL_IMAGES }, (_, i) => {
            const num = i + 1;
            return <ImageCard key={num} num={num} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ num }) => {
  // 🔥 FORMAT NUMBER HERE
  const formatted = String(num).padStart(3, '0');

  const paths = [
    `/${formatted}.jpeg`,
    `/${formatted}.jpg`,
    `/${formatted}.JPG`,
    `/${formatted}.png`,
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#fff4dc] flex align-middle hover:shadow-xl transition transform duration-300 shadow-black shadow-xl rounded-xl">
      <img
        src={paths[index]}
        alt={`Gallery Image ${formatted}`}
        className="w-full rounded-xl max-h-64 object-contain mx-auto"
        loading="lazy"
        onError={() => {
          if (index < paths.length - 1) {
            setIndex(index + 1);
          } else {
            setVisible(false);
          }
        }}
      />
    </div>
  );
};

export default Gallery;
