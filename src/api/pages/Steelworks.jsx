import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Building2, Wrench, Layers, Cpu, Users, Award, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedCard from '../components/shared/AnimatedCard';
import CTABanner from '../components/shared/CTABanner';
import { Input } from '@/api/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Textarea } from '@/api/components/ui/textarea';
import { Button } from '@/api/components/ui/button';
import { toast } from 'sonner';
import steelHeroImage from '@/assets/images/Structural- Steelworks-hero.jpg';
import steelSubHero1 from '@/assets/images/Structural- Steelworks-sub-hero-1.jpeg';
import steelSubHero2 from '@/assets/images/Structural- Steelworks-sub-hero-2.jpg';

const RESULT_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/080317b8e_generated_image.png';

const stats = [
  { value: '300+', label: 'Steel Projects' },
  { value: '50+', label: 'Certified Welders' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'CIDB Compliant' },
];

const services = [
  { icon: Building2, title: 'Steel Frame Construction', desc: 'Complete structural steel frame buildings for commercial, industrial, and residential projects. From design and fabrication through to on-site erection and bolting — delivered on schedule.', features: ['Full design & fabrication', 'Portal frame & multi-storey', 'Factory & warehouse structures', 'Pre-engineered steel buildings'] },
  { icon: Wrench, title: 'Welding & Fabrication', desc: 'Precision welding and custom steel fabrication by certified MIG, TIG, and ARC welders. We fabricate beams, trusses, frames, brackets, and bespoke structural components in our own workshop.', features: ['MIG, TIG & ARC welding', 'Structural beam fabrication', 'Custom truss manufacturing', 'Workshop-based fabrication'] },
  { icon: Layers, title: 'Structural Reinforcement', desc: 'Steel reinforcement and strengthening solutions for aging or undersized structures. We assess, design, and install steel reinforcement to bring buildings up to current structural standards.', features: ['Structural load assessment', 'Column & beam jacketing', 'Steel plate bonding', 'Seismic retrofit solutions'] },
  { icon: Cpu, title: 'Custom Steel Solutions', desc: 'Architectural and functional steelwork including staircases, mezzanines, walkways, railings, canopies, and feature structures. Designed, fabricated, and installed to your exact specifications.', features: ['Feature staircases & balustrades', 'Mezzanine floor structures', 'Canopies & shade structures', 'Gates, railings & fencing'] },
];

const reasons = [
  { icon: Award, title: 'CIDB Registered', desc: 'Fully certified and registered — all works are compliant with Malaysian building codes.' },
  { icon: Users, title: '50+ Certified Welders', desc: 'In-house welders certified to international standards. No subcontracting.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Workshop fabrication and site erection planned for precise schedule adherence.' },
  { icon: Shield, title: 'Full Structural Warranty', desc: 'All structural steelworks carry a comprehensive workmanship warranty.' },
];

const steps = [
  { num: '01', title: 'Technical Consultation', desc: 'Our structural engineers and designers assess your project requirements and site conditions.' },
  { num: '02', title: 'Design & Fabrication', desc: 'We produce structural drawings, fabricate all components in our workshop, and quality-check every piece.' },
  { num: '03', title: 'Site Erection', desc: 'Our certified erection team assembles the structure on-site with precision, safety, and speed.' },
];

const testimonials = [
  { name: 'Mr. Azman Razali', role: 'Factory Owner, Shah Alam', quote: 'MacServices designed and erected our 4,000sqm factory steel structure in just 6 weeks. Outstanding quality and zero safety incidents throughout the project.', result: '4,000sqm industrial steel structure' },
  { name: 'Kevin Fong', role: 'Developer, Setia Alam', quote: 'The custom steel staircases and mezzanine they fabricated for our showroom are a real centrepiece. Exceptional craftsmanship and their engineers were always responsive.', result: 'Showroom mezzanine & steel staircase' },
  { name: 'Puan Rohani', role: 'School Principal, PJ', quote: 'They reinforced our aging school building structure efficiently and with minimal disruption to school operations. We felt safe throughout the process.', result: 'Structural reinforcement, 3-storey school' },
];

const steelTypes = ['Steel Frame Building', 'Custom Fabrication', 'Structural Reinforcement', 'Staircase / Mezzanine', 'Canopy / Shade Structure', 'Gates & Railings', 'Other'];

export default function Steelworks() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', type: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please fill in required fields'); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Steelworks enquiry submitted! Our engineers will contact you within 24 hours.');
    setForm({ name: '', phone: '', company: '', type: '', notes: '' });
    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0A0B] text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider">Steelworks Services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                Structural Steelworks<br />
                <span className="text-[#00E5FF]">Built for Strength & Precision</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                From full steel frame buildings to custom fabricated staircases — our certified engineers and welders deliver structural steelwork that's built to last and engineered to perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition text-sm animate-pulse-glow">
                  Get Engineering Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+601121142177" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] border border-white/10 shadow-2xl">
                <img src={steelHeroImage} alt="Structural steelworks" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-center">
                    <p className="font-heading text-2xl font-extrabold text-[#00E5FF]">{s.value}</p>
                    <p className="text-xs text-gray-300 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Build" title="Structural Steelwork Solutions" description="From large industrial structures to custom architectural features — our steel expertise covers every scale." />
          
          {/* Sub-hero images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={steelSubHero1} alt="Steelworks Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={steelSubHero2} alt="Steelworks Detail 2" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedCard key={s.title} index={i} className="p-7 bg-[#F5F7F9] rounded-2xl border border-border hover:border-[#00E5FF]/30 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0A0A0B] group-hover:bg-[#00E5FF]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Result image */}
      <section className="py-20 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="font-mono text-xs text-[#00E5FF] tracking-[0.2em] uppercase mb-3">The Standard</p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Steel Built to Outlast Everything</h2>
              <p className="text-gray-400 leading-relaxed mb-6">Every steel structure we erect is designed by certified engineers, fabricated in our own workshop, and inspected before delivery. We don't cut corners on structural integrity.</p>
              <div className="space-y-3">
                {['Structural PE drawings provided', 'JKR & BOMBA submission assistance', 'Full quality inspection at every stage', 'Anti-corrosion treatment & painting included'].map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden h-80">
              <img src={RESULT_IMG} alt="Completed steel structure" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why MacServices" title="Why Choose Us for Steelworks" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <AnimatedCard key={r.title} index={i} className="p-6 bg-white rounded-xl border border-border text-center hover:shadow-lg hover:border-[#00E5FF]/20 transition-all">
                  <div className="p-3 rounded-xl bg-[#0A0A0B] w-fit mx-auto mb-4"><Icon className="w-5 h-5 text-[#00E5FF]" /></div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-2">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Process" title="From Blueprint to Built" description="A rigorous engineering process that guarantees structural safety and quality." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <AnimatedCard key={s.num} index={i} className="text-center p-8 rounded-2xl bg-[#F5F7F9] border border-border hover:border-[#00E5FF]/30 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0B] text-[#00E5FF] font-mono text-sm font-bold mb-5">{s.num}</div>
                <h3 className="font-heading font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0A0A0B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading light label="Client Stories" title="Steel Projects We're Proud Of" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedCard key={i} index={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 transition-all flex flex-col">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-[#00E5FF] fill-[#00E5FF]" />)}</div>
                <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-1">"{t.quote}"</p>
                <div className="px-3 py-2 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-4">
                  <p className="text-xs text-gray-400">Project</p>
                  <p className="text-sm font-semibold text-[#00E5FF]">{t.result}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 bg-[#F5F7F9] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Get Started" title="Request a Steelworks Engineering Quote" description="Tell us about your project and our structural engineers will be in touch within 24 hours." />
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="h-12" />
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="h-12" />
              <Input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="h-12" />
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Type of Steelwork" /></SelectTrigger>
                <SelectContent>{steelTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
              <Textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe your project (size, scope, location)..." className="min-h-[100px]" />
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow">
                {submitting ? 'Sending...' : 'Submit Engineering Enquiry'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Call our engineers</p>
                <a href="tel:+601121142177" className="flex items-center gap-2 text-lg font-heading font-bold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors"><Phone className="w-5 h-5 text-[#00E5FF]" />+6011-2114 2177</a>
              </div>
              <a href="https://wa.me/601121142177?text=Hi%2C%20I%27m%20interested%20in%20structural%20steelworks%20for%20my%20project." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-6 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Build in Steel?" description="300+ steel projects completed across Selangor & KL. Speak to our engineers today." />
    </div>
  );
} 