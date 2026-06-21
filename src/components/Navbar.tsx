import { useState, useEffect } from 'react';
import { ShoppingBag, ShieldCheck, Menu, X, User } from 'lucide-react';
import { getBrandSettings } from '../utils/settings';

interface NavbarProps {
  onAdminClick: () => void;
  onCartClick: () => void;
  cartCount: number;
  isAdminLoggedIn: boolean;
}

export default function Navbar({ onAdminClick, onCartClick, cartCount, isAdminLoggedIn }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const settings = getBrandSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-11 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              🐾
            </div>
            <span className="text-white font-black text-xl tracking-tight uppercase group-hover:text-amber-400 transition-colors duration-300">
              {settings.brandName.split(' ')[0]}
              <span className="text-amber-500 font-medium lowercase">.in</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Premium Range
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Why FurEase
            </button>
            <button
              onClick={() => scrollToSection('comparison')}
              className="text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              The Proof
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Happy Paws
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Admin Dashboard Entry */}
            <button
              onClick={onAdminClick}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              title={isAdminLoggedIn ? "Go to Admin Dashboard" : "Admin Login"}
            >
              {isAdminLoggedIn ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="hidden sm:inline">Dashboard</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Admin</span>
                </>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-zinc-900 text-white transition-colors group cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-md shadow-amber-500/25">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 py-4 px-6 space-y-4 shadow-2xl animate-fadeIn">
          <button
            onClick={() => scrollToSection('products')}
            className="block w-full text-left py-2 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
          >
            Premium Range
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="block w-full text-left py-2 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
          >
            Why FurEase
          </button>
          <button
            onClick={() => scrollToSection('comparison')}
            className="block w-full text-left py-2 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
          >
            The Proof
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left py-2 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
          >
            Happy Paws
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left py-2 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
          >
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}
