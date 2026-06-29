import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import perfumeBottlesImg from '../assets/Perfume bottles.png';
import boxesImg          from '../assets/Boxes.png';
import cleaningImg       from '../assets/Mop cleaner and tub.png';
import toysImg           from '../assets/Toys for kids.png';
import lunchBagImg       from '../assets/Lunch box and carrier.png';

const PANELS = [
  {
    tag:   'Fragrance',
    title: 'Perfumes & Sprays',
    desc:  'Luxurious fragrances and refreshing sprays at prices that surprise. Smell amazing without spending a fortune.',
    img:   perfumeBottlesImg,
    color: '#c084fc',
    bg:    'linear-gradient(135deg, #fdf4ff 0%, #ede9fe 100%)',
    badge: '₹99 onwards',
    emoji: '🌺',
  },
  {
    tag:   'Organization',
    title: 'Storage & Boxes',
    desc:  'Keep your home neat with our stylish storage solutions. From small boxes to large containers — organize everything.',
    img:   boxesImg,
    color: '#f97316',
    bg:    'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
    badge: '20+ Styles',
    emoji: '📦',
    flip:  true,
  },
  {
    tag:   'Cleanliness',
    title: 'Cleaning Essentials',
    desc:  'Premium mops, scrubbers and cleaning tools that make your home sparkle. Efficient and long-lasting.',
    img:   cleaningImg,
    color: '#0d9488',
    bg:    'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
    badge: 'Best Sellers',
    emoji: '✨',
  },
  {
    tag:   'Playtime',
    title: 'Toys for Kids',
    desc:  'Safe, colorful and fun toys that spark creativity and keep children engaged. Great for all ages.',
    img:   toysImg,
    color: '#ec4899',
    bg:    'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
    badge: '30+ Toys',
    emoji: '🎠',
    flip:  true,
  },
  {
    tag:   'Everyday',
    title: 'Lunch Boxes & Bags',
    desc:  'Stylish and practical lunch boxes, carrier bags and tiffins for school, office and travel.',
    img:   lunchBagImg,
    color: '#0891b2',
    bg:    'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
    badge: 'New Arrivals',
    emoji: '🎒',
  },
];

function Panel({ panel, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity  = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);
  const x        = useTransform(scrollYProgress, [0.15, 0.4], [panel.flip ? 60 : -60, 0]);
  const imgScale = useTransform(scrollYProgress, [0.2, 0.45], [0.85, 1]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="min-h-[70vh] flex items-center py-20 px-6 lg:px-12">
      <div className={`max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center ${panel.flip ? 'lg:[direction:rtl]' : ''}`}>
        <motion.div style={{ x }} className="lg:[direction:ltr]">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest"
            style={{ background: `${panel.color}18`, color: panel.color, border: `1.5px solid ${panel.color}30` }}
          >
            {panel.emoji} {panel.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">{panel.title}</h2>
          <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-md">{panel.desc}</p>
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
            style={{ background: panel.color, boxShadow: `0 4px 20px ${panel.color}40` }}
          >
            {panel.badge}
          </span>
        </motion.div>

        <motion.div style={{ scale: imgScale }} className="flex items-center justify-center lg:[direction:ltr]">
          <div
            className="relative rounded-3xl p-8 flex items-center justify-center"
            style={{ background: panel.bg, border: `2px solid ${panel.color}20`, boxShadow: `0 20px 60px ${panel.color}15`, minHeight: 300, width: '100%', maxWidth: 440 }}
          >
            <motion.img
              src={panel.img}
              alt={panel.title}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ maxHeight: 280, maxWidth: '90%', objectFit: 'contain', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))' }}
              loading="lazy"
            />
            <div className="absolute top-4 right-4 text-xs font-black px-3 py-1.5 rounded-full text-white" style={{ background: panel.color }}>
              ₹99+
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ScrollJourney() {
  return (
    <section id="new-arrivals" className="relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider" style={{ background: '#f0fdfa', color: '#0f766e', border: '1.5px solid #99f6e4' }}>
            Product Journey
          </span>
          <h2 className="section-title mb-3">
            Explore What We <span className="text-gradient-primary">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Scroll through our curated product categories, each designed for your daily needs.
          </p>
        </motion.div>
      </div>
      {PANELS.map((panel, i) => (
        <Panel key={panel.title} panel={panel} index={i} />
      ))}
    </section>
  );
}
