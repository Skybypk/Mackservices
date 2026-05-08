import React from 'react';
import AboutPreview from '../components/home/aboutpreview';
import WhyTrustSection from '../components/hvac/WhyTrustSection';
import SectionHeading from '../components/shared/SectionHeading';
import CTABanner from '../components/shared/CTABanner';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Target, Rocket, Heart } from 'lucide-react';
import aboutImage from '@/assets/images/hero.jpg';

const values = [
  { icon: Target, title: 'Precision', desc: 'We believe in measuring twice and cutting once. Accuracy is at the core of everything we build.' },
  { icon: Shield, title: 'Integrity', desc: 'Honest advice, transparent pricing, and standing by our workmanship without exception.' },
  { icon: Rocket, title: 'Efficiency', desc: 'Minimizing disruption to your life or business through meticulous planning and execution.' },
  { icon: Heart, title: 'Care', desc: 'Treating every property as if it were our own, with full clean-up and respect for your space.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#0A0A0B] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs text-[#00E5FF] tracking-[0.2em] uppercase mb-3">Who We Are</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Story & Mission</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Founded on the principles of quality and reliability, MacServices has grown from a small local team into a leading construction and maintenance partner for Selangor and Kuala Lumpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <AboutPreview workImage={aboutImage} />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Our Core Values" 
            title="The Principles That Drive Us" 
            description="Our values aren't just words on a wall — they guide every decision we make and every project we undertake."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#00E5FF]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Trust */}
      <div className="bg-[#F5F7F9]">
        <WhyTrustSection />
      </div>

      {/* Team/History Quote */}
      <section className="py-24 bg-[#0A0A0B] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00E5FF]/5 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00E5FF]/20 mb-8">
            <Award className="w-8 h-8 text-[#00E5FF]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 italic leading-tight">
            "Excellence is not an act, but a habit. We've built our reputation on consistent quality, one project at a time."
          </h2>
          <div className="h-px w-20 bg-[#00E5FF]/30 mx-auto mb-6" />
          <p className="font-heading font-bold text-xl text-white">The MacServices Team</p>
          <p className="text-sm text-[#00E5FF] font-mono tracking-widest uppercase">Since 2014</p>
        </div>
      </section>

      <CTABanner 
        title="Experience the MacServices Difference" 
        description="Let's discuss how our expertise can bring your vision to life or protect your property assets."
      />
    </div>
  );
}
