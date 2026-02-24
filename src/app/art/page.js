"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery from "./gallery-data";

export default function Art() {
  const [lightbox, setLightbox] = useState(null);

  const sections = [...new Set(gallery.map((item) => item.section))];

  const allImages = gallery;
  const currentIndex = lightbox
    ? allImages.findIndex((img) => img.src === lightbox.src)
    : -1;

  const navigate = useCallback(
    (dir) => {
      if (currentIndex === -1) return;
      const next =
        dir === "next"
          ? (currentIndex + 1) % allImages.length
          : (currentIndex - 1 + allImages.length) % allImages.length;
      setLightbox(allImages[next]);
    },
    [currentIndex, allImages]
  );

  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, navigate]);

  return (
    <>
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section}>
            <h2 className="text-[13px] text-stone-400 dark:text-stone-500 italic font-medium mb-3">
              {section}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {gallery
                .filter((item) => item.section === section)
                .map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(item)}
                    className="relative aspect-square overflow-hidden rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-800 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <span className="absolute bottom-0 left-0 right-0 px-2.5 py-2 text-[11px] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                      {item.title}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 p-2 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <span className="text-[13px] text-white/70 font-light">
                {lightbox.title}
              </span>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 text-[11px] text-white/40">
              {currentIndex + 1} / {allImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
