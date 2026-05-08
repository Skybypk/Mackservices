import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, HardHat, PaintBucket, Home, AlertTriangle, Users, Award, Clock, Phone, MessageCircle, Zap } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedCard from '../components/shared/AnimatedCard';
import CTABanner from '../components/shared/CTABanner';
import { Input } from '@/api/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Textarea } from '@/api/components/ui/textarea';
import { Button } from '@/api/components/ui/button';
import { toast } from 'sonner';
import repairHeroImage from '@/assets/images/construction-&-repairs-hero.jpg';
import repairSubHero1 from '@/assets/images/construction-&-repairs-sub-hero-1.jpg';
import repairSubHero2 from '@/assets/images/construction-&-repairs-sub-hero-2.jpg';

const RESULT_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/a36084c7c_generated_image.png';

const stats = [
  { value: '500+', label: 'Repairs Completed' },
  { value: '4hr', label: 'Emergency Response' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Emergency Service' },
];

const services = [
  { icon: HardHat, title: 'Structural Repairs', desc: 'Professional assessment and repair of structural elements including foundations, load-bearing walls, beams, and columns. We restore structural integrity safely and to code.', features: ['Foundation crack repair', 'Load-bearing wall reinforcement', 'Beam & column repairs', 'Structural assessments & reports'] },
  { icon: PaintBucket, title: 'Drywall & Painting', desc: 'Expert drywall repair, patching, and full installation, followed by premium interior and exterior painting. Seamless finishes that look brand new every time.', features: ['Drywall patching & boarding', 'Skim coat & texture matching', 'Interior & exterior painting', 'Waterproof coatings available'] },
  { icon: Home, title: 'Roofing Solutions', desc: 'Complete roofing repair and replacement services for flat, pitched, and metal roofs. We stop leaks, replace damaged sections, and carry out full re-roofing projects.', features: ['Roof leak detection & repair', 'Metal & clay tile replacement', 'Flat roof waterproofing', 'Full roof replacement'] },
  { icon: AlertTriangle, title: 'Emergency Repairs', desc: '24/7 emergency repair services for urgent property damage — storm damage, burst pipes, structural failures, and more. Our rapid response team is always on standby.', features: ['24/7 on-call response team', '4-hour guaranteed arrival', 'Temporary weather protection', 'Full damage assessment & repair'] },
];

const reasons = [
  { icon: Zap, title: '4-Hour Emergency Response', desc: 'When things go wrong, we\'re there fast — day or night.' },
  { icon: Award, title: 'Licensed Professionals', desc: 'All structural and specialist works are carried out by certified professionals.' },
  { icon: Clock, title: 'Transparent Pricing', desc: 'Full itemised quotes upfront — no surprise charges after the job.' },
  { icon: Users, title: 'End-to-End Service', desc: 'From initial assessment to final inspection — we manage everything.' },
];

const steps = [
  { num: '01', title: 'Site Assessment', desc: 'We visit and thoroughly assess the damage or issue, identifying all root causes to prevent recurrence.' },
  { num: '02', title: 'Detailed Quote', desc: 'You receive a clear, itemised quote covering all works required — no hidden extras.' },
  { num: '03', title: 'Expert Repair', desc: 'Our licensed team carries out the repairs to the highest standard with full clean-up included.' },
];

const testimonials = [
  { name: 'Hafiz Roslan', role: 'Building Owner, Cheras', quote: 'After a major storm, our roof was severely damaged. MacServices had a team on-site within 3 hours and completed full repairs within the week. Incredible service.', result: 'Full roof repair after storm damage' },
  { name: 'Cik Salmah', role: 'Homeowner, Klang', quote: 'They fixed cracks in our foundation that other contractors said were impossible. Professional assessment, honest advice, and quality workmanship.', result: 'Foundation crack repair & waterproofing' },
  { name: 'James Ong', role: 'Property Manager, KL', quote: 'We manage 8 commercial properties and MacServices handles all our maintenance and emergency repairs. Reliable, fast, and excellent value.', result: 'Ongoing property maintenance contract' },
];

const repairTypes = ['Structural Repair', 'Drywall & Painting', 'Roof Repair / Replacement', 'Emergency Repair', 'General Maintenance', 'Other'];

export default function Repairs() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', urgency: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please fill in required fields'); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Repair request submitted! We\'ll respond within 2 hours.');
    setForm({ name: '', phone: '', type: '', urgency: '', notes: '' });
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
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider">Repair Services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                Construction & Repairs<br />
                <span className="text-[#00E5FF]">Done Right, Done Fast</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                From emergency storm damage to scheduled structural repairs — our licensed team responds fast, assesses accurately, and delivers quality repairs that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition text-sm animate-pulse-glow">
                  Request Repair <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+601121142177" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition text-sm">
                  <Phone className="w-4 h-4" /> Emergency Line
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] border border-white/10 shadow-2xl">
                <img src={repairHeroImage} alt="Construction repairs" className="w-full h-full object-cover" />
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
          <SectionHeading label="What We Fix" title="Comprehensive Repair Services" description="Structural to cosmetic — we handle every type of property repair with expertise and care." />
          
          {/* Sub-hero images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={repairSubHero1} alt="Repair Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={repairSubHero2} alt="Repair Detail 2" className="w-full h-full object-cover" />
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
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Repairs That Actually Last</h2>
              <p className="text-gray-400 leading-relaxed mb-6">We don't just patch the surface — we diagnose and fix the root cause so the problem doesn't return. Every repair is backed by our workmanship warranty.</p>
              <div className="space-y-3">
                {['Root cause diagnosis, not just surface fixes', 'Licensed structural engineers available', 'All materials to Australian & Malaysian standards', '12-month workmanship warranty'].map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden h-80">
              <img src={RESULT_IMG} alt="Completed commercial repair" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why MacServices" title="Why Choose Us for Repairs" />
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
          <SectionHeading label="Our Process" title="How We Handle Your Repair" description="Fast, transparent, and thorough from start to finish." />
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
          <SectionHeading light label="Client Stories" title="Repair Success Stories" />
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
          <SectionHeading label="Get Started" title="Request a Repair Assessment" description="Describe the issue and we'll dispatch a team for a free assessment." />
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="h-12" />
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="h-12" />
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Type of Repair" /></SelectTrigger>
                <SelectContent>{repairTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
              <Select value={form.urgency} onValueChange={v => setForm({ ...form, urgency: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Urgency Level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency — Need help today</SelectItem>
                  <SelectItem value="urgent">Urgent — Within 48 hours</SelectItem>
                  <SelectItem value="scheduled">Scheduled — Within 1–2 weeks</SelectItem>
                </SelectContent>
              </Select>
              <Textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe the damage or issue..." className="min-h-[100px]" />
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow">
                {submitting ? 'Sending...' : 'Submit Repair Request'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border">
                <p className="text-xs font-mono text-[#00E5FF] tracking-wider mb-2">EMERGENCY LINE</p>
                <a href="tel:+601121142177" className="flex items-center gap-2 text-lg font-heading font-bold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors"><Phone className="w-5 h-5 text-[#00E5FF]" />+6011-2114 2177</a>
                <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
              </div>
              <a href="https://wa.me/601121142177?text=Hi%2C%20I%20need%20emergency%20repair%20assistance." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-6 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp for Fast Response
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need Urgent Repairs?" description="Our 24/7 emergency response team is ready to help. Call now for immediate assistance." />
    </div>
  );
} 