import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#categories', label: 'Categories' },
  { href: '#new-arrivals', label: 'New Arrivals' },
  { href: '#deals',      label: 'Best Deals' },
  { href: '#location',   label: 'Location' },
  { href: '#contact',    label: 'Contact' },
];

const WA_LINK = 'https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%20want%20to%20order.';

export default function Navbar({ cartCount = 0, onCartOpen }) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeLink, setActiveLink]   = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.4)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md"
              style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)' }}
            >
              R
            </div>
            <span className="font-black text-lg tracking-tight" style={{ color: '#0f172a' }}>
              Razera{' '}
              <span style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Gallery
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: activeLink === link.href ? '#0d9488' : '#475569',
                  background: activeLink === link.href ? 'rgba(13,148,136,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-xl transition-all duration-200 hover:bg-slate-100"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} style={{ color: '#475569' }} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 3px 15px rgba(37,211,102,0.35)' }}
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 px-4 py-4"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: activeLink === link.href ? '#0d9488' : '#374151',
                    background: activeLink === link.href ? 'rgba(13,148,136,0.08)' : 'transparent',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={15} />
                Order on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
