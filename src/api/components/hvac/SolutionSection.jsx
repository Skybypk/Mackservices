import React from 'react';
import { ArrowRight, Calendar, Clock, Activity, FileText, User, Package } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';
import functionsImage from '@/assets/images/hvac-functions.jpg';

const features = [
  { icon: Calendar, text: 'Scheduled preventive maintenance visits' },
  { icon: Clock, text: '24/7 emergency response with SLA guarantees' },
  { icon: Activity, text: 'Complete system health monitoring' },
  { icon: FileText, text: 'Detailed reporting and compliance documentation' },
  { icon: User, text: 'Dedicated account manager for your facility' },
  { icon: Package, text: 'Parts inventory management and priority sourcing' },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Solution"
          title="Commercial HVAC Maintenance Program"
          description="A comprehensive preventive maintenance contract designed for commercial properties. We handle everything so you can focus on your core business."
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative rounded-2xl overflow-hidden h-64 md:h-[400px] border border-border max-w-4xl mx-auto group cursor-pointer"
        >
          <img 
            src={functionsImage} 
            alt="Commercial HVAC system functions and components" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 transition-all">
                  <Icon className="w-5 h-5 text-[#00E5FF] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{f.text}</span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="#request-audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0B] text-white font-semibold rounded-lg hover:bg-[#0A0A0B]/90 transition-all text-sm animate-pulse-glow"
            >
              Learn More About Our Program
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 