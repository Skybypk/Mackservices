import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0A0A0B] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-2">
        <span className="text-[#00E5FF] font-mono text-xs sm:text-sm tracking-wide font-bold">Free Consultation</span>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-6">
          <a href="mailto:drbilla90@gmail.com" className="flex items-center gap-1.5 text-white hover:text-[#00E5FF] transition-colors text-xs sm:text-sm">
            <Mail className="w-3.5 h-3.5" />
            drbilla90@gmail.com
          </a>
          <a href="tel:+601121142177" className="flex items-center gap-1.5 text-white hover:text-[#00E5FF] transition-colors text-xs sm:text-sm">
            <Phone className="w-3.5 h-3.5" />
            +6011-2114 2177
          </a>
        </div>
      </div>
    </div>
  );
} 