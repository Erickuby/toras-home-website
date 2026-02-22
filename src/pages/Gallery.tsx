
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";



const galleryItems: { type: 'image' | 'video'; src: string; description?: string }[] = [];

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
