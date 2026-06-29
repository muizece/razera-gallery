import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import perfumesImg   from '../assets/Perfumes and Sprays.png';
import boxesImg      from '../assets/Boxes.png';
import petiImg       from '../assets/peti.png';
import flowerPlotImg from '../assets/Flower plot.png';
import toysImg       from '../assets/Toys for kids.png';
import lunchBagImg   from '../assets/Lunch box and carrier.png';

const SHELF_ROWS = [
  [
    { img: perfumesImg,   label: 'Perfumes', x: '8%',  y: '12%', size: 72, delay: 0    },
    { img: flowerPlotImg, label: 'Planter',  x: '28%', y: '8%',  size: 70, delay: 0.15 },
    { img: boxesImg,      label: 'Storage',  x: '50%', y: '10%', size: 68, delay: 0.3  },
    { img: toysImg,       label: 'Toys',     x: '70%', y: '8%',  size: 70, delay: 0.45 },
    { img: lunchBagImg,   label: 'Bags',     x: '88%', y: '12%', size: 66, delay: 0.6  },
  ],
  [
    { img: petiImg,       label: 'Peti Box', x: '15%', y: '55%', size: 68, delay: 0.1  },
    { img: boxesImg,      label: 'Boxes',    x: '36%', y: '57%', size: 65, delay: 0.25 },
    { img: perfumesImg,   label: 'Sprays',   x: '56%', y: '54%', size: 66, delay: 0.4  },
    { img: flowerPlotImg, label: 'Decor',    x: '76%', y: '56%', size: 64, delay: 0.55 },
  ],
];

const FLAT_ITEMS = SHELF_ROWS.flat();

const FEATURES = [
  { icon: '\u{1F3EA}', title: 'One-Stop Store',  desc: 'Everything for your home, lifestyle and gifting under one roof.' },
  { icon: '\u{1F3F7}️', title: 'Starting ₹99', desc: 'Amazing products at prices that fit every family budget.' },
  { icon: '\u{1F680}', title: 'New Arrivals',    desc: 'Fresh products added every week to keep things exciting.' },
  { icon: '\u{1F4AC}', title: 'WhatsApp Orders', desc: 'Simple, friendly ordering directly through WhatsApp chat.' },
];

export default function StoreExperience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 overflow-hidden" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider"
            style={{ background: '#fff7ed', color: '#c2410c', border: '1.5px solid #fed7aa' }}
          >
            Our Store
          </span>
          <h2 className="section-title mb-4">
            Visit <span className="text-gradient-primary">Razera Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Discover hundreds of useful products for your home, lifestyle and gifting needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Store shelf illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y1 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #fdf4ff 100%)',
                border: '2px solid rgba(13,148,136,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                aspectRatio: '4/3',
              }}
            >
              {/* Store sign */}
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-6 py-2.5 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #0d9488, #7c3aed)', boxShadow: '0 4px 20px rgba(13,148,136,0.4)' }}
              >
                <span className="text-white font-black text-sm tracking-wide">
                  {'\u{1F3EA}'} Razera Gallery
                </span>
              </div>

              {[32, 67].map((top, i) => (
                <div
                  key={i}
                  className="absolute left-4 right-4 h-2 rounded-full"
                  style={{
                    top: `${top}%`,
                    background: 'linear-gradient(90deg, #e2e8f0, #cbd5e1, #e2e8f0)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 10,
                  }}
                />
              ))}

              {FLAT_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -(5 + (i % 4) * 2), 0] }}
                  transition={{ duration: 2.5 + (i % 3) * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ left: item.x, top: item.y, transform: 'translate(-50%, 0)', zIndex: 5 }}
                >
                  <div
                    className="rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center"
                    style={{ width: item.size, height: item.size, padding: 4 }}
                  >
                    <img src={item.img} alt={item.label} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-3xl" style={{ background: 'linear-gradient(0deg, rgba(13,148,136,0.06), transparent)' }} />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 right-5 px-3 py-2 rounded-xl text-white font-black text-sm shadow-lg z-20"
                style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}
              >
                All from {'₹'}99! {'\u{1F389}'}
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y2 }}
            className="flex flex-col gap-5"
          >
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(248,250,252,0.8)', border: '1.5px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{feat.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="https://wa.me/916305863828"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-2 flex items-center gap-3 px-6 py-3.5 rounded-2xl text-white font-bold text-sm w-fit hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 25px rgba(37,211,102,0.4)' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Us on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
