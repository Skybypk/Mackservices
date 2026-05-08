import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedCard from '../shared/AnimatedCard';

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

export default function ServiceFitSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Eligibility Check"
          title="Is This Service Right for You?"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatedCard index={0} className="p-8 bg-[#F5F7F9] rounded-2xl border border-border">
            <h3 className="font-heading font-bold text-lg text-foreground mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
              This Service Is For
            </h3>
            <ul className="space-y-3">
              {forYou.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard index={1} className="p-8 bg-[#F5F7F9] rounded-2xl border border-border">
            <h3 className="font-heading font-bold text-lg text-foreground mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              This Service Is NOT For
            </h3>
            <ul className="space-y-3">
              {notForYou.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
              For residential AC services, please contact our general repairs team.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
} 