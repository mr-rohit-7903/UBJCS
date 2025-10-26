import { useEffect, useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";

interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  event: string;
  date: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGalleryItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading gallery:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-cultural text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Memories from our cultural celebrations and community events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Loading gallery...</p>
          </div>
        ) : galleryItems.length > 0 ? (
          <GalleryGrid items={galleryItems} />
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No photos available at the moment.</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for updates!</p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-muted rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Share Your Moments</h2>
          <p className="text-muted-foreground mb-4">
            Have photos from our events? We'd love to feature them in our gallery!
            Send your best shots to us and help us showcase the vibrant spirit of our community.
          </p>
          <a
            href="mailto:info@ubjcs.org?subject=Gallery Photo Submission"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-cultural transition-all"
          >
            Submit Photos
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
