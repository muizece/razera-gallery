import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Tag, Package, ChevronDown } from 'lucide-react';
import FrameCanvas from './FrameCanvas';

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const WAIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #fef9f0 40%, #f5fffe 75%, #fdf4ff 100%)',
      }}
    >
      {/* Background blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="blob-animate" style={{ position: 'absolute', width: 600, height: 600, top: -160, right: -120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,241,254,0.55) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="blob-animate-delay" style={{ position: 'absolute', width: 500, height: 500, bottom: -120, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(252,231,243,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="blob-animate-slow" style={{ position: 'absolute', width: 350, height: 350, top: '35%', left: '38%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(254,240,138,0.35) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        {/* Dot grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}>
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.8" fill="#0d9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '100px 2rem 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
          className="hero-grid"
        >

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 16px', borderRadius: 999, fontSize: 12, fontWeight: 700,
                background: 'rgba(13,148,136,0.09)', border: '1.5px solid rgba(13,148,136,0.28)',
                color: '#0f766e', backdropFilter: 'blur(8px)',
              }}>
                <Tag size={12} />
                India's Favourite Variety Store
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0d9488', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} style={{
              fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em',
              fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', color: '#0f172a', margin: 0,
            }}>
              Everything<br />
              <span style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                You Love,
              </span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Starting ₹99
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} style={{
              margin: 0, fontSize: '1rem', color: '#475569', lineHeight: 1.7, maxWidth: 440,
            }}>
              Perfumes, home decor, toys, storage, cleaning, bags &amp; accessories — quality products at prices that make sense.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="https://wa.me/916305863828?text=Hi%20Razera%20Gallery!%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 24px rgba(37,211,102,0.42)' }}
              >
                <WAIcon />
                Shop on WhatsApp
              </a>
              <a href="#categories" className="btn-secondary">
                <Package size={15} />
                Explore Categories
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 32, paddingTop: 4 }}>
              {[
                { value: '500+', label: 'Products' },
                { value: '₹99',  label: 'Starting Price' },
                { value: '9+',   label: 'Categories' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trust row */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['📦 New Arrivals Weekly', '🌟 Wide Variety', '💬 WhatsApp Ordering'].map((b, i) => (
                <span key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                  background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(0,0,0,0.08)',
                  color: '#475569', backdropFilter: 'blur(8px)',
                }}>{b}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Animated product showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute', inset: -20,
              background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(13,148,136,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)',
              filter: 'blur(24px)',
              borderRadius: 32,
            }} />

            {/* Canvas card */}
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.06)',
              background: '#f5f0eb', // matches the warm frame background
              aspectRatio: '16 / 9',
            }}>
              <FrameCanvas />

              {/* Subtle inner border */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: 24, border: '1px solid rgba(255,255,255,0.6)', pointerEvents: 'none' }} />

              {/* Premium badge top-left */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{
                  position: 'absolute', top: 14, left: 14,
                  padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 800,
                  background: 'rgba(255,255,255,0.88)', color: '#0d9488',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(13,148,136,0.2)',
                }}
              >
                ✨ Premium Quality
              </motion.div>

              {/* Price badge bottom-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: 14, right: 14,
                  padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 900,
                  background: 'linear-gradient(135deg, #0d9488, #7c3aed)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(13,148,136,0.4)',
                }}
              >
                From ₹99
              </motion.div>
            </div>

            {/* Floating pill — top right outside */}
            <motion.div
              animate={{ y: [0, -9, 0], rotate: [4, 8, 4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-5%', right: '-4%',
                padding: '7px 15px', borderRadius: 999, fontSize: 12, fontWeight: 800,
                background: '#f97316', color: 'white',
                boxShadow: '0 6px 20px rgba(249,115,22,0.45)',
                whiteSpace: 'nowrap',
              }}
            >
              🔥 Hot Deal
            </motion.div>

            {/* Floating pill — bottom left outside */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [-5, -9, -5] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              style={{
                position: 'absolute', bottom: '-5%', left: '-5%',
                padding: '7px 15px', borderRadius: 999, fontSize: 12, fontWeight: 800,
                background: '#7c3aed', color: 'white',
                boxShadow: '0 6px 20px rgba(124,58,237,0.45)',
                whiteSpace: 'nowrap',
              }}
            >
              🌺 New Arrivals
            </motion.div>

            {/* Star sparkles */}
            {[
              { top: '8%',  left: '-8%',  size: 22, color: '#fbbf24', delay: 0    },
              { top: '88%', left: '102%', size: 18, color: '#ec4899', delay: 0.5  },
              { top: '50%', left: '-10%', size: 14, color: '#0d9488', delay: 1.0  },
            ].map((s, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6], rotate: [0, 30, 0] }}
                transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
                style={{ position: 'absolute', top: s.top, left: s.left, fontSize: s.size, pointerEvents: 'none', userSelect: 'none' }}
              >
                ✦
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, zIndex: 5 }}
      >
        <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} color="#94a3b8" />
        </motion.div>
      </motion.div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
