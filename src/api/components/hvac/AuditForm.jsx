import React, { useState } from 'react';
import { Button } from '@/api/components/ui/button';
import { Input } from '@/api/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/api/components/ui/select';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const buildingTypes = [
  'Office Building',
  'Shopping Mall / Retail',
  'Hotel / Hospitality',
  'Industrial / Factory',
  'Healthcare Facility',
  'Educational Institution',
  'Other',
];

export default function AuditForm() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', building_type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please fill in required fields');
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Site audit request submitted! We\'ll contact you within 24 hours.');
    setForm({ name: '', company: '', phone: '', building_type: '' });
    setSubmitting(false);
  };

  return (
    <section id="request-audit" className="py-20 bg-[#F5F7F9] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get Started"
          title="Request Your Free Site Audit"
          description="No obligation. Our technical team will assess your facility and provide recommendations."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 bg-white p-8 rounded-2xl border border-border shadow-sm"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name *</label>
              <Input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Full name"
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
              <Input
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                placeholder="Company name"
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
              <Input
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="+60..."
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Building Type</label>
              <Select value={form.building_type} onValueChange={v => setForm({ ...form, building_type: v })}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select building type" />
                </SelectTrigger>
                <SelectContent>
                  {buildingTypes.map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-[#0A0A0B] hover:bg-[#0A0A0B]/90 text-white font-semibold animate-pulse-glow"
            >
              {submitting ? 'Submitting...' : 'Request Free Site Audit'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 bg-white rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-1">Or call directly:</p>
              <a href="tel:+601121142177" className="flex items-center gap-2 text-lg font-heading font-bold text-[#0A0A0B] hover:text-[#00E5FF] transition-colors">
                <Phone className="w-5 h-5 text-[#00E5FF]" />
                +6011-2114 2177
              </a>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-3">Prefer to chat first?</p>
              <a
                href="https://wa.me/601121142177?text=Hi%2C%20I%27d%20like%20to%20discuss%20commercial%20HVAC%20maintenance%20for%20our%20building."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Speak to Technical Manager
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 