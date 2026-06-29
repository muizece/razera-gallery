import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories';
import ScrollJourney from './components/ScrollJourney';
import DealSection from './components/DealSection';
import FeaturedProducts from './components/FeaturedProducts';
import WhatsAppCart from './components/WhatsAppCart';
import StoreExperience from './components/StoreExperience';
import Location from './components/Location';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty } : i))
      );
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const totalItems = cartItems.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={totalItems} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Categories />
        <ScrollJourney />
        <DealSection />
        <FeaturedProducts onAddToCart={addToCart} />
        <StoreExperience />
        <Location />
        <WhyChooseUs />
      </main>

      <Footer />

      <WhatsAppCart
        isOpen={cartOpen}
        onClose={() => setCartOpen((o) => !o)}
        items={cartItems}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
      />
    </div>
  );
}

