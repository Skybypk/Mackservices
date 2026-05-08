import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const services = [
  { name: 'HVAC Maintenance', path: '/services/hvac-maintenance' },
  { name: 'Professional Flooring', path: '/services/flooring' },
  { name: 'Kitchen & Bath Renovation', path: '/services/renovation' },
  { name: 'Construction & Repairs', path: '/services/repairs' },
  { name: 'Structural Steelworks', path: '/services/steelworks' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1 font-heading text-xl font-extrabold tracking-tight mb-4">
              <span className="text-white">Mac</span>
              <span className="text-[#00E5FF]">Services</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Expert construction and HVAC services backed by 10+ years of excellence. Licensed, bonded, and fully insured.
            </p>
            <div className="flex gap-3">
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#00E5FF] border border-[#00E5FF]/30 rounded">CIDB REGISTERED</span>
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#00E5FF] border border-[#00E5FF]/30 rounded">ISO ALIGNED</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00E5FF]/50" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+601121142177" className="text-sm hover:text-[#00E5FF] transition-colors">+6011-2114 2177</a>
                  <p className="text-xs text-gray-500">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                <a href="mailto:drbilla90@gmail.com" className="text-sm hover:text-[#00E5FF] transition-colors">drbilla90@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">2-3A Retail Shop Park 2 Pavilion, 57000 Bukit Jalil, Kuala Lumpur (Malaysia)</p>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Mon–Fri: 7AM–6PM</p>
                  <p>Sat: 8AM–4PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs">
          <p className="text-[#00E5FF] font-medium">© {new Date().getFullYear()} MacServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 