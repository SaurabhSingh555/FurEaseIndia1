import { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, ShoppingCart } from 'lucide-react';
import { getBrandSettings } from '../utils/settings';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const settings = getBrandSettings();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToShop = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Group (Right Side) */}
      <div className="fixed bottom-24 right-4 sm:right-6 z-40 flex flex-col space-y-3">
        {/* Scroll To Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${settings.whatsappNumber}?text=Hi%20FurEase%20India!%20🐾%20I'm%2520interested%20in%20your%20premium%20pet%20products.%20Could%20you%20help%20me?`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse"
          title="Chat with us on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </a>
      </div>

      {/* Sticky Bottom Buy Now Bar (Mobile Only) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 py-3 px-4 shadow-2xl transition-all duration-300 md:hidden ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
          {/* Offer text */}
          <div className="space-y-0.5">
            <p className="text-[10px] text-amber-500 font-extrabold tracking-widest uppercase animate-pulse">⚡ Limited Festival Sale</p>
            <h4 className="text-xs font-black text-white">Flat 50% OFF + Free COD</h4>
          </div>

          {/* Action button */}
          <button
            onClick={scrollToShop}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-black text-xs px-5 py-3.5 rounded-xl shadow-lg shadow-amber-500/10 cursor-pointer hover:from-amber-500 hover:to-amber-400 active:scale-95 transition-transform"
          >
            <ShoppingCart className="w-4 h-4 shrink-0" />
            <span>Buy Now (COD)</span>
          </button>
        </div>
      </div>
    </>
  );
}
