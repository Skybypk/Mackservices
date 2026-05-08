import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -10 : 10 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 