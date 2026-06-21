import { ArrowRight, Star, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { getBrandSettings } from '../utils/settings';

export default function Hero() {
  const settings = getBrandSettings();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(39,39,42,0.8),transparent_50%)]"></div>
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-zinc-900/85 border border-zinc-800 rounded-full py-1.5 px-4 animate-fadeIn">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </span>
              <span className="text-xs font-semibold text-zinc-300 tracking-wide border-l border-zinc-800 pl-2">
                4.9/5 Rating (12,500+ Verified Pet Parents in India)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              {settings.heroTitle.split('.').map((part, index) => {
                if (!part.trim()) return null;
                // Make the last part amber or give it a gradient
                if (index === 0) {
                  return (
                    <span key={index} className="block">
                      {part}
                      <span className="text-amber-500">.</span>
                    </span>
                  );
                }
                return (
                  <span key={index} className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2">
                    {part}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {settings.heroSubtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-600/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span>Shop Premium Range</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-2 text-xs text-zinc-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>142 Orders Placed in the Last 3 Hours!</span>
              </div>
            </div>

            {/* Key Trust Pillars */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="p-2 rounded-lg bg-zinc-900 text-amber-500 mb-2">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Free Express Shipping</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">3-5 days delivery across India</p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="p-2 rounded-lg bg-zinc-900 text-amber-500 mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Cash On Delivery</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">No advance payment needed</p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="p-2 rounded-lg bg-zinc-900 text-amber-500 mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Pet-Safe & Tested</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">Vet-approved & skin friendly</p>
              </div>
            </div>

          </div>

          {/* Premium Image Side */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/20 border border-zinc-800/50 group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
              
              <img
                src="https://images.pexels.com/photos/19145879/pexels-photo-19145879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640"
                alt="Premium pet grooming luxury FurEase India"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Floating review card */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/85 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl z-20 shadow-xl">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-black">
                    KS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Kabir Sharma</h4>
                    <p className="text-[10px] text-zinc-400">Delhi, India (Verified Buyer)</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-300 italic">
                  "My Golden Retriever absolutely loves the brush! Grooming used to be a battle, but now he falls asleep. Best purchase of the year!"
                </p>
              </div>

              {/* Promo tag */}
              <div className="absolute top-4 right-4 bg-amber-500 text-black font-extrabold text-xs px-3.5 py-1.5 rounded-full z-20 shadow-lg tracking-wider uppercase animate-bounce">
                Save 50% Today
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
