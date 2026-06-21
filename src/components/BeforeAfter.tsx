import { XCircle, CheckCircle2 } from 'lucide-react';

export default function BeforeAfter() {
  const problems = [
    "Painful metal pins scratching the pet's sensitive skin, causing fear.",
    "Loose hair flying everywhere, sticking to furniture, clothes, and food.",
    "Hours spent manually pulling tangled hair strands out of brushes.",
    "Flat, cheap cotton beds causing posture issues and sore joints.",
    "Suspicion of fake online stores requiring advance payments."
  ];

  const solutions = [
    "Patented rounded rubber-tipped pins that massage while they deshed.",
    "95% loose hair collected and held securely in the brush head.",
    "One click button instantly pushes the hair plate forward to eject hair.",
    "3-inch therapeutic memory foam supporting the pet's spine perfectly.",
    "100% Cash On Delivery — pay only when your premium product arrives."
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            The Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stop Settling for Cheap Pet Accessories
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            See the difference between frustrating local pet store products and the premium FurEase luxury engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: The Frustrating Way */}
          <div className="bg-zinc-900/40 border border-red-950/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-red-950/60 text-red-400 font-bold text-xs px-4 py-1.5 rounded-bl-xl tracking-wider uppercase border-l border-b border-red-900/40">
              The Old Way
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-300">Cheap Local Alternatives</h3>
                <p className="text-zinc-500 text-xs mt-1">Stressful grooming sessions & restless sleeping nights</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                {problems.map((prob, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/30 text-center">
              <span className="text-xs text-zinc-500 italic">Result: A highly anxious pet, constant vacuuming, and wasted money.</span>
            </div>
          </div>

          {/* Right Side: The Premium FurEase Way */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-amber-950/10">
            {/* Highlighted Border effect */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"></div>
            
            <div className="absolute top-1 right-0 bg-amber-500 text-black font-extrabold text-xs px-4 py-1.5 rounded-bl-xl tracking-wider uppercase">
              The FurEase Experience
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-amber-400">Luxury Grooming & Bedding</h3>
                <p className="text-zinc-400 text-xs mt-1">Stress-free premium care backed by a 30-day guarantee</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                {solutions.map((sol, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-200 text-sm font-medium">{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center bg-zinc-950/50 -mx-8 -mb-8 p-4 rounded-b-3xl">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">🐾 Result: Professional Grooming at Home in 2 Minutes!</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
