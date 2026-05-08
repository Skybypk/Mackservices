import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Ruler, Layers, Paintbrush, RotateCcw, Users, Award, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedCard from '../components/shared/AnimatedCard';
import CTABanner from '../components/shared/CTABanner';
import { Input } from '@/api/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Button } from '@/api/components/ui/button';
import { toast } from 'sonner';

const HERO_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/c98f6c4a8_generated_image.png';
const RESULT_IMG = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/db27a1329_generated_image.png';

const stats = [
  { value: '500+', label: 'Floors Installed' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Flooring Types' },
];

const services = [
  { icon: Layers, title: 'Hardwood Installation', desc: 'Premium solid and engineered hardwood flooring installed with precision joinery. We work with oak, teak, walnut, and all exotic species for timeless beauty that lasts decades.', features: ['Solid & engineered hardwood', 'Floating or nail-down installation', 'Custom staining & finishing', 'Underfloor heating compatible'] },
  { icon: Ruler, title: 'Tile & Stone', desc: 'Expert ceramic, porcelain, marble, and natural stone tile installation for floors and walls. Perfect alignment and grouting for a flawless, professional finish every time.', features: ['Ceramic & porcelain tiles', 'Marble & granite stone', 'Mosaic & feature tiles', 'Waterproof wet area tiling'] },
  { icon: Paintbrush, title: 'Laminate & SPC Vinyl', desc: 'Cost-effective, highly durable flooring solutions with realistic wood and stone finishes. Waterproof SPC vinyl is ideal for high-traffic commercial and residential areas.', features: ['AC4 & AC5 rated laminate', '100% waterproof SPC vinyl', 'Quick click-lock installation', 'Pet & scratch resistant'] },
  { icon: RotateCcw, title: 'Floor Refinishing', desc: 'Restore your existing hardwood floors to their original glory without the cost of full replacement. Our refinishing service removes scratches, stains, and wear for a like-new result.', features: ['Sanding & resurfacing', 'Stain colour matching', 'Polyurethane coating', 'Dustless sanding available'] },
];

const reasons = [
  { icon: Users, title: '50+ Expert Craftsmen', desc: 'In-house, trained flooring specialists — never subcontractors.' },
  { icon: Award, title: 'Quality Materials Only', desc: 'We source from premium suppliers with full product warranties.' },
  { icon: Clock, title: 'On-Time Completion', desc: 'We commit to timelines and keep you updated throughout.' },
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully insured for your peace of mind on every project.' },
];

const steps = [
  { num: '01', title: 'Free Site Measure', desc: 'We visit your property, measure accurately, and assess the subfloor condition.' },
  { num: '02', title: 'Material Selection', desc: 'We guide you through flooring options within your budget and style preferences.' },
  { num: '03', title: 'Professional Installation', desc: 'Our craftsmen install your flooring with precision and minimal disruption.' },
];

const testimonials = [
  { name: 'David Lim', role: 'Homeowner, Petaling Jaya', quote: 'The hardwood floors they installed completely transformed our home. Immaculate workmanship and they finished on schedule.', result: 'Entire 3-storey home refloored' },
  { name: 'Sarah Chen', role: 'Interior Designer, KL', quote: 'I recommend MacServices to all my clients. Their tile work is flawless — perfect grout lines every time.', result: '200m² marble tile project' },
  { name: 'Rajan Kumar', role: 'Facility Manager', quote: 'Did our entire office floor in SPC vinyl over a weekend. Zero disruption to our Monday operations.', result: '1,500 sqft commercial office' },
];

const flooringTypes = ['Hardwood Installation', 'Tile & Stone', 'Laminate & SPC Vinyl', 'Floor Refinishing', 'Other'];

import professionalRoom1 from '@/assets/images/professional-flooring-room-1.jpg';
import professionalRoom2 from '@/assets/images/professional-flooring-room-2.jpg';
import professionalRoom3 from '@/assets/images/professional-flooring-room-3.jpg';
import professionalRoom4 from '@/assets/images/professional-flooring-room-4.jpg';
import flooringHeroImage from '@/assets/images/professional-flooring-hero.jpg';

export default function Flooring() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const flooringShowcase = [
    { url: professionalRoom1, title: 'Luxury Living Room' },
    { url: professionalRoom2, title: 'Modern Kitchen' },
    { url: professionalRoom3, title: 'Premium Hardwood' },
    { url: professionalRoom4, title: 'Commercial Space' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please fill in required fields'); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Quote request sent! We\'ll contact you within 24 hours.');
    setForm({ name: '', phone: '', area: '', type: '' });
    setSubmitting(false);
  };

  return (
    <div>
      {/* ... Hero section ... */}
      <section className="relative overflow-hidden bg-[#0A0A0B] text-white">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Professional flooring installation" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider">Flooring Services</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                Professional Flooring<br />
                <span className="text-[#00E5FF]">Installation Experts</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Transform any space with precision-installed hardwood, tile, laminate, and SPC vinyl flooring. From luxury homes to commercial offices — flawless results guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E5FF] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#00E5FF]/90 transition text-sm animate-pulse-glow">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+601121142177" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] border border-white/10 shadow-2xl group">
                <img
                  src={flooringHeroImage}
                  alt="Flooring Installation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300" />
              </div>
            </motion.div>
          </div>

          {/* Stats row below - slightly closer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.4 }} 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16"
          >
            {stats.map(s => (
              <div key={s.label} className="p-6 bg-black border border-white/10 rounded-xl text-center hover:border-[#00E5FF]/50 transition-all duration-300 shadow-2xl">
                <p className="font-heading text-3xl font-extrabold text-[#00E5FF]">{s.value}</p>
                <p className="text-sm text-gray-300 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Offer" title="Flooring Solutions for Every Space" description="From residential living rooms to high-traffic commercial floors — we have the right solution for you." />
          
          {/* New Image Gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {flooringShowcase.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden border border-border group cursor-pointer"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-semibold tracking-wide uppercase">{img.title}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Result image removed */}

      {/* Why Us */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why MacServices" title="Why Clients Choose Us" />
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
          <SectionHeading label="Our Process" title="Simple 3-Step Process" description="From first contact to finished floor — we make it stress-free." />
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
          <SectionHeading light label="Client Stories" title="What Our Clients Say" />
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

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-[#F5F7F9] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Get Started" title="Request a Free Flooring Quote" description="Tell us about your project and we'll get back to you within 24 hours." />
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="h-12" />
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="h-12" />
              <Input value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} placeholder="Approx. Area (sqft)" className="h-12" />
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Flooring Type" /></SelectTrigger>
                <SelectContent>{flooringTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow">
                {submitting ? 'Sending...' : 'Get My Free Quote'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Call us directly</p>
                <a href="tel:+601121142177" className="flex items-center gap-2 text-lg font-heading font-bold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors"><Phone className="w-5 h-5 text-[#00E5FF]" />+6011-2114 2177</a>
              </div>
              <a href="https://wa.me/601121142177?text=Hi%2C%20I%27m%20interested%20in%20flooring%20installation." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-6 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Transform Your Floors?" description="500+ floors installed across KL & Selangor. Get your free site measure today." />
    </div>
  );
} 