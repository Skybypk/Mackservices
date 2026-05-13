import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0A0A0B] text-white text-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-2">
        <span className="text-[#00FFFF] font-mono text-xs sm:text-sm tracking-widest font-black drop-shadow-[0_0_2px_rgba(0,255,255,0.3)]">Free Consultation</span>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-6">
          <a href="mailto:drbilla90@gmail.com" className="flex items-center gap-1.5 text-white hover:text-[#00E5FF] transition-colors text-xs sm:text-sm">
            <Mail className="w-3.5 h-3.5" />
            drbilla90@gmail.com
          </a>
          <a
            href="https://wa.me/601121142177?text=Hi%20MackServices!%20I'm%20interested%20in%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-[#00E5FF] transition-colors text-xs sm:text-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
} 