import { Star, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Rohan Deshmukh",
      city: "Mumbai",
      stars: 5,
      title: "Cleanest house I've had in years!",
      body: "We have two heavy-shedding Labradors, and hair used to be our carpets' permanent color. This self-cleaning brush is magic! We brush them daily, press the button, and the hair block just slides off into the bin. Highly recommend COD delivery, very fast!",
      date: "2 days ago",
      initials: "RD"
    },
    {
      name: "Anjali Menon",
      city: "Bangalore",
      stars: 5,
      title: "My Persian Cat actually purrs now!",
      body: "Usually, grooming means getting scratched. But the FurEase brush has soft rounded pins that must feel like a massage because my cat now jumps onto my lap when she sees the brush! Outstanding quality and super premium packaging.",
      date: "1 week ago",
      initials: "AM"
    },
    {
      name: "Priyanjali Sen",
      city: "Kolkata",
      stars: 5,
      title: "Orthopedic bed cured my senior dog's limp!",
      body: "My 10-year-old German Shepherd has hip issues and struggled to wake up in the mornings. Since switching to the FurEase Orthopedic bed, his morning stiffness has drastically improved. He sleeps like royalty. Thank you FurEase!",
      date: "3 days ago",
      initials: "PS"
    },
    {
      name: "Vikram Rathore",
      city: "Gurgaon",
      stars: 5,
      title: "Best D2C pet brand in India",
      body: "I was skeptical about ordering online due to cheap quality products, but FurEase is premium! Solid build, high-grade materials, and extremely professional customer support. The cash-on-delivery was seamless.",
      date: "2 weeks ago",
      initials: "VR"
    },
    {
      name: "Sneha Nair",
      city: "Cochin",
      stars: 4,
      title: "Excellent brush and rapid shipping",
      body: "Extremely pleased with the brush. The self-cleaning mechanism works exactly as advertised. The shipping took just 3 days to Cochin. Giving 4 stars only because I want them to launch organic shampoos next!",
      date: "5 days ago",
      initials: "SN"
    },
    {
      name: "Aditya Verma",
      city: "Pune",
      stars: 5,
      title: "Incredible value, premium design",
      body: "Looks like an Apple product for pets! Sleek, minimalist, and very effective. It saves me at least 30 minutes of cleaning every single day. My dog loves the massage, and I love the cleanliness.",
      date: "1 day ago",
      initials: "AV"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-900 text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            Customer Love
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Over 12,000+ Happy Indian Tail Wags
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Read real, unfiltered reviews from verified pet parents who upgraded their pets' lifestyle with FurEase.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-zinc-950/80 p-8 rounded-3xl border border-zinc-850 hover:border-amber-500/25 transition-all duration-350 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Stars and Date */}
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 ${
                          idx < review.stars 
                            ? 'text-amber-500 fill-amber-500' 
                            : 'text-zinc-700'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium">{review.date}</span>
                </div>

                {/* Title & Body */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white leading-snug">"{review.title}"</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {review.body}
                  </p>
                </div>
              </div>

              {/* User Bio */}
              <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-amber-500 font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 fill-black shrink-0" />
                  </h5>
                  <p className="text-[10px] text-zinc-500">{review.city}, India</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rating Ticker Card */}
        <div className="mt-16 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-850 p-8 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
            <div>
              <p className="text-3xl font-black text-amber-500">4.9 / 5</p>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">45,000+</p>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Pets Groomed</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">99.4%</p>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
