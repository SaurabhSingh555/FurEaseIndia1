import { Heart, MessageCircle } from 'lucide-react';

export default function InstagramGallery() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
      handle: "@bruno_the_golden_delhi",
      likes: "1,248",
      comments: "84"
    },
    {
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
      handle: "@luna_persian_queen",
      likes: "942",
      comments: "42"
    },
    {
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600",
      handle: "@rocky_boxer_mumbai",
      likes: "2,019",
      comments: "156"
    },
    {
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
      handle: "@milo_indie_paws",
      likes: "876",
      comments: "29"
    },
    {
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600",
      handle: "@pug_charlie_bangalore",
      likes: "1,532",
      comments: "91"
    },
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      handle: "@simba_nala_spitz",
      likes: "1,114",
      comments: "50"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Loved Across Instagram
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tag us <span className="text-amber-400 font-bold">#FurEaseIndia</span> to get featured! See how thousands of Indian pets are living their best lives with us.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, i) => (
            <div 
              key={i} 
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer"
            >
              <img 
                src={post.image} 
                alt={`Instagram post by ${post.handle}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-2 text-center">
                <p className="text-xs font-bold text-amber-400 mb-3 truncate w-full">{post.handle}</p>
                <div className="flex items-center space-x-4 text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-zinc-300" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meta Ads Quick Ticker */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-zinc-900/60 border border-zinc-850 rounded-2xl">
            <span className="text-amber-500">🔥</span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-300">
              Join <span className="text-white font-extrabold">45,000+ Happy FurParents</span> across India. Order today and get flat 50% OFF!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
