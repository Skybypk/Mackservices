import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner({ title, description }) {
  return (
    <section className="py-16 bg-[#0A0A0B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
          {title || 'Ready to Eliminate HVAC Headaches?'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {description || 'Join 100+ commercial properties in KL that trust us with their HVAC systems. Book your free site audit today.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#request-audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition-all text-sm"
          >
            Request Free Site Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+601121142177"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            +6011-2114 2177
          </a>
        </div>
      </motion.div>
    </section>
  );
} 