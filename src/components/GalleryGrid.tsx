import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  event: string;
  date: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-cultural transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold mb-1">{item.event}</h3>
                <p className="text-sm text-white/90">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.caption}</h3>
              <p className="text-white/80">{selectedImage.event} • {selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
