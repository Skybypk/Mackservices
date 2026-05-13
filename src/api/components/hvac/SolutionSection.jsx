import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';
import functionsImage from '@/assets/images/hvac-functions.jpg';

const features = [
  'Scheduled preventive maintenance visits',
  '24/7 emergency response with SLA guarantees',
  'Complete system health monitoring',
  'Detailed reporting and compliance documentation',
  'Dedicated account manager for your facility',
  'Parts inventory management and priority sourcing',
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden h-64 md:h-[450px] shadow-2xl"
            >
              <img 
                src={functionsImage} 
                alt="Commercial HVAC system" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A0A0B]/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
} 