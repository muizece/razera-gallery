import { motion } from 'framer-motion';
import { MapPin, MessageCircle, ExternalLink, Clock } from 'lucide-react';

const WA_LINK   = 'https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%20want%20to%20know%20your%20location.';
const MAPS_LINK = 'https://maps.google.com/?q=Razera+Gallery';

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-6 lg:px-12"
      style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 50%, #fdf4ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider"
            style={{ background: '#f0fdfa', color: '#0f766e', border: '1.5px solid #99f6e4' }}
          >
            Find Us
          </span>
          <h2 className="section-title mb-4">
            Find Us <span className="text-gradient-primary">Easily</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Visit our store and explore more products in person. We are always happy to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            style={{ minHeight: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '2px solid rgba(13,148,136,0.12)' }}
          >
            <div
              className="w-full h-full min-h-[380px] flex flex-col items-center justify-center relative"
              style={{ background: 'linear-gradient(135deg, #e0f2fe, #d1fae5, #f3e8ff)' }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#94a3b8" strokeWidth="6" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#94a3b8" strokeWidth="4" />
                <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#94a3b8" strokeWidth="4" />
              </svg>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl mb-2" style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)', boxShadow: '0 8px 30px rgba(13,148,136,0.4)' }}>
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="w-8 h-3 rounded-full" style={{ background: 'rgba(0,0,0,0.15)', filter: 'blur(4px)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 mt-4 px-5 py-3 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1.5px solid rgba(13,148,136,0.2)' }}
              >
                <p className="font-black text-slate-800 text-base">📍 Razera Gallery</p>
                <p className="text-xs text-slate-500 mt-0.5">Your Store Address Here</p>
                <p className="text-xs text-teal-600 font-semibold mt-1">Get Directions →</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="p-5 rounded-2xl" style={{ background: 'white', border: '1.5px solid rgba(13,148,136,0.12)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}>
                  <MapPin size={16} style={{ color: '#0d9488' }} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Store Address</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your Full Store Address,<br />
                Street Name, Area,<br />
                City — Pincode
              </p>
            </div>

            <div className="p-5 rounded-2xl" style={{ background: 'white', border: '1.5px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fdf4ff, #ede9fe)' }}>
                  <Clock size={16} style={{ color: '#7c3aed' }} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Store Hours</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { day: 'Mon – Sat', time: '9:00 AM – 9:00 PM' },
                  { day: 'Sunday',    time: '10:00 AM – 7:00 PM' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-slate-500">{h.day}</span>
                    <span className="font-semibold text-slate-700">{h.time}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">Open Now</span>
                </div>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-sm text-white hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', boxShadow: '0 4px 20px rgba(13,148,136,0.35)' }}
            >
              <MapPin size={15} /> Open in Google Maps <ExternalLink size={12} />
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-sm text-white hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
