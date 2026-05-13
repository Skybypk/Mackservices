import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppBubble() {
  const phoneNumber = '601121142177';
  const message = encodeURIComponent("Hi MackServices! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip-like label */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#0A0A0B] text-xs font-bold rounded-lg shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* Pulsing effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
