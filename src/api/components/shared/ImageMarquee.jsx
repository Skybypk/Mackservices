import React from 'react';
import { motion } from 'framer-motion';

export default function ImageMarquee({ images, speed = 20 }) {
  // Duplicate images to create a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative flex overflow-hidden py-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1035], // Adjust based on content width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedImages.map((img, idx) => (
          <div
            key={idx}
            className="inline-block px-4"
          >
            <div className="relative h-64 w-96 rounded-2xl overflow-hidden border border-border group cursor-pointer">
              <img
                src={img.url}
                alt={img.alt || 'Project Showcase'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Persistent small label on left side */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                    {img.title}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
