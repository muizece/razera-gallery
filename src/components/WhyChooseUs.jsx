import { motion } from 'framer-motion';

const REASONS = [
  { icon: '🏷️', title: 'Starting From ₹99',      desc: 'Incredible prices that make quality products accessible to everyone.',                    color: 'from-teal-50 to-cyan-50',    accent: '#0d9488', border: 'rgba(13,148,136,0.15)' },
  { icon: '🛍️', title: 'Wide Variety in One Store', desc: 'Perfumes, decor, cleaning, toys, bags, accessories — all in one place.',                 color: 'from-orange-50 to-yellow-50', accent: '#d97706', border: 'rgba(217,119,6,0.15)'   },
  { icon: '📦', title: 'New Arrivals Regularly',   desc: 'Fresh, trendy products added every week to keep your home updated.',                      color: 'from-purple-50 to-pink-50',  accent: '#9333ea', border: 'rgba(147,51,234,0.15)' },
  { icon: '💬', title: 'Easy WhatsApp Ordering',   desc: 'No complicated checkout. Just chat with us on WhatsApp to order.',                        color: 'from-green-50 to-emerald-50', accent: '#16a34a', border: 'rgba(22,163,74,0.15)'   },
  { icon: '🎁', title: 'Perfect for Gifting',      desc: 'Find great gifts for every occasion — birthday, anniversary, or just because.',           color: 'from-pink-50 to-rose-50',    accent: '#e11d48', border: 'rgba(225,29,72,0.15)'   },
  { icon: '🏠', title: 'Home & Daily Needs',       desc: 'Everything your household needs daily, at prices that make sense.',                        color: 'from-blue-50 to-indigo-50',  accent: '#2563eb', border: 'rgba(37,99,235,0.15)'   },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider" style={{ background: '#fdf4ff', color: '#7c3aed', border: '1.5px solid #e9d5ff' }}>
            Why Us?
          </span>
          <h2 className="section-title mb-4">
            Why Choose <span className="text-gradient-purple">Razera Gallery?</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We believe everyone deserves great quality products at fair prices. Here is what makes us different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${reason.color}`}
              style={{ border: `1.5px solid ${reason.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', cursor: 'default' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-md" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}>
                {reason.icon}
              </div>
              <h3 className="font-bold text-base mb-2 text-slate-800">{reason.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full" style={{ background: reason.accent }} />
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 rounded-3xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #0d9488 0%, #7c3aed 50%, #ec4899 100%)', padding: '3rem 2rem' }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {['🌸', '⭐', '💫', '✨', '🎉', '🌟'].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                className="absolute text-2xl select-none pointer-events-none"
                style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              >
                {e}
              </motion.span>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Shop? 🛍️</h3>
            <p className="text-white/80 mb-6 text-base max-w-lg mx-auto">
              Browse our collection and place your order directly on WhatsApp. Fast, simple, and friendly.
            </p>
            <a
              href="https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%27d%20love%20to%20browse%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform"
              style={{ background: 'white', color: '#0d9488', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Shopping on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
