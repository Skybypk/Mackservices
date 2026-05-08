import React from 'react';
import HomeQuoteForm from '../components/home/HomeQuoteForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import { motion } from 'framer-motion';

const contactMethods = [
  { icon: Phone, title: 'Call Us', detail: '+6011-2114 2177', sub: 'Available 24/7 for emergencies' },
  { icon: Mail, title: 'Email Us', detail: 'drbilla90@gmail.com', sub: 'We respond within 24 hours' },
  { icon: MapPin, title: 'Visit Us', detail: '2-3A Retail Shop Park 2 Pavilion', sub: 'Bukit Jalil, Kuala Lumpur' },
  { icon: Clock, title: 'Working Hours', detail: 'Mon-Fri: 7AM - 6PM', sub: 'Sat: 8AM - 4PM' },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#0A0A0B] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs text-[#00E5FF] tracking-[0.2em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind or need emergency assistance? Our team is ready to help you with expert advice and reliable service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F7F9] flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm font-semibold text-[#0A0A0B] mb-1">{m.detail}</p>
                  <p className="text-xs text-muted-foreground">{m.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <HomeQuoteForm />

      {/* Map Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Location" 
            title="Where to Find Us" 
            description="Our main office is located in the heart of Bukit Jalil, easily accessible for our clients in KL and Selangor."
          />
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border bg-white shadow-sm relative group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.145664121774!2d101.67060797587425!3d3.05569439692005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bc6996d99db%3A0xc3b446a36f521c72!2sPavilion%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1709664000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
             ></iframe>
          </div>
          <div className="mt-6 p-6 bg-white rounded-xl border border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00E5FF] mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-[#0A0A0B]">Office Address</p>
                <p className="text-sm text-muted-foreground leading-relaxed">2-3A Retail Shop Park 2 Pavilion, 57000 Bukit Jalil, Kuala Lumpur (Malaysia)</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=2-3A+Retail+Shop+Park+2+Pavilion+Bukit+Jalil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#0A0A0B] text-white text-sm font-semibold rounded-lg hover:bg-[#0A0A0B]/90 transition-all flex items-center gap-2"
            >
              Get Directions <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
