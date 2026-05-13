import React from 'react';
import { Users, Target, Clock, Cpu } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Users, title: '30+ Full-Time Technicians', desc: 'Dedicated in-house team—not subcontractors. Trained in VRV/VRF systems, chillers, AHUs, and centralized HVAC systems.' },
  { icon: Target, title: '100% Commercial Focus', desc: 'We don\'t service residential units. Our entire operation is built around the unique demands of commercial and industrial facilities.' },
  { icon: Clock, title: 'SLA-Backed Response', desc: 'Guaranteed response times written into your contract. 4-hour emergency response for critical system failures.' },
  { icon: Cpu, title: 'Multi-System Expertise', desc: 'Daikin, Carrier, Trane, Mitsubishi, York—we service all major brands. VRV/VRF, split systems, chillers, cooling towers.' },
];

export default function WhyTrustSection() {
  return (
    <section className="py-20 bg-[#F5F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Us"
          title="Why Commercial Clients Trust Us"
          description="Built for enterprise scale, backed by experienced professionals"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={r.title} 
              className="p-8 bg-white rounded-3xl border border-border hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0A0A0B] flex items-center justify-center mb-6 group-hover:bg-[#00E5FF] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white group-hover:text-[#0A0A0B] transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 group-hover:text-[#00E5FF] transition-colors duration-300">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>            );
          })}
        </div>
      </div>
    </section>
  );
} 