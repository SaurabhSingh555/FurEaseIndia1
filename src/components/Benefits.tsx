import { Sparkles, Award, RotateCcw, HeartHandshake } from 'lucide-react';

export default function Benefits() {
  const benefitList = [
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "Patented One-Click Self-Cleaning",
      description: "No more painful pulling or cleaning messy brush needles. Simply press the release button, and loose hair slides off instantly in a clean block."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Orthopedic & Joint Care Approved",
      description: "Our premium pet beds utilize medical-grade memory foam designed by veterinary orthopedicians to distribute body weight evenly and ease joint pain."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-amber-500" />,
      title: "100% Risk-Free Cash On Delivery",
      description: "Pay only when the package arrives at your doorstep! We trust you, which is why we offer 100% COD and free delivery across 20,000+ pin codes in India."
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-amber-500" />,
      title: "30-Day Happiness Guarantee",
      description: "If your pet doesn't absolutely fall in love with our products, just contact our friendly support team for a prompt refund. Your pet's joy is our priority."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            Premium Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Crafted for Royal Comfort. Loved by Pet Parents.
          </h2>
          <p className="text-zinc-400 text-base">
            Every FurEase product is engineered to solve the real everyday frustrations of pet parenting. We don't compromise on quality, because your pet deserves the absolute best.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitList.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-5 p-8 bg-zinc-950/80 rounded-2xl border border-zinc-800/60 hover:border-amber-500/30 hover:bg-zinc-950 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-3 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pet Safe Badge Callout */}
        <div className="mt-16 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h4 className="text-base font-bold text-white">100% Non-Toxic & Pet-Safe Materials</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Free from BPA, phthalates, and harsh chemicals. Safe for pets with sensitive skin.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">Vet Approved</span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">Hypoallergenic</span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">ISO Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
