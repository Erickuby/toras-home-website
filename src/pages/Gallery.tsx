
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";

// Import all gallery assets
import gallery1 from "@/assets/gallery/gallery-01.png";
import gallery2 from "@/assets/gallery/gallery-02.jpg";
import gallery3 from "@/assets/gallery/gallery-03.jpg";
import gallery4 from "@/assets/gallery/gallery-04.jpg";
import gallery5 from "@/assets/gallery/gallery-05.jpg";
import gallery6 from "@/assets/gallery/gallery-06.jpg";
import gallery7 from "@/assets/gallery/gallery-07.jpg";
import gallery8 from "@/assets/gallery/gallery-08.jpg";

// New assets
import newGallery1 from "@/assets/gallery/new-gallery-01.mp4";
import newGallery2 from "@/assets/gallery/new-gallery-02.jpeg";
import newGallery3 from "@/assets/gallery/new-gallery-03.jpeg";
import newGallery4 from "@/assets/gallery/new-gallery-04.jpeg";
import newGallery5 from "@/assets/gallery/new-gallery-05.jpeg";
import newGallery6 from "@/assets/gallery/new-gallery-06.jpeg";
import newGallery7 from "@/assets/gallery/new-gallery-07.jpeg";
import newGallery8 from "@/assets/gallery/new-gallery-08.jpeg";
import newGallery9 from "@/assets/gallery/new-gallery-09.jpeg";
import newGallery10 from "@/assets/gallery/new-gallery-10.jpeg";
import newGallery11 from "@/assets/gallery/new-gallery-11.jpeg";
import newGallery12 from "@/assets/gallery/new-gallery-12.jpeg";
import newGallery13 from "@/assets/gallery/new-gallery-13.jpeg";
import newGallery14 from "@/assets/gallery/new-gallery-14.jpeg";
import newGallery15 from "@/assets/gallery/new-gallery-15.jpeg";
import newGallery16 from "@/assets/gallery/new-gallery-16.jpeg";
import newGallery17 from "@/assets/gallery/new-gallery-17.jpeg";
import newGallery18 from "@/assets/gallery/new-gallery-18.jpeg";
import newGallery19 from "@/assets/gallery/new-gallery-19.jpeg";
import newGallery20 from "@/assets/gallery/new-gallery-20.mp4";
import newGallery21 from "@/assets/gallery/new-gallery-21.mp4";
import newGallery22 from "@/assets/gallery/new-gallery-22.jpeg";
import newGallery23 from "@/assets/gallery/new-gallery-23.jpeg";
import newGallery24 from "@/assets/gallery/new-gallery-24.jpeg";
import newGallery25 from "@/assets/gallery/new-gallery-25.jpeg";
import newGallery26 from "@/assets/gallery/new-gallery-26.jpeg";
import newGallery27 from "@/assets/gallery/new-gallery-27.jpeg";
import newGallery28 from "@/assets/gallery/new-gallery-28.mp4";
import newGallery29 from "@/assets/gallery/new-gallery-29.mp4";
import newGallery30 from "@/assets/gallery/new-gallery-30.mp4";

const galleryItems = [
  { type: 'image', src: gallery1 },
  { type: 'image', src: gallery2 },
  { type: 'image', src: gallery3 },
  { type: 'image', src: gallery4 },
  { type: 'image', src: gallery5 },
  { type: 'image', src: gallery6 },
  { type: 'image', src: gallery7 },
  { type: 'image', src: gallery8 },
  { type: 'video', src: newGallery1 },
  { type: 'image', src: newGallery2 },
  { type: 'image', src: newGallery3 },
  { type: 'image', src: newGallery4 },
  { type: 'image', src: newGallery5 },
  { type: 'image', src: newGallery6 },
  { type: 'image', src: newGallery7 },
  { type: 'image', src: newGallery8 },
  { type: 'image', src: newGallery9 },
  { type: 'image', src: newGallery10 },
  { type: 'image', src: newGallery11 },
  { type: 'image', src: newGallery12 },
  { type: 'image', src: newGallery13 },
  { type: 'image', src: newGallery14 },
  { type: 'image', src: newGallery15 },
  { type: 'image', src: newGallery16 },
  { type: 'image', src: newGallery17 },
  { type: 'image', src: newGallery18 },
  { type: 'image', src: newGallery19 },
  { type: 'video', src: newGallery20 },
  { type: 'video', src: newGallery21 },
  { type: 'image', src: newGallery22 },
  { type: 'image', src: newGallery23 },
  { type: 'image', src: newGallery24 },
  { type: 'image', src: newGallery25 },
  { type: 'image', src: newGallery26 },
  { type: 'image', src: newGallery27 },
  { type: 'video', src: newGallery28 },
  { type: 'video', src: newGallery29 },
  { type: 'video', src: newGallery30 },
];

const Gallery = () => {
  const [selected, setSelected] = useState<{ type: string; src: string } | null>(null);

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
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setSelected(item)}
            >
              {item.type === 'video' ? (
                <div className="relative">
                  <video
                    src={item.src}
                    className="w-full h-auto object-cover rounded-xl"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={`Toras Home gallery ${i + 1}`}
                  className="w-full rounded-xl hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors">
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selected.type === 'video' ? (
              <video
                src={selected.src}
                className="max-w-full max-h-[85vh] rounded-xl object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selected.src}
                alt="Gallery"
                className="max-w-full max-h-[85vh] rounded-xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
