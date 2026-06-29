import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const WA_NUMBER = '916305863828';

function buildWhatsAppMessage(items) {
  const lines = items.map(
    (item) => `• ${item.name} x${item.qty} — ${item.price} each`
  );
  const total = items.reduce((acc, item) => {
    const price = parseInt(item.price.replace('₹', ''));
    return acc + price * item.qty;
  }, 0);

  return encodeURIComponent(
    `Hi Razera Gallery! 👋\n\nI'd like to order:\n\n${lines.join('\n')}\n\n💰 Estimated Total: ₹${total}+\n\nPlease confirm availability and delivery. Thank you! 🙏`
  );
}

export default function WhatsAppCart({ isOpen, onClose, items, onUpdateQty, onRemove }) {
  const total = items.reduce((acc, item) => {
    const price = parseInt(item.price.replace('₹', ''));
    return acc + price * item.qty;
  }, 0);

  const handleSendOrder = () => {
    const msg = buildWhatsAppMessage(items);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  const WAIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col"
            style={{
              width: 'min(420px, 95vw)',
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              boxShadow: '-10px 0 60px rgba(0,0,0,0.12)',
              borderLeft: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  <ShoppingBag size={14} className="text-white" />
                </div>
                <h2 className="font-bold text-slate-800 text-base">Your Cart</h2>
                {items.length > 0 && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: '#f97316' }}>
                    {items.length}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 transition-colors">
                <X size={18} className="text-slate-500" />
              </button>
            </div>

            {/* Info banner */}
            <div className="mx-4 mt-3 px-4 py-2.5 rounded-xl text-xs text-slate-500 flex items-start gap-2" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <span className="text-base">💬</span>
              <span>Add products and send your order directly on WhatsApp. Easy and instant!</span>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
                  <div className="text-6xl">🛍️</div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Your cart is empty</p>
                    <p className="text-xs text-slate-400">Browse our products and add items to place your WhatsApp order.</p>
                  </div>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-3 p-3 rounded-2xl"
                      style={{ background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      {/* Product image or emoji */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        {item.image
                          ? <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                          : <span className="text-2xl">{item.emoji || '📦'}</span>
                        }
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                        <p className="text-xs text-teal-600 font-bold">{item.price} each</p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onUpdateQty(item.id, item.qty - 1)} className="w-6 h-6 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-200" style={{ background: '#f1f5f9' }}>
                          <Minus size={11} />
                        </button>
                        <span className="text-sm font-bold text-slate-700 w-5 text-center">{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="w-6 h-6 rounded-lg flex items-center justify-center text-white" style={{ background: '#0d9488' }}>
                          <Plus size={11} />
                        </button>
                      </div>

                      <button onClick={() => onRemove(item.id)} className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 transition-colors flex-shrink-0">
                        <Trash2 size={13} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-4 py-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500 font-medium">Estimated Total</span>
                  <span className="text-lg font-black text-slate-800">₹{total}+</span>
                </div>
                <button
                  onClick={handleSendOrder}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 25px rgba(37,211,102,0.45)' }}
                >
                  <WAIcon />
                  Send Order on WhatsApp
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  You will be redirected to WhatsApp with your order details
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating FAB */}
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl whatsapp-fab"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        aria-label="Open WhatsApp cart"
      >
        <WAIcon />
        <AnimatePresence>
          {items.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
              style={{ background: '#f97316' }}
            >
              {items.length}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
