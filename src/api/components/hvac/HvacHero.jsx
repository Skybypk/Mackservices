import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Headphones, CheckCircle2, Users, Clock, Award, Building2 } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Full-Time Technicians', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '100+', label: 'Commercial Clients', icon: Building2 },
  { value: '4hr', label: 'Emergency Response', icon: Clock },
];

const checks = [
  '30+ full-time HVAC technicians',
  'SLA-backed response times',
  'VRV/VRF & centralized system specialists',
];

export default function HvacHero({ heroImage1, heroImage2, heroImage3 }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F7F9]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0A0A0B 1px, transparent 1px), linear-gradient(90deg, #0A0A0B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-border mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wide">Commercial HVAC Specialists</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0A0A0B] leading-[1.1] tracking-tight mb-6">
              Expert Commercial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8CC] to-[#00E5FF]">HVAC Maintenance</span><br />
              & Engineering
            </h1>

            <p className="text-lg text-[#4A5568] leading-relaxed mb-8 max-w-lg">
              Optimizing indoor environments with high-performance cooling solutions. We specialize in comprehensive maintenance, system upgrades, and 24/7 technical support for commercial buildings across Malaysia.
            </p>

            <div className="space-y-2.5 mb-8">
              {checks.map(c => (
                <div key={c} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span className="text-sm text-[#4A5568]">{c}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#request-audit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A0A0B] text-white font-semibold rounded-lg hover:bg-[#0A0A0B]/90 transition-all animate-pulse-glow text-sm"
              >
                Request Free Site Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+601121142177"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A0A0B] font-semibold rounded-lg border border-border hover:bg-secondary transition-all text-sm"
              >
                <Headphones className="w-4 h-4" />
                Speak to Technical Manager
              </a>
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative rounded-xl overflow-hidden h-64 md:h-80 group cursor-pointer">
                <img src={heroImage1} alt="HVAC technician servicing commercial system" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg">
                  <p className="font-heading text-2xl font-extrabold text-[#0A0A0B]">100+</p>
                  <p className="text-xs text-muted-foreground">Commercial Clients</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-36 md:h-44 group cursor-pointer">
                <img src={heroImage2} alt="HVAC maintenance team" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-3 left-3 bg-[#0A0A0B]/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="font-heading text-lg font-extrabold text-white">4hr</p>
                  <p className="text-[10px] text-gray-300">Emergency Response</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-36 md:h-44 group cursor-pointer">
                <img src={heroImage3} alt="Commercial chiller system" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border">
                <Icon className="w-5 h-5 text-[#00E5FF]" />
                <div>
                  <p className="font-heading text-xl font-extrabold text-[#0A0A0B]">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 