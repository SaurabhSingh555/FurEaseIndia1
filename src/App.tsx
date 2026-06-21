import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import OfferBanner from './components/OfferBanner';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import BeforeAfter from './components/BeforeAfter';
import ComparisonTable from './components/ComparisonTable';
import ProductsSection from './components/ProductsSection';
import Reviews from './components/Reviews';
import InstagramGallery from './components/InstagramGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import FloatingCTA from './components/FloatingCTA';
import AdminDashboard from './components/AdminDashboard';
import { supabase, Product } from './utils/supabase';
import { Shield, Truck, RotateCcw } from 'lucide-react';

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);
  const [settingsVersion, setSettingsVersion] = useState(0); // Incremented to force re-render when settings update
  const [cartCount, setCartCount] = useState(0);

  // Monitor Supabase session to update navbar and admin state
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdminLoggedIn(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdminLoggedIn(!!session);
      if (!session) {
        setIsAdminMode(false); // Go back to store on logout
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleBuyNow = (product: Product) => {
    setCheckoutProduct(product);
    setCartCount(prev => prev + 1);
  };

  const handleSettingsChange = () => {
    setSettingsVersion(prev => prev + 1);
  };

  if (isAdminMode) {
    return (
      <AdminDashboard 
        onBackToStore={() => setIsAdminMode(false)}
        onSettingsChange={handleSettingsChange}
      />
    );
  }

  return (
    <div key={settingsVersion} className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Announcement Offer Bar */}
      <OfferBanner />

      {/* Header Navigation */}
      <Navbar 
        onAdminClick={() => setIsAdminMode(true)}
        onCartClick={() => {
          // Trigger buy now on the first product as a quick action, or scroll to shop
          const element = document.getElementById('products');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        cartCount={cartCount}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Hero Section */}
      <Hero />

      {/* CRO Conversion Trust Ribbon */}
      <div className="bg-zinc-900 border-t border-b border-zinc-800/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="flex items-center justify-center space-x-2.5">
              <Truck className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-black text-white leading-none">FREE COD SHIPPING</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Pay only upon delivery</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 border-l border-zinc-800/60 pl-2 md:pl-0">
              <Shield className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-black text-white leading-none">100% PET SAFE</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Veterinary certified</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 border-t border-zinc-800/60 pt-4 md:pt-0 md:border-t-0 md:border-l border-zinc-800/60">
              <RotateCcw className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-black text-white leading-none">30-DAY GUARANTEE</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Happiness or full refund</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 border-t border-zinc-800/60 pt-4 md:pt-0 md:border-t-0 md:border-l border-zinc-800/60 pl-2 md:pl-0">
              <div className="flex text-amber-500 shrink-0 text-lg">🐾</div>
              <div className="text-left">
                <p className="text-xs font-black text-white leading-none">VET APPROVED</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Trusted by 45k+ parents</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Dynamic Products Showcase Section */}
      <ProductsSection onBuyNowClick={handleBuyNow} />

      {/* Value Proposition & Benefits */}
      <Benefits />

      {/* Transformation comparison (Before & After) */}
      <BeforeAfter />

      {/* Feature matrix / Brand comparison */}
      <ComparisonTable />

      {/* Real Customer Reviews Section */}
      <Reviews />

      {/* UGC Instagram Grid */}
      <InstagramGallery />

      {/* Collapsible FAQ Section */}
      <FAQ />

      {/* COD & Shipping Trust Callout Banner */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-black py-16 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest bg-black text-amber-500 px-3.5 py-1.5 rounded-full">
            Limited Time Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Give Your Pet the Royal Experience Today.
          </h2>
          <p className="text-black/85 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Order now and get flat 50% discount, free cash on delivery shipping across India, and a 30-day money-back happiness guarantee. No advance payments!
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-3 bg-black hover:bg-zinc-900 text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Order Now (Cash On Delivery)</span>
              <span>🐾</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Details & Contact links */}
      <Footer />

      {/* Floating Buttons & Mobile sticky CTAs */}
      <FloatingCTA />

      {/* Checkout Form Modal */}
      {checkoutProduct && (
        <CheckoutModal 
          product={checkoutProduct}
          isOpen={true}
          onClose={() => setCheckoutProduct(null)}
        />
      )}
    </div>
  );
}
