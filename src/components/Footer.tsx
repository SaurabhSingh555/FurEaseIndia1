import { ShieldCheck, Truck, RotateCcw, Heart, Mail, PhoneCall } from 'lucide-react';
import { getBrandSettings } from '../utils/settings';

export default function Footer() {
  const settings = getBrandSettings();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-28 md:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-black text-base shadow-lg shadow-amber-500/15">
                🐾
              </div>
              <span className="text-white font-black text-lg tracking-tight uppercase">
                {settings.brandName.split(' ')[0]}
                <span className="text-amber-500 font-medium lowercase">.in</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              {settings.footerDetails}
            </p>
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
              <span>Made in India with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
              <span>for happy tails.</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Premium Pet Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Why Choose FurEase
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('comparison')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  The Brand Proof
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Verified Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Frequently Asked FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Customer Support</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Have questions or need order assistance? We are available Monday to Sunday, 9 AM - 9 PM.
            </p>
            
            <div className="space-y-3 pt-1 text-xs">
              <a 
                href={`mailto:${settings.supportEmail}`}
                className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{settings.supportEmail}</span>
              </a>
              <a 
                href={`https://wa.me/${settings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+91 {settings.whatsappNumber.slice(2)} (WhatsApp Support)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Brand Trust Badges Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-900 mb-8">
          
          <div className="flex items-center space-x-3 p-3 bg-zinc-900/20 rounded-2xl border border-zinc-900/40">
            <ShieldCheck className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white">100% COD Guarantee</h5>
              <p className="text-[10px] text-zinc-500">Pay only when you inspect</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-zinc-900/20 rounded-2xl border border-zinc-900/40">
            <Truck className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white">Free Express Shipping</h5>
              <p className="text-[10px] text-zinc-500">Across 20,000+ Pin Codes</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-zinc-900/20 rounded-2xl border border-zinc-900/40">
            <RotateCcw className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white">30-Day Refund Window</h5>
              <p className="text-[10px] text-zinc-500">Risk-free happiness guarantee</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-zinc-900/20 rounded-2xl border border-zinc-900/40">
            <span className="text-2xl shrink-0">🛡️</span>
            <div>
              <h5 className="text-xs font-bold text-white">Skin-Safe & Non-Toxic</h5>
              <p className="text-[10px] text-zinc-500">100% Veterinary approved</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 text-[11px] text-zinc-500">
          <p>© {currentYear} {settings.brandName}. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Refund Policy</span>
            <span className="hover:underline cursor-pointer">Shipping & Delivery Info</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
