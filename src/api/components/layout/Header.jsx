import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Wrench, Wind, Hammer, HardHat, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'HVAC Maintenance', path: '/services/hvac-maintenance', icon: Wind, desc: 'Commercial climate control & preventive maintenance' },
  { name: 'Professional Flooring', path: '/services/flooring', icon: Layers, desc: 'Hardwood, tile, laminate & vinyl installation' },
  { name: 'Kitchen & Bath Renovation', path: '/services/renovation', icon: Hammer, desc: 'Complete kitchen and bathroom transformations' },
  { name: 'Construction & Repairs', path: '/services/repairs', icon: Wrench, desc: 'Structural repairs, drywall, roofing solutions' },
  { name: 'Structural Steelworks', path: '/services/steelworks', icon: HardHat, desc: 'Steel fabrication, welding & reinforcement' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border' : 'bg-white border-b border-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 font-heading text-3xl font-extrabold tracking-tight">
            <span className="text-[#0A0A0B]">Mac</span>
            <span className="text-[#00E5FF]">Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.path ? 'text-[#0A0A0B] bg-secondary' : 'text-muted-foreground hover:text-[#0A0A0B] hover:bg-secondary/60'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname.startsWith('/services') ? 'text-[#0A0A0B] bg-secondary' : 'text-muted-foreground hover:text-[#0A0A0B] hover:bg-secondary/60'}`}
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-2 w-[420px] bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 mb-1">
                        <p className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">Service Matrix</p>
                      </div>
                      {services.map(service => {
                        const Icon = service.icon;
                        const isActive = location.pathname === service.path;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-all group ${isActive ? 'bg-[#0A0A0B] text-white' : 'hover:bg-secondary'}`}
                          >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-[#00E5FF]/20' : 'bg-secondary group-hover:bg-[#00E5FF]/10'}`}>
                              <Icon className={`w-4 h-4 ${isActive ? 'text-[#00E5FF]' : 'text-muted-foreground group-hover:text-[#00E5FF]'}`} />
                            </div>
                            <div>
                              <p className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-foreground'}`}>{service.name}</p>
                              <p className={`text-xs mt-0.5 ${isActive ? 'text-gray-300' : 'text-muted-foreground'}`}>{service.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#0A0A0B] text-white text-sm font-semibold rounded-lg hover:bg-[#0A0A0B]/90 transition-all animate-pulse-glow"
            >
              Get Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg ${location.pathname === link.path ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/60'}`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted-foreground rounded-lg hover:bg-secondary/60"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-1">
                      {services.map(service => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-secondary transition-colors"
                          >
                            <Icon className="w-4 h-4 text-[#00E5FF]" />
                            {service.name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/contact"
                className="block mt-4 text-center px-5 py-3 bg-[#0A0A0B] text-white text-sm font-semibold rounded-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 