import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';

const testimonials = [
  {
    type: 'Grade A Office Tower',
    quote: 'Since switching to their maintenance program, we\'ve had zero HVAC-related tenant complaints. Their 4-hour emergency response has been tested twice—both times they delivered.',
    result: 'Zero downtime in 18 months',
    name: 'Ahmad Fauzi',
    role: 'Facilities Director',
    company: 'Menara Corporate Tower • KLCC',
  },
  {
    type: 'Shopping Mall',
    quote: 'Managing HVAC across 200,000 sq ft of retail space was a nightmare. Their team took over completely—scheduled maintenance, emergency calls, compliance reports.',
    result: '35% reduction in energy costs',
    name: 'Jennifer Tan',
    role: 'Operations Manager',
    company: 'Pavilion Retail Group • Bukit Bintang',
  },
  {
    type: 'Healthcare Facility',
    quote: 'In healthcare, HVAC isn\'t optional—it\'s life-critical. Their SLA guarantees and 24/7 monitoring give us peace of mind. The documentation for MSQH audits is always ready.',
    result: '100% compliance audit pass rate',
    name: 'Dr. Krishnan',
    role: 'Hospital Administrator',
    company: 'Private Healthcare Facility • Petaling Jaya',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0A0A0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          label="Testimonials"
          title="Trusted by Leading Commercial Properties"
          description="See how our maintenance programs deliver measurable results"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedCard key={i} index={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 transition-all flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-[#00E5FF] fill-[#00E5FF]" />
                ))}
              </div>

              <span className="font-mono text-xs text-[#00E5FF] tracking-wider mb-3">{t.type}</span>

              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">"{t.quote}"</p>

              <div className="px-3 py-2 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-5">
                <p className="text-xs text-gray-400">Key Result</p>
                <p className="text-sm font-semibold text-[#00E5FF]">{t.result}</p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-sm text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.company}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {['Serving KL & Selangor commercial properties', 'CIDB-registered contractor', 'Comprehensive liability insurance', 'ISO-aligned maintenance procedures'].map(badge => (
            <span key={badge} className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
} 