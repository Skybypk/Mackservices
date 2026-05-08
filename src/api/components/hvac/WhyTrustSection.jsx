import React from 'react';
import { Users, Target, Clock, Cpu } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';

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

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedCard key={r.title} index={i} className="p-6 bg-white rounded-xl border border-border hover:shadow-lg hover:border-[#00E5FF]/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0B] group-hover:bg-[#00E5FF]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
} 