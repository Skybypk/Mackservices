import React, { useState } from 'react';
import { Button } from '@/api/components/ui/button';
import { Input } from '@/api/components/ui/input';
import { Textarea } from '@/api/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import constructionImage from '@/assets/images/home-constructions.jpg';

const projectTypes = [
  'New Construction',
  'Repairs & Maintenance',
  'Other',
];

const contactInfo = [
  { icon: Phone, title: 'Call Us', main: '+6011-2114 2177', sub: '24/7 Emergency Service' },
  { icon: Mail, title: 'Email Us', main: 'drbilla90@gmail.com', sub: 'Quick Response Guaranteed' },
  { icon: MapPin, title: 'Visit Us', main: '2-3A Retail Shop Park 2 Pavilion', sub: '57000 Bukit Jalil, Kuala Lumpur (Malaysia)' },
  { icon: Clock, title: 'Working Hours', main: 'Mon-Fri: 7AM-6PM', sub: 'Sat: 8AM-4PM' },
];

export default function HomeQuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', project_type: '', address: '', details: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please fill in required fields');
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Quote request submitted! We\'ll get back to you shortly.');
    setForm({ name: '', phone: '', email: '', project_type: '', address: '', details: '' });
    setSubmitting(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get Your Free Quote Today"
          description="Ready to start your construction project? Contact us for a free consultation and detailed quote."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 rounded-2xl overflow-hidden h-[300px] md:h-[450px] border border-border shadow-lg"
        >
          <img
            src={constructionImage}
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4 bg-[#F5F7F9] p-8 rounded-2xl border border-border"
          >
            <h3 className="font-heading font-bold text-lg mb-2">Request a Free Quote</h3>
            <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full Name *" className="h-12 bg-white" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Phone Number *" className="h-12 bg-white" />
              <Input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email Address" className="h-12 bg-white" />
            </div>
            <Select value={form.project_type} onValueChange={v => setForm({...form, project_type: v})}>
              <SelectTrigger className="h-12 bg-white"><SelectValue placeholder="Select service type" /></SelectTrigger>
              <SelectContent>
                {projectTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Input value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="Project Address" className="h-12 bg-white" />
            <Textarea value={form.details} onChange={e => setForm({...form, details: e.target.value})} placeholder="Project Details" className="min-h-[100px] bg-white" />
            <Button type="submit" disabled={submitting} className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow">
              {submitting ? 'Submitting...' : 'Get My Free Quote'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-5 bg-[#F5F7F9] rounded-xl border border-border">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[#00E5FF] mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{c.title}</p>
                      <p className="text-sm font-semibold text-foreground">{c.main}</p>
                      <p className="text-xs text-muted-foreground">{c.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 