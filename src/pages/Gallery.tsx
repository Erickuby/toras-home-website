import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras.png",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras2.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras1.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras133.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras4.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras13.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras12.jpg",
  "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras1-2.jpg",
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Gallery</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Moments of Joy</h1>
          <p className="text-muted-foreground text-lg">A glimpse into the lives and happiness at Toras Home.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Toras Home gallery ${i + 1}`}
                className="w-full rounded-xl hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-primary">
            <X className="w-8 h-8" />
          </button>
          <img src={selected} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
