import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import perfumesImg    from '../assets/Perfumes and Sprays.png';
import homeDecorImg   from '../assets/Home Decor.png';
import homeNeedsImg   from '../assets/home needs.png';
import cleaningImg    from '../assets/Mop cleaner and tub.png';
import toysImg        from '../assets/Toys for kids.png';
import boxesImg       from '../assets/Boxes.png';
import lunchBagImg    from '../assets/Lunch box and carrier.png';
import accessoriesImg from '../assets/Houseries.png';
import sprayBottleImg from '../assets/Spray bottle.png';

const CATEGORIES = [
  { name: 'Perfumes & Sprays',  img: perfumesImg,    emoji: '🌺', count: '20+', color: '#c084fc', bg: 'linear-gradient(135deg, #fdf4ff, #ede9fe)' },
  { name: 'Home Decor',         img: homeDecorImg,   emoji: '🏡', count: '35+', color: '#f97316', bg: 'linear-gradient(135deg, #fff7ed, #fef3c7)' },
  { name: 'Home Needs',         img: homeNeedsImg,   emoji: '🧹', count: '25+', color: '#0d9488', bg: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' },
  { name: 'Cleaning Items',     img: cleaningImg,    emoji: '✨', count: '18+', color: '#0891b2', bg: 'linear-gradient(135deg, #ecfeff, #cffafe)' },
  { name: 'Toys for Kids',      img: toysImg,        emoji: '🎠', count: '30+', color: '#ec4899', bg: 'linear-gradient(135deg, #fdf2f8, #fce7f3)' },
  { name: 'Storage Boxes',      img: boxesImg,       emoji: '📦', count: '22+', color: '#d97706', bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)' },
  { name: 'Lunch Boxes & Bags', img: lunchBagImg,    emoji: '🎒', count: '15+', color: '#16a34a', bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' },
  { name: 'Accessories',        img: accessoriesImg, emoji: '🛒', count: '40+', color: '#7c3aed', bg: 'linear-gradient(135deg, #faf5ff, #ede9fe)' },
  { name: 'Spray Bottles',      img: sprayBottleImg, emoji: '💧', count: '12+', color: '#0284c7', bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)' },
];

function CategoryCard({ cat, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 600, rotateX: springX, rotateY: springY }}
      className="relative group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
        transition={{ duration: 0.2 }}
        className="rounded-3xl overflow-hidden"
        style={{ background: cat.bg, border: `1.5px solid ${cat.color}22`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
      >
        <div className="relative flex items-center justify-center" style={{ height: 190, padding: '8px 8px 0' }}>
          <img
            src={cat.img}
            alt={cat.name}
            style={{ height: 170, width: '100%', objectFit: 'contain', padding: '12px', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }}
            loading="lazy"
          />
          <span className="absolute top-3 right-3 text-xs font-black px-2.5 py-1 rounded-full text-white shadow-md" style={{ background: cat.color }}>
            {cat.count}
          </span>
          <span className="absolute top-3 left-3 text-lg">{cat.emoji}</span>
        </div>
        <div className="px-4 pb-4 pt-3">
          <h3 className="font-bold text-sm text-slate-800 text-center leading-tight">{cat.name}</h3>
          <p className="text-center text-xs mt-1 font-semibold" style={{ color: cat.color }}>From ₹99</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-6 lg:px-12" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider" style={{ background: '#fdf4ff', color: '#7c3aed', border: '1.5px solid #e9d5ff' }}>
            All Categories
          </span>
          <h2 className="section-title mb-4">
            Shop by <span className="text-gradient-purple">Category</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            9 exciting categories, hundreds of products. All starting from just ₹99.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
