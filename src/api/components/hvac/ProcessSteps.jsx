import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Free Site Audit', desc: 'Our technical team visits your facility to assess your HVAC systems, identify issues, and understand your operational requirements.' },
  { num: '02', title: 'Custom Proposal', desc: 'We present a tailored maintenance program with clear SLAs, response times, and coverage scope specific to your building.' },
  { num: '03', title: 'Seamless Onboarding', desc: 'Upon agreement, we assign a dedicated team, establish communication protocols, and begin scheduled maintenance immediately.' },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="Getting Started Is Simple"
          description="Three steps to worry-free HVAC management"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              key={s.num} 
              className="relative p-8 rounded-3xl bg-[#F5F7F9] border border-border group hover:border-[#00E5FF]/30 hover:bg-white transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A0A0B] text-[#00E5FF] font-heading text-xl font-bold flex items-center justify-center mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A0A0B] transition-all duration-300">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 