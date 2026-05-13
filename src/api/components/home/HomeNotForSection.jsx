import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const forYou = [
  'Commercial office buildings',
  'Shopping malls & retail complexes',
  'Hotels & hospitality facilities',
  'Industrial & manufacturing plants',
  'Healthcare facilities',
  'Educational institutions',
];

const notForYou = [
  'Residential homes or condos',
  'Single split-unit repairs',
  'One-time service calls',
];

export default function HomeNotForSection() {
  return (
    <section className="py-16 bg-[#F5F7F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Is For Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-3xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">This Service Is For</h3>
            <ul className="space-y-4">
              {forYou.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Is NOT For Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-3xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">This Service Is NOT For</h3>
            <ul className="space-y-4">
              {notForYou.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground border-t border-dashed border-border pt-4">
              For residential AC services, please contact our general repairs team.
            </p>
            <div className="mt-8 pt-6 border-t border-dashed border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Need residential help?</span>
                <a href="/services/repairs" className="inline-flex items-center gap-1 text-xs font-semibold hover:text-[#00E5FF]">
                    View Repairs <ArrowRight className="w-3 h-3" />
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}