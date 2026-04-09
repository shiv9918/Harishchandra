import { useState } from 'react';
import { useContent } from '../hooks/useContent';

const Gallery = () => {
  const { data, loading } = useContent('gallery');
  const [hiddenImages, setHiddenImages] = useState({});

  const hideImage = (key) => {
    setHiddenImages((prev) => ({ ...prev, [key]: true }));
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const hasRealContent = data?.content && !data.content.includes("updates coming soon");
  const hasBlocks = data?.blocks?.length > 0;

  if (hasRealContent || hasBlocks) {
    return (
      <div className="bg-[#fff4dc] py-8 px-4 sm:px-6 lg:px-8">
        <div className="cms-content max-w-7xl mx-auto">
          {hasRealContent && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}

          {hasBlocks && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {data.blocks.map((block) => (
                <div key={block.id} className="bg-[#fff4dc] flex align-middle hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
                  {block.type === 'image' && block.url && !hiddenImages[`cms-${block.id}`] && (
                    <img
                      src={block.url}
                      alt="Gallery Item"
                      className="w-full rounded-xl max-h-64 object-contain mx-auto"
                      onError={() => hideImage(`cms-${block.id}`)}
                    />
                  )}
                  {block.type === 'text' && <div className="p-4" dangerouslySetInnerHTML={{ __html: block.content }} />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  const images = [
    { id: 1, srce: "/1.jpeg", alte: "Gallery Image 1" },
    { id: 2, srce: "/2.jpeg", alte: "Gallery Image 2" },
    { id: 3, srce: "/3.jpeg", alte: "Gallery Image 3" },
    { id: 4, srce: "/4.JPG", alte: "Gallery Image 4" },
    { id: 5, srce: "/5.JPG", alte: "Gallery Image 5" },
    { id: 6, srce: "/6.jpg", alte: "Gallery Image 6" },
    { id: 7, srce: "/7.JPG", alte: "Gallery Image 7" },
    { id: 8, srce: "/8.JPG", alte: "Gallery Image 8" },
    { id: 9, srce: "/9.JPG", alte: "Gallery Image 9" },
    { id: 10, srce: "/10.png", alte: "Gallery Image 10" },
    { id: 11, srce: "/11.jpeg", alte: "Gallery Image 11" },
    { id: 12, srce: "/12.jpeg", alte: "Gallery Image 12" },
    { id: 13, srce: "/13.JPG", alte: "Gallery Image 13" },
    { id: 14, srce: "/14.jpeg", alte: "Gallery Image 14" },
    { id: 15, srce: "/15.jpeg", alte: "Gallery Image 15" },
    { id: 16, srce: "/16.jpeg", alte: "Gallery Image 16" },
    { id: 17, srce: "/17.jpg", alte: "Gallery Image 17" },
    { id: 18, srce: "/18.jpg", alte: "Gallery Image 18" },
    { id: 19, srce: "/101.jpeg", alte: "Gallery Image 101" },
    { id: 20, srce: "/102.jpeg", alte: "Gallery Image 102" },
    { id: 21, srce: "/103.jpeg", alte: "Gallery Image 103" },
    { id: 22, srce: "/104.jpeg", alte: "Gallery Image 104" },
    { id: 23, srce: "/105.jpeg", alte: "Gallery Image 105" },
    { id: 24, srce: "/106.jpeg", alte: "Gallery Image 106" },
    { id: 25, srce: "/107.jpeg", alte: "Gallery Image 107" },
    { id: 26, srce: "/108.jpeg", alte: "Gallery Image 108" },
    { id: 27, srce: "/109.jpeg", alte: "Gallery Image 109" },
    { id: 28, srce: "/110.jpeg", alte: "Gallery Image 110" },
    { id: 29, srce: "/111.jpeg", alte: "Gallery Image 111" },
    { id: 30, srce: "/112.jpeg", alte: "Gallery Image 112" },
    { id: 31, srce: "/113.jpeg", alte: "Gallery Image 113" },
    { id: 32, srce: "/114.jpeg", alte: "Gallery Image 114" },
    { id: 33, srce: "/115.jpeg", alte: "Gallery Image 115" },
    { id: 34, srce: "/116.jpeg", alte: "Gallery Image 116" },
    { id: 35, srce: "/117.jpeg", alte: "Gallery Image 117" },
    { id: 36, srce: "/118.jpeg", alte: "Gallery Image 118" },
    { id: 37, srce: "/119.jpeg", alte: "Gallery Image 119" },
    { id: 38, srce: "/120.jpeg", alte: "Gallery Image 120" },
    { id: 39, srce: "/121.jpeg", alte: "Gallery Image 121" },
    { id: 40, srce: "/122.jpeg", alte: "Gallery Image 122" },
    { id: 41, srce: "/123.jpeg", alte: "Gallery Image 123" },
    { id: 42, srce: "/124.jpeg", alte: "Gallery Image 124" },
    { id: 43, srce: "/125.jpeg", alte: "Gallery Image 125" },
    { id: 44, srce: "/126.jpeg", alte: "Gallery Image 126" },
    { id: 45, srce: "/127.jpeg", alte: "Gallery Image 127" },
    { id: 46, srce: "/128.jpeg", alte: "Gallery Image 128" },
    { id: 47, srce: "/129.jpeg", alte: "Gallery Image 129" },
    { id: 48, srce: "/130.jpeg", alte: "Gallery Image 130" },
    { id: 49, srce: "/131.jpeg", alte: "Gallery Image 131" },
    { id: 50, srce: "/132.jpeg", alte: "Gallery Image 132" },
    { id: 51, srce: "/133.jpeg", alte: "Gallery Image 133" },
    { id: 52, srce: "/134.jpeg", alte: "Gallery Image 134" },
    { id: 53, srce: "/135.jpeg", alte: "Gallery Image 135" },
    { id: 54, srce: "/136.jpeg", alte: "Gallery Image 136" },
    { id: 55, srce: "/137.jpeg", alte: "Gallery Image 137" },
    { id: 56, srce: "/138.jpeg", alte: "Gallery Image 138" },
    { id: 57, srce: "/139.jpeg", alte: "Gallery Image 139" },
    { id: 58, srce: "/140.jpeg", alte: "Gallery Image 140" },
    { id: 59, srce: "/141.jpeg", alte: "Gallery Image 141" },
    { id: 60, srce: "/142.jpeg", alte: "Gallery Image 142" },
    { id: 61, srce: "/143.jpeg", alte: "Gallery Image 143" },
    { id: 62, srce: "/144.jpeg", alte: "Gallery Image 144" },
    { id: 63, srce: "/145.jpeg", alte: "Gallery Image 145" },
    { id: 64, srce: "/146.jpeg", alte: "Gallery Image 146" },
    { id: 65, srce: "/147.jpeg", alte: "Gallery Image 147" },
    { id: 66, srce: "/148.jpeg", alte: "Gallery Image 148" },
    { id: 67, srce: "/149.jpeg", alte: "Gallery Image 149" },
    { id: 68, srce: "/150.jpeg", alte: "Gallery Image 150" },
    { id: 69, srce: "/151.jpeg", alte: "Gallery Image 151" },
    { id: 70, srce: "/152.jpeg", alte: "Gallery Image 152" },
    { id: 71, srce: "/153.jpeg", alte: "Gallery Image 153" },
    { id: 72, srce: "/154.jpeg", alte: "Gallery Image 154" },
    { id: 73, srce: "/155.jpeg", alte: "Gallery Image 155" },
    { id: 74, srce: "/156.jpeg", alte: "Gallery Image 156" },
    { id: 75, srce: "/157.jpeg", alte: "Gallery Image 157" },
    { id: 76, srce: "/158.jpeg", alte: "Gallery Image 158" },
    { id: 77, srce: "/159.jpeg", alte: "Gallery Image 159" },
    { id: 78, srce: "/160.jpeg", alte: "Gallery Image 160" },
    { id: 79, srce: "/161.jpeg", alte: "Gallery Image 161" },
    { id: 80, srce: "/162.jpeg", alte: "Gallery Image 162" },
    { id: 81, srce: "/163.jpeg", alte: "Gallery Image 163" },
    { id: 82, srce: "/164.jpeg", alte: "Gallery Image 164" },
    { id: 83, srce: "/165.jpeg", alte: "Gallery Image 165" },
  ];
  return (
    <div className=" bg-[#fff4dc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#913c07] mb-8 text-center">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          {images.map((img) => (
            !hiddenImages[`static-${img.id}`] && (
              <div key={img.id} className="bg-[#fff4dc] flex align-middle hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
                <img
                  src={img.srce}
                  alt={img.alte}
                  className="w-full rounded-xl max-h-64 object-contain mx-auto "
                  onError={() => hideImage(`static-${img.id}`)}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
