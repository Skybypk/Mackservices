import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}
    >
      {label && (
        <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${light ? 'text-[#00E5FF]' : 'text-[#00E5FF]'}`}>
          {label}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? 'text-gray-400' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
} 