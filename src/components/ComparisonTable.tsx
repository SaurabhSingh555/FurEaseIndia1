import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Patented One-Click Clean",
      furease: true,
      local: false,
      generic: false,
      desc: "Instantly ejects hair with one push"
    },
    {
      feature: "Rounded Pet-Safe Massage Tips",
      furease: true,
      local: false,
      generic: "Sometimes",
      desc: "Prevents skin scratching & rashes"
    },
    {
      feature: "Medical-Grade Orthopedic Foam",
      furease: true,
      local: false,
      generic: false,
      desc: "Distributes weight & eases hip dysplasia"
    },
    {
      feature: "100% Cash On Delivery (COD)",
      furease: true,
      local: "Rarely",
      generic: true,
      desc: "Pay only upon visual inspection"
    },
    {
      feature: "30-Day Happiness Guarantee",
      furease: true,
      local: false,
      generic: false,
      desc: "Hassle-free refund if pet is unhappy"
    },
    {
      feature: "Veterinary Endorsed & Certified",
      furease: true,
      local: false,
      generic: false,
      desc: "Approved by professional pet specialists"
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-zinc-900 text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            The Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Designed Better. Built Safer.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            See how FurEase India outperforms standard products in durability, comfort, and safety.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950/85 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-850">
                <th className="p-6 text-sm font-extrabold tracking-wider text-zinc-400 uppercase">Features & Standards</th>
                <th className="p-6 text-sm font-black text-amber-400 uppercase bg-amber-500/5 text-center w-[25%]">
                  🐾 FurEase India
                </th>
                <th className="p-6 text-sm font-bold text-zinc-400 uppercase text-center w-[20%]">
                  Local Pet Stores
                </th>
                <th className="p-6 text-sm font-bold text-zinc-400 uppercase text-center w-[20%]">
                  Generic Online
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-zinc-900/30 transition-colors">
                  {/* Feature & Description */}
                  <td className="p-6">
                    <span className="block font-bold text-white text-sm sm:text-base">{row.feature}</span>
                    <span className="block text-zinc-500 text-xs mt-0.5">{row.desc}</span>
                  </td>

                  {/* FurEase column */}
                  <td className="p-6 text-center bg-amber-500/5 font-bold">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-black">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                  </td>

                  {/* Local stores column */}
                  <td className="p-6 text-center text-zinc-400 text-sm font-medium">
                    {row.local === true ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-950 text-emerald-400">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : row.local === false ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-950/30 text-red-500/50">
                        <X className="w-4 h-4" />
                      </div>
                    ) : (
                      <span className="text-zinc-500 text-xs">{row.local}</span>
                    )}
                  </td>

                  {/* Generic online column */}
                  <td className="p-6 text-center text-zinc-400 text-sm font-medium">
                    {row.generic === true ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-950 text-emerald-400">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : row.generic === false ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-950/30 text-red-500/50">
                        <X className="w-4 h-4" />
                      </div>
                    ) : (
                      <span className="text-zinc-400 font-semibold text-xs py-1 px-2 rounded bg-zinc-900 border border-zinc-800">
                        {row.generic}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small bottom guarantee note */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          *Comparison points based on lab tests, quality metrics, and customer feedback surveys (2025-2026).
        </div>

      </div>
    </section>
  );
}
