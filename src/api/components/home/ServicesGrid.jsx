import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Professional Flooring',
    desc: 'Expert installation of hardwood, laminate, tile, and vinyl flooring with precision and attention to detail.',
    features: ['Hardwood Installation', 'Tile & Stone', 'Laminate & Vinyl', 'Floor Refinishing'],
    path: '/services/flooring',
  },
  {
    title: 'Kitchen & Bath Renovation',
    desc: 'Complete kitchen and bathroom transformations that combine functionality with stunning design.',
    features: ['Custom Cabinetry', 'Countertop Installation', 'Plumbing & Electrical', 'Design Consultation'],
    path: '/services/renovation',
  },
  {
    title: 'Construction & Repairs',
    desc: 'Comprehensive construction services and repairs to maintain and improve your property.',
    features: ['Structural Repairs', 'Drywall & Painting', 'Roofing Solutions', 'Emergency Repairs'],
    path: '/services/repairs',
  },
  {
    title: 'Structural Steelworks',
    desc: 'Professional steel fabrication and installation services for commercial and residential projects.',
    features: ['Steel Frame Construction', 'Welding & Fabrication', 'Structural Reinforcement', 'Custom Steel Solutions'],
    path: '/services/steelworks',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Completed Projects' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Craftsmen' },
];

export default function ServicesGrid({ images }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Stats Bar Placement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="p-6 bg-[#F5F7F9] rounded-2xl border border-border text-center group hover:bg-white hover:border-[#00E5FF]/30 transition-all duration-300">
              <p className="font-heading text-3xl font-extrabold text-[#0A0A0B] mb-1 group-hover:scale-110 transition-transform duration-300">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <SectionHeading
          label="Our Services"
          title="Our Professional Services"
          description="We provide comprehensive construction solutions with exceptional craftsmanship, using premium materials and the latest techniques."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedCard key={s.path} index={i} className="group rounded-2xl overflow-hidden bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 hover:shadow-lg transition-all">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={images[i]}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map(f => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#00E5FF]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-10 text-center p-8 rounded-2xl bg-[#0A0A0B] text-white">
          <h3 className="font-heading font-bold text-lg mb-2">Need a Custom Solution?</h3>
          <p className="text-sm text-gray-400 mb-4">We specialize in custom projects tailored to your specific needs and vision.</p>
          <a
            href="https://wa.me/60147172220?text=Hi%20MacServices!%20I%27m%20interested%20in%20scheduling%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition text-sm"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
} 