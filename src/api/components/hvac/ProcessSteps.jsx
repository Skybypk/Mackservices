import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';

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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

          {steps.map((s, i) => (
            <AnimatedCard key={s.num} index={i} className="relative text-center p-8 rounded-2xl bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0B] text-[#00E5FF] font-mono text-sm font-bold mb-5">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
} 