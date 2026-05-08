import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, ShieldAlert, Flame } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';
import techniciansImage from '@/assets/images/hvac-technicians.jpg';

const risks = [
  { icon: AlertTriangle, title: 'Unplanned Downtime', desc: 'HVAC failures during business hours disrupt operations, affect tenant satisfaction, and damage your reputation.' },
  { icon: Zap, title: 'Rising Energy Costs', desc: 'Poorly maintained systems consume 20-40% more energy, inflating your operational budget unnecessarily.' },
  { icon: ShieldAlert, title: 'Compliance Risks', desc: 'Outdated maintenance records and neglected systems expose you to regulatory penalties and insurance issues.' },
  { icon: Flame, title: 'Reactive Firefighting', desc: 'Without preventive maintenance, you\'re constantly reacting to emergencies instead of managing assets strategically.' },
];

export default function PainPointsSection({ buildingImage }) {
  return (
    <section className="py-20 bg-[#0A0A0B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          label="Risk Assessment"
          title="The Cost of Neglecting Your HVAC Systems"
          description="Without a proactive maintenance program, you're exposed to these operational risks"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative rounded-2xl overflow-hidden h-64 md:h-[400px] border border-white/10 group cursor-pointer"
        >
          <img 
            src={techniciansImage} 
            alt="Professional HVAC technicians performing maintenance" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {risks.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedCard key={r.title} index={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 transition-all group">
                <div className="p-2.5 rounded-lg bg-[#00E5FF]/10 w-fit mb-4 group-hover:bg-[#00E5FF]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 group cursor-pointer border border-white/5">
          <img 
            src={buildingImage} 
            alt="Modern commercial building" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute bottom-6 left-6 transition-transform duration-500 group-hover:-translate-y-2">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest mb-1 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Climate-Controlled Comfort
            </p>
            <p className="text-sm text-gray-300 font-medium">
              Reliable HVAC for productive work environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 