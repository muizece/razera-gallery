import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Categories' },
  { href: '#deals', label: 'Best Deals' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

const CAT_LINKS = [
  'Perfumes & Sprays', 'Home Decor', 'Storage Boxes',
  'Cleaning Items', 'Toys & Gifts', 'Lunch Boxes',
  'Accessories', 'Kitchen & Bathroom',
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="contact" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)' }}>
                R
              </div>
              <span className="font-black text-lg text-white">Razera Gallery</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your one-stop store for perfumes, decor, home needs, toys, storage, accessories and more. Everything starting from just ₹99.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/razeragallery" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl flex items-center justify-center hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }} aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://wa.me/916305863828" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl flex items-center justify-center hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }} aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
              <a href="https://maps.google.com/?q=Razera+Gallery" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl flex items-center justify-center hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }} aria-label="Location">
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNav(link.href)} className="text-sm text-slate-400 hover:text-teal-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="flex flex-col gap-3">
              {CAT_LINKS.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-slate-400 cursor-default">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(37,211,102,0.15)' }}>
                  <MessageCircle size={14} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/916305863828" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white transition-colors">
                    +91 6305863828
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(13,148,136,0.15)' }}>
                  <MapPin size={14} style={{ color: '#0d9488' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Store Address</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Your Store Address,<br />City, State — Pincode
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(244,63,94,0.15)' }}>
                  <InstagramIcon size={14} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Instagram</p>
                  <a href="https://instagram.com/razeragallery" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white transition-colors">
                    @razeragallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; 2025 Razera Gallery. All rights reserved.
          </p>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)', color: 'white' }}>
            Everything from ₹99 🏷️
          </span>
        </div>
      </div>
    </footer>
  );
}
