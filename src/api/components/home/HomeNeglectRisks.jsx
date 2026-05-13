import React from 'react';
import { AlertTriangle, TrendingUp, ShieldAlert, Zap } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';

const risks = [
  {
    icon: AlertTriangle,
    title: 'Unplanned Downtime',
    desc: 'HVAC failures during business hours disrupt operations, affect tenant satisfaction, and damage your reputation.',
  },
  {
    icon: TrendingUp,
    title: 'Rising Energy Costs',
    desc: 'Poorly maintained systems consume 20-40% more energy, inflating your operational budget unnecessarily.',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Risks',
    desc: 'Outdated maintenance records and neglected systems expose you to regulatory penalties and insurance issues.',
  },
  {
    icon: Zap,
    title: 'Reactive Firefighting',
    desc: 'Without preventive maintenance, you\'re constantly reacting to emergencies instead of managing assets strategically.',
  },
];

export default function HomeNeglectRisks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="font-mono text-base tracking-[0.2em] uppercase mb-4 text-[#00E5FF]">Operational Risks</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6 text-foreground whitespace-nowrap">The Cost of Neglecting Your HVAC Systems</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">Without a proactive maintenance program, you're exposed to these operational risks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {risks.map((risk, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              key={risk.title}
              className="p-8 bg-white relative transition-all duration-300 shadow-sm border-t-2 border-r-2 border-b-2 border-pink-100 border-l-0 rounded-r-2xl hover:border-[#00E5FF]/50"
            >
              {/* Bracket '[' Style - positioned to touch outer borders */}
              <div className="absolute -left-1 top-0 bottom-0 w-4 border-l-4 border-t-4 border-b-4 border-pink-400 rounded-l-lg" />

              <div className="flex items-center gap-4 mb-4 pl-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <risk.icon className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">{risk.title}</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pl-4">{risk.desc}</p>
            </motion.div>          ))}
        </div>
      </div>
    </section>
  );
}