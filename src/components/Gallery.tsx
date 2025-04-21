import React, { useState } from 'react';
import { X } from 'lucide-react';

type GalleryItem = {
  src: string;
  type: 'image' | 'video';
  alt?: string;
};

const galleryItems: GalleryItem[] = [
  { src: "/vid_1.mp4", alt: "Trek video 1", type: "video" },
  { src: "/img_1.png", alt: "Trek photo 1", type: "image" },
  { src: "/vid_2.mp4", alt: "Trek video 2", type: "video" },
  { src: "/img_2.png", alt: "Trek photo 2", type: "image" },
  { src: "/img_3.png", alt: "Trek photo 3", type: "image" },
  { src: "/vid_3.mp4", alt: "Trek video 3", type: "video" },
  { src: "/img_4.png", alt: "Trek photo 4", type: "image" },
  { src: "/img_5.png", alt: "Trek photo 5", type: "image" },
  { src: "/vid_4.mp4", alt: "Trek video 4", type: "video" },
  { src: "/img_6.png", alt: "Trek photo 6", type: "image" },
  { src: "/img_7.jpg", alt: "Trek photo 7", type: "image" },
  { src: "/img_8.jpeg", alt: "Trek photo 8", type: "image" }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trek Gallery
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Glimpses from our previous treks - moments that capture the essence of Footslog
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer overflow-hidden rounded-lg relative group h-64 bg-gray-200"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <span className="text-sm font-light">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            )}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            These moments could be yours. Create memories that last a lifetime!
          </p>
          <a
            href="#register"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300 transform hover:scale-105"
          >
            Join Footslog 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
