import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import perfumeBottleImg   from '../assets/perfume bottle.png';
import sprayImg           from '../assets/Spray.png';
import flowerPotImg       from '../assets/Flower pot.png';
import boxImg             from '../assets/Box.png';
import premiumLunchBoxImg from '../assets/premium lunch box.png';
import toyCarImg          from '../assets/car toy.png';
import mopImg             from '../assets/Mop cleaner and tub.png';
import lunchBagImg        from '../assets/Lunch box and carrier.png';
import perfumeBottlesImg  from '../assets/Perfume bottles.png';
import flowerPlotImg      from '../assets/Flower plot.png';
import yellowDaisyPotImg  from '../assets/ChatGPT Image Jun 30, 2026, 08_33_08 AM (1).png';
import candyJarImg        from '../assets/ChatGPT Image Jun 30, 2026, 08_33_08 AM (2).png';
import dinoToyImg         from '../assets/ChatGPT Image Jun 30, 2026, 08_33_08 AM (3).png';
import pedalBinImg        from '../assets/ChatGPT Image Jun 30, 2026, 08_33_08 AM (4).png';
import teddyBearImg       from '../assets/ChatGPT Image Jun 30, 2026, 08_33_08 AM (5).png';
import airFreshenerImg    from '../assets/ChatGPT Image Jun 30, 2026, 08_33_09 AM (6).png';
import handMirrorImg      from '../assets/ChatGPT Image Jun 30, 2026, 08_33_09 AM (7).png';
import toyExcavatorImg    from '../assets/ChatGPT Image Jun 30, 2026, 08_33_09 AM (8).png';
import floralContainerImg from '../assets/ChatGPT Image Jun 30, 2026, 08_33_10 AM (9).png';
import goldVaseImg        from '../assets/ChatGPT Image Jun 30, 2026, 08_33_10 AM (10).png';

const PRODUCTS = [
  { id: 'p1',  name: 'Premium Perfume Bottle', price: '₹149', oldPrice: '₹299', img: perfumeBottleImg,   category: 'Perfumes', rating: 4.8, reviews: 124, badge: 'Best Seller', badgeColor: '#f97316', emoji: '🌺' },
  { id: 'p2',  name: 'Body Spray Deodorant',   price: '₹99',  oldPrice: '₹199', img: sprayImg,           category: 'Perfumes', rating: 4.6, reviews: 89,  badge: 'Hot Deal',   badgeColor: '#ef4444', emoji: '💫' },
  { id: 'p3',  name: 'Flower Pot Decor',        price: '₹149', oldPrice: '₹249', img: flowerPotImg,       category: 'Decor',    rating: 4.7, reviews: 63,  badge: 'New',        badgeColor: '#8b5cf6', emoji: '🌸' },
  { id: 'p4',  name: 'Storage Box',             price: '₹99',  oldPrice: '₹179', img: boxImg,             category: 'Storage',  rating: 4.5, reviews: 200, badge: 'Popular',   badgeColor: '#0d9488', emoji: '📦' },
  { id: 'p5',  name: 'Premium Lunch Box',        price: '₹199', oldPrice: '₹349', img: premiumLunchBoxImg, category: 'Lunch',    rating: 4.9, reviews: 157, badge: 'Premium',   badgeColor: '#2563eb', emoji: '🍱' },
  { id: 'p6',  name: 'Toy Car for Kids',         price: '₹99',  oldPrice: '₹199', img: toyCarImg,          category: 'Toys',     rating: 4.7, reviews: 88,  badge: 'Kids Fav',  badgeColor: '#ec4899', emoji: '🚗' },
  { id: 'p7',  name: 'Mop Cleaner Set',          price: '₹149', oldPrice: '₹279', img: mopImg,             category: 'Cleaning', rating: 4.6, reviews: 211, badge: 'Top Rated', badgeColor: '#0891b2', emoji: '✨' },
  { id: 'p8',  name: 'Lunch Box Carrier Bag',    price: '₹99',  oldPrice: '₹149', img: lunchBagImg,        category: 'Bags',     rating: 4.4, reviews: 72,  badge: 'Value',     badgeColor: '#16a34a', emoji: '🎒' },
  { id: 'p9',  name: 'Perfume Bottles Set',      price: '₹299', oldPrice: '₹499', img: perfumeBottlesImg,  category: 'Perfumes', rating: 4.9, reviews: 196, badge: 'Premium',   badgeColor: '#c084fc', emoji: '🌺' },
  { id: 'p10', name: 'Flower Pot Set',            price: '₹149', oldPrice: '₹249', img: flowerPlotImg,      category: 'Decor',    rating: 4.7, reviews: 54,  badge: 'New',       badgeColor: '#f43f5e', emoji: '🌷' },
  { id: 'p11', name: 'Yellow Daisy Flower Pot',  price: '₹149', oldPrice: '₹249', img: yellowDaisyPotImg,  category: 'Decor',    rating: 4.8, reviews: 37,  badge: 'New',       badgeColor: '#8b5cf6', emoji: '🌼' },
  { id: 'p12', name: 'Decorative Candy Jar',     price: '₹99',  oldPrice: '₹179', img: candyJarImg,        category: 'Decor',    rating: 4.5, reviews: 62,  badge: 'Trending',  badgeColor: '#ec4899', emoji: '🍬' },
  { id: 'p13', name: 'Dino Rubber Toy',          price: '₹99',  oldPrice: '₹199', img: dinoToyImg,         category: 'Toys',     rating: 4.6, reviews: 48,  badge: 'Kids Fav',  badgeColor: '#16a34a', emoji: '🦕' },
  { id: 'p14', name: 'Pedal Dustbin',            price: '₹199', oldPrice: '₹349', img: pedalBinImg,        category: 'Storage',  rating: 4.7, reviews: 115, badge: 'Top Rated', badgeColor: '#f97316', emoji: '🗑️' },
  { id: 'p15', name: 'Pink Teddy Bear',          price: '₹149', oldPrice: '₹299', img: teddyBearImg,       category: 'Toys',     rating: 4.9, reviews: 203, badge: 'Best Seller', badgeColor: '#ec4899', emoji: '🧸' },
  { id: 'p16', name: 'Air Freshener Spray',      price: '₹99',  oldPrice: '₹179', img: airFreshenerImg,    category: 'Home',     rating: 4.6, reviews: 91,  badge: 'Popular',   badgeColor: '#0d9488', emoji: '🌬️' },
  { id: 'p17', name: 'Orange Hand Mirror',       price: '₹99',  oldPrice: '₹149', img: handMirrorImg,      category: 'Accessories', rating: 4.5, reviews: 77, badge: 'Value',  badgeColor: '#f97316', emoji: '🪞' },
  { id: 'p18', name: 'Toy Excavator Truck',      price: '₹149', oldPrice: '₹249', img: toyExcavatorImg,    category: 'Toys',     rating: 4.7, reviews: 59,  badge: 'Hot Deal',  badgeColor: '#eab308', emoji: '🚜' },
  { id: 'p19', name: 'Floral Storage Container', price: '₹99',  oldPrice: '₹169', img: floralContainerImg, category: 'Storage',  rating: 4.6, reviews: 84,  badge: 'New',       badgeColor: '#3b82f6', emoji: '🌸' },
  { id: 'p20', name: 'Golden Striped Vase',      price: '₹199', oldPrice: '₹349', img: goldVaseImg,        category: 'Decor',    rating: 4.8, reviews: 42,  badge: 'Premium',   badgeColor: '#ca8a04', emoji: '🏺' },
];

const WAIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.img, emoji: product.emoji });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
    >
      <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100" style={{ height: 200, padding: 16 }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ height: 160, maxWidth: '90%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }}
          loading="lazy"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 text-[10px] font-black px-2 py-1 rounded-full text-white" style={{ background: product.badgeColor }}>
          {product.badge}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">{product.category}</span>
        <h3 className="font-bold text-slate-800 text-sm mb-2 leading-tight">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          <Star size={11} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
          <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
          <span className="text-xs text-slate-400">({product.reviews})</span>
        </div>
        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="text-lg font-black text-slate-900">{product.price}</span>
            <span className="text-xs text-slate-400 line-through ml-1.5">{product.oldPrice}</span>
          </div>
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.92 }}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white overflow-hidden"
            style={{ background: added ? 'linear-gradient(135deg, #16a34a, #15803d)' : 'linear-gradient(135deg, #0d9488, #0891b2)', minWidth: 80, justifyContent: 'center' }}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span key="added" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                  Added!
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-1">
                  <ShoppingBag size={11} /> Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts({ onAddToCart }) {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider" style={{ background: '#fff7ed', color: '#c2410c', border: '1.5px solid #fed7aa' }}>
            Featured
          </span>
          <h2 className="section-title mb-4">
            Top <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Our most loved products, hand-picked for quality and value. All available starting from ₹99.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%20want%20to%20see%20all%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
          >
            <WAIcon /> See All Products on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
