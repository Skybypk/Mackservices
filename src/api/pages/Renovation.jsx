import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, CookingPot, Bath, Zap, Palette, Users, Award, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedCard from '../components/shared/AnimatedCard';
import CTABanner from '../components/shared/CTABanner';
import { Input } from '@/api/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Textarea } from '@/api/components/ui/textarea';
import { Button } from '@/api/components/ui/button';
import { toast } from 'sonner';
import renovationHeroImage from '@/assets/images/kitchen-&-bath-renovation-hero-1.jpg';
import renovationImage2 from '@/assets/images/kitchen-&-bath-renovation-2.jpg';
import renovationImage3 from '@/assets/images/kitchen-&-bath-renovation-3.jpg';

const KITCHEN_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/e449c9a78_generated_image.png';
const BATH_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/da043788e_generated_image.png';

const stats = [
  { value: '200+', label: 'Kitchens Renovated' },
  { value: '150+', label: 'Bathrooms Transformed' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

const services = [
  { icon: CookingPot, title: 'Custom Cabinetry', desc: 'Bespoke kitchen and bathroom cabinetry designed and built to your exact specifications. Choose from a full range of finishes, hardware, and configurations for a truly custom result.', features: ['Full kitchen cabinet sets', 'Bathroom vanity units', 'Pantry & storage solutions', 'Soft-close mechanisms included'] },
  { icon: Award, title: 'Countertop Installation', desc: 'Premium granite, marble, quartz, and porcelain countertops professionally templated, cut, and installed. Watertight sealing and precision edge finishing for a luxurious look.', features: ['Marble & granite countertops', 'Engineered quartz surfaces', 'Porcelain slab options', 'Seamless splashback integration'] },
  { icon: Zap, title: 'Plumbing & Electrical', desc: 'Full kitchen and bathroom plumbing upgrades and electrical works by licensed professionals. We handle everything from new piping to feature lighting and power point relocation.', features: ['Pipe rerouting & upgrades', 'New fixture installation', 'Electrical rewiring', 'Waterproofing & tanking'] },
  { icon: Palette, title: 'Design Consultation', desc: 'Our experienced designers work with you to create a cohesive, functional, and beautiful renovation plan. We provide 3D visualisations so you know exactly what to expect.', features: ['3D design visualisation', 'Material & finish guidance', 'Layout optimisation', 'Budget planning support'] },
];

const reasons = [
  { icon: Users, title: 'In-House Design Team', desc: 'Our designers and builders work together for seamless results.' },
  { icon: Award, title: 'Premium Materials', desc: 'We only source materials from trusted, quality-assured suppliers.' },
  { icon: Clock, title: 'Minimal Disruption', desc: 'We plan carefully to minimise inconvenience during renovation.' },
  { icon: Shield, title: 'Full Warranty', desc: '12-month workmanship warranty on all renovation projects.' },
];

const steps = [
  { num: '01', title: 'Design Consultation', desc: 'We visit your property, discuss your vision, style, and budget to create a tailored renovation plan.' },
  { num: '02', title: 'Detailed Quotation', desc: 'You receive a fully itemised quote with materials, labour, and timeline — no hidden costs.' },
  { num: '03', title: 'Build & Deliver', desc: 'Our team executes the renovation with precision and hands over a spotless, finished space.' },
];

const testimonials = [
  { name: 'Nurul Hana', role: 'Homeowner, Ampang', quote: 'My kitchen went from a dark, cramped space to a bright modern showroom. The cabinetry is absolutely stunning and everything was done in 3 weeks.', result: 'Full kitchen overhaul' },
  { name: 'Mr & Mrs Tan', role: 'Homeowners, Shah Alam', quote: 'The master bathroom renovation exceeded every expectation. The marble work is pristine. We couldn\'t be happier with the result.', result: 'Luxury bathroom transformation' },
  { name: 'Lisa Mahmud', role: 'Property Developer, KL', quote: 'We use MacServices for all our show unit renovations. Consistently excellent quality and they always deliver on time.', result: '12 show units renovated' },
];

const renovationTypes = ['Full Kitchen Renovation', 'Bathroom Renovation', 'Both Kitchen & Bathroom', 'Cabinet & Countertop Only', 'Other'];

export default function Renovation() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please fill in required fields'); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Consultation request sent! We\'ll contact you within 24 hours.');
    setForm({ name: '', phone: '', type: '', notes: '' });
    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0A0B] text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider">Renovation Services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                Kitchen & Bath<br />
                <span className="text-[#00E5FF]">Renovation Specialists</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Complete kitchen and bathroom transformations that fuse stunning design with lasting functionality. We manage everything — design, materials, build, and handover.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition text-sm animate-pulse-glow">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+601121142177" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] border border-white/10 shadow-2xl">
                <img src={renovationHeroImage} alt="Kitchen and Bath Renovation" className="w-full h-full object-cover" />
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
          <SectionHeading label="What We Offer" title="Complete Renovation Solutions" description="Every element of your kitchen or bathroom renovation handled by one expert team." />
          
          {/* Added Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={renovationImage2} alt="Kitchen and Bath Renovation 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={renovationImage3} alt="Kitchen and Bath Renovation 3" className="w-full h-full object-cover" />
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
            <div className="order-last lg:order-first space-y-4">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden h-52">
                <img src={KITCHEN_IMG} alt="Modern kitchen renovation" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-2xl overflow-hidden h-52">
                <img src={BATH_IMG} alt="Luxury bathroom renovation" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="font-mono text-xs text-[#00E5FF] tracking-[0.2em] uppercase mb-3">The Outcome</p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Spaces That Inspire Every Day</h2>
              <p className="text-gray-400 leading-relaxed mb-6">A well-renovated kitchen or bathroom doesn't just look beautiful — it adds significant value to your property and improves your everyday quality of life.</p>
              <div className="space-y-3">
                {['End-to-end project management', 'Licensed plumbers & electricians on team', 'All permits & inspections handled', '12-month workmanship warranty'].map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why MacServices" title="Why Choose Us for Your Renovation" />
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
          <SectionHeading label="Our Process" title="How We Work" description="A clear, guided process from first meeting to finished renovation." />
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
          <SectionHeading light label="Client Stories" title="Renovation Success Stories" />
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
          <SectionHeading label="Get Started" title="Book a Free Design Consultation" description="Tell us your renovation vision and we'll create a plan that fits your budget." />
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="h-12" />
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="h-12" />
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Renovation Type" /></SelectTrigger>
                <SelectContent>{renovationTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
              <Textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe your renovation vision..." className="min-h-[100px]" />
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow">
                {submitting ? 'Sending...' : 'Book Free Consultation'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Call us directly</p>
                <a href="tel:+601121142177" className="flex items-center gap-2 text-lg font-heading font-bold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors"><Phone className="w-5 h-5 text-[#00E5FF]" />+6011-2114 2177</a>
              </div>
              <a href="https://wa.me/601121142177?text=Hi%2C%20I%27m%20interested%20in%20a%20kitchen%20or%20bathroom%20renovation." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-6 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Renovate Your Space?" description="Join 200+ satisfied clients who transformed their kitchens and bathrooms with MacServices." />
    </div>
  );
} 