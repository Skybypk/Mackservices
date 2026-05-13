import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';

const highlights = [
  'Licensed, bonded, and fully insured',
  'Expert team of certified professionals',
  'Premium materials and latest techniques',
  '24/7 emergency service available',
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Completed Projects' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Craftsmen' },
];

export default function AboutPreview({ workImage }) {
  return (
    <section className="py-20 bg-[#F5F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-[#00E5FF] tracking-[0.2em] uppercase mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Building Excellence for 10+ Years
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MackServices has been the trusted choice for residential and commercial construction projects throughout the region. Our commitment to quality, reliability, and customer satisfaction has made us a leader in the construction industry.
            </p>
            <ul className="space-y-2.5 mb-8">
              {highlights.map(h => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-[400px] border border-border group cursor-pointer">
              <img src={workImage} alt="Our Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 