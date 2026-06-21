import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do you offer Cash On Delivery (COD) and Free Shipping?",
      answer: "Yes, absolutely! We offer 100% Free Shipping and Cash On Delivery (COD) on all orders across India. There are no hidden charges or advance fees. You pay the exact product amount only when the delivery partner hands over your package."
    },
    {
      question: "How long will it take for my order to arrive?",
      answer: "We process and dispatch all orders within 24-48 hours. Depending on your location, delivery takes 3 to 5 business days. Major metros (Delhi NCR, Mumbai, Bangalore, Pune) usually receive orders within 3 days. We will send you a real-time SMS and WhatsApp tracking link as soon as your order is shipped!"
    },
    {
      question: "How does the self-cleaning brush mechanism work?",
      answer: "It's extremely simple and satisfying! The brush features retracting stainless steel needles with round rubber tips. Once you are done brushing your pet, simply press the button on the back of the brush. The needles retract completely, leaving the collected fur on the flat plate, which you can slide off into the dustbin in 1 second without touching any dirt."
    },
    {
      question: "Is the Orthopedic Bed waterproof and washable?",
      answer: "Yes! Our orthopedic beds are designed for heavy daily use. They feature a dual-layer cover system: an inner 100% waterproof protective liner that safeguards the premium memory foam from urine, drool, or spills, and an outer ultra-soft plush cover that can be zipped off and tossed into the washing machine."
    },
    {
      question: "What is your 30-Day Happiness Guarantee?",
      answer: "We stand behind our quality 100%. If your dog or cat does not fall in love with our products, or if you are unsatisfied for any reason, simply email us at care@furease.in or message us on WhatsApp within 30 days of receiving your order. We will arrange a return and issue a full refund—no questions asked!"
    },
    {
      question: "Are these products safe for puppies and kittens?",
      answer: "Definitely. All FurEase products are made using 100% non-toxic, hypoallergenic, and pet-safe materials. The brush tips are coated in soft protective rubber nodes so they massage your pet's skin rather than scratch it, making it completely safe and soothing even for young puppies and kittens."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to know about our premium pet care solutions, shipping, and COD.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-zinc-900/60 border border-zinc-850 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900/80 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-white text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-amber-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Answer container with smooth height transition */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-zinc-850' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 text-center bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-amber-600/10 border border-amber-500/20 rounded-3xl p-8">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">Still have questions? We are active 24/7!</h3>
          <p className="text-xs text-zinc-400 mb-6">Our dedicated pet care experts are ready to help you choose the perfect product for your pet.</p>
          <a
            href="https://wa.me/919876543210?text=Hi%20FurEase,%20I%20have%20a%20question%20about%2520your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <span>💬 Chat directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
