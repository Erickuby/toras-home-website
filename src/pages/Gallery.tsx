
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";



import gal1 from "@/assets/gallery/gallery-01.jpeg";
import gal3 from "@/assets/gallery/gallery-03.jpeg";
import gal4 from "@/assets/gallery/gallery-04.jpeg";
import gal5 from "@/assets/gallery/gallery-05.jpeg";
import gal6 from "@/assets/gallery/gallery-06.jpeg";
import gal7 from "@/assets/gallery/gallery-07.jpeg";
import gal9 from "@/assets/gallery/gallery-09.jpeg";
import gal10 from "@/assets/gallery/gallery-10.jpeg";
import gal11 from "@/assets/gallery/gallery-11.jpeg";
import gal12 from "@/assets/gallery/gallery-12.jpeg";
import gal13 from "@/assets/gallery/gallery-13.jpeg";
import gal14 from "@/assets/gallery/gallery-14.jpeg";
import gal15 from "@/assets/gallery/gallery-15.jpeg";
import gal16 from "@/assets/gallery/gallery-16.jpeg";
import gal17 from "@/assets/gallery/gallery-17.jpeg";
import gal18 from "@/assets/gallery/gallery-18.jpeg";
import gal19 from "@/assets/gallery/gallery-19.mp4";
import gal20 from "@/assets/gallery/gallery-20.mp4";
import gal21 from "@/assets/gallery/gallery-21.jpeg";
import gal22 from "@/assets/gallery/gallery-22.jpeg";
import gal23 from "@/assets/gallery/gallery-23.jpeg";
import gal24 from "@/assets/gallery/gallery-24.mp4";
import gal25 from "@/assets/gallery/gallery-25.mp4";
import gal26 from "@/assets/gallery/gallery-26.mp4";
import gal27 from "@/assets/gallery/gallery-27.jpeg";
import gal28 from "@/assets/gallery/gallery-28.jpeg";
import gal29 from "@/assets/gallery/gallery-29.jpg";
import gal30 from "@/assets/gallery/gallery-30.jpg";
import gal31 from "@/assets/gallery/gallery-31.jpg";
import gal32 from "@/assets/gallery/gallery-32.jpg";
import gal33 from "@/assets/gallery/gallery-33.jpg";
import gal34 from "@/assets/gallery/gallery-34.jpg";
import gal35 from "@/assets/gallery/gallery-35.jpg";
import gal36 from "@/assets/gallery/gallery-36.jpg";
import gal37 from "@/assets/gallery/gallery-37.jpg";

const galleryItems = [
  { type: "image", src: gal1 },
  { type: "image", src: gal3 },
  { type: "image", src: gal4 },
  { type: "image", src: gal5 },
  { type: "image", src: gal6 },
  { type: "image", src: gal7 },
  { type: "image", src: gal9 },
  { type: "image", src: gal10 },
  { type: "image", src: gal11 },
  { type: "image", src: gal12 },
  { type: "image", src: gal13 },
  { type: "image", src: gal14 },
  { type: "image", src: gal15 },
  { type: "image", src: gal16 },
  { type: "image", src: gal17 },
  { type: "image", src: gal18 },
  { type: "video", src: gal19 },
  { type: "video", src: gal20 },
  { type: "image", src: gal21 },
  { type: "image", src: gal22 },
  { type: "image", src: gal23 },
  { type: "video", src: gal24 },
  { type: "video", src: gal25 },
  { type: "video", src: gal26 },
  { type: "image", src: gal27 },
  { type: "image", src: gal28 },
  { type: "image", src: gal29 },
  { type: "image", src: gal30 },
  { type: "image", src: gal31 },
  { type: "image", src: gal32 },
  { type: "image", src: gal33 },
  { type: "image", src: gal34 },
  { type: "image", src: gal35 },
  { type: "image", src: gal36 },
  { type: "image", src: gal37 },
];


const Gallery = () => {
  const [selected, setSelected] = useState<{ type: string; src: string; description?: string } | null>(null);

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
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors z-50">
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selected.type === 'video' ? (
              <video
                src={selected.src}
                className="max-w-full max-h-[80vh] rounded-xl object-contain mb-4"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selected.src}
                alt="Gallery"
                className="max-w-full max-h-[80vh] rounded-xl object-contain mb-4"
              />
            )}
            {selected.description && (
              <div className="bg-black/50 text-white p-4 rounded-xl text-center max-w-2xl backdrop-blur-md">
                <p className="text-lg">{selected.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
