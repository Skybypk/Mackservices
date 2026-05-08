import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, CheckCircle2 } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24/7 Emergency Service' },
  { icon: Award, text: 'Quality Guaranteed' },
  { icon: CheckCircle2, text: 'Free Estimates' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Service' },
];

export default function HomeHero({ heroImage, subHeroImage }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F7F9]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0A0A0B 1px, transparent 1px), linear-gradient(90deg, #0A0A0B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0A0A0B] leading-[1.1] tracking-tight mb-6">
              Keep Your Building<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8CC] to-[#00E5FF]">Cool, Compliant</span><br />
              & Cost-Efficient
            </h1>

            <p className="text-lg text-[#4A5568] leading-relaxed mb-8 max-w-lg">
              Professional HVAC maintenance and installation services backed by 10+ years of excellence. Trusted by commercial properties across Kuala Lumpur.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/601121142177?text=Hi%20MacServices!%20I%27m%20interested%20in%20getting%20a%20free%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A0A0B] text-white font-semibold rounded-lg hover:bg-[#0A0A0B]/90 transition-all animate-pulse-glow text-sm"
              >
                Get Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A0A0B] font-semibold rounded-lg border border-border hover:bg-secondary transition-all text-sm"
              >
                View Our Work
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {badges.map(b => {
                const Icon = b.icon;
                return (
                  <div key={b.text} className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#0A0A0B]/5">
                      <Icon className="w-4 h-4 text-[#00E5FF]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{b.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-[300px] md:h-[350px] group cursor-pointer border border-border shadow-sm">
                <img src={heroImage} alt="Main Hero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-[200px] md:h-[240px] group cursor-pointer border border-border shadow-sm">
                <img src={subHeroImage} alt="Sub Hero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(s => (
            <div key={s.label} className="text-center p-5 bg-white rounded-xl border border-border">
              <p className="font-heading text-2xl font-extrabold text-[#0A0A0B]">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 