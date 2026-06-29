import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%20want%20to%20see%20your%20deals.';

const FLOATING_ITEMS = [
  { text: '₹99', x: '8%',  y: '15%', color: '#0d9488', cls: 'text-xl font-black', delay: 0 },
  { text: '⭐',   x: '85%', y: '20%', color: '#f97316', cls: 'text-2xl',            delay: 0.3 },
  { text: '💰', x: '15%', y: '75%', color: '#7c3aed', cls: 'text-2xl',        delay: 0.6 },
  { text: '₹',   x: '78%', y: '65%', color: '#ec4899', cls: 'text-3xl font-black', delay: 0.9 },
  { text: '🛍️', x: '50%', y: '10%', color: '#d97706', cls: 'text-2xl', delay: 0.4 },
  { text: '🎁', x: '92%', y: '50%', color: '#16a34a', cls: 'text-xl',         delay: 0.7 },
  { text: '💫', x: '5%',  y: '45%', color: '#0284c7', cls: 'text-xl',         delay: 1.0 },
];

const DEAL_HIGHLIGHTS = [
  { icon: '🧴', name: 'Perfumes',  price: '₹99'  },
  { icon: '📦', name: 'Storage',   price: '₹99'  },
  { icon: '🌸', name: 'Decor',     price: '₹149' },
  { icon: '🧹', name: 'Cleaning',  price: '₹99'  },
  { icon: '🎁', name: 'Gifts',     price: '₹99'  },
  { icon: '🛍️', name: 'Bags', price: '₹99' },
];

export default function DealSection() {
  return (
    <section
      id="deals"
      className="relative py-28 px-6 lg:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #fefce8 40%, #fdf4ff 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-animate absolute rounded-full" style={{ width: 400, height: 400, top: '-100px', right: '-80px', background: 'radial-gradient(circle, #a5f3fc40, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="blob-animate-delay absolute rounded-full" style={{ width: 350, height: 350, bottom: '-80px', left: '-60px', background: 'radial-gradient(circle, #f9a8d440, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      {/* Floating price tags */}
      {FLOATING_ITEMS.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
          className={`absolute select-none pointer-events-none font-bold ${item.cls}`}
          style={{ left: item.x, top: item.y, color: item.color, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))', opacity: 0.7 }}
        >
          {item.text}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6"
              style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: 'white', boxShadow: '0 4px 20px rgba(13,148,136,0.35)' }}
            >
              <span className="text-base">{'🏷️'}</span> Amazing Value
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="section-title mb-4">
            Small Price.{' '}
            <span className="text-gradient-primary">Big Variety.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="section-subtitle mx-auto text-center">
            Explore useful, stylish and everyday products starting from just ₹99. Great quality, unbeatable prices.
          </motion.p>
        </div>

        {/* Big price display */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center mb-16">
          <div
            className="relative inline-flex items-center justify-center rounded-3xl px-12 py-10"
            style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', border: '2px solid rgba(13,148,136,0.15)', boxShadow: '0 20px 60px rgba(13,148,136,0.1)' }}
          >
            <div className="text-center">
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: 'clamp(4rem, 15vw, 9rem)', background: 'linear-gradient(135deg, #0d9488, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                ₹99
              </div>
              <div className="text-slate-500 font-semibold text-lg tracking-wide">Starting Price</div>
            </div>

            {['⭐', '✨', '💫', '⭐'].map((star, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '50%', left: '50%', width: 130, height: 130, marginTop: -65, marginLeft: -65 }}
              >
                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: `rotate(${(i / 4) * 360}deg) translateX(65px) rotate(-${(i / 4) * 360}deg)`, fontSize: 20 }}>
                  {star}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deal highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {DEAL_HIGHLIGHTS.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex flex-col items-center gap-2 py-5 px-3 rounded-2xl text-center"
              style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(255,255,255,0.9)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <span className="text-3xl">{deal.icon}</span>
              <span className="text-xs font-semibold text-slate-600">{deal.name}</span>
              <span className="text-sm font-black px-2 py-0.5 rounded-lg" style={{ color: '#0d9488', background: '#f0fdfa' }}>{deal.price}+</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 30px rgba(37,211,102,0.45)' }}
          >
            <MessageCircle size={20} />
            Order Your Favourites on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
