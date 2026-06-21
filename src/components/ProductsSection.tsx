import { useState, useEffect } from 'react';
import { Star, Flame, ShoppingBag, Loader } from 'lucide-react';
import { supabase, Product, FALLBACK_PRODUCTS } from '../utils/supabase';

interface ProductsSectionProps {
  onBuyNowClick: (product: Product) => void;
}

export default function ProductsSection({ onBuyNowClick }: ProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      // Fetch from Supabase
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      // Filter active products
      let dbProducts = data || [];
      
      // If the database is empty, seed/use fallbacks
      if (dbProducts.length === 0) {
        // Use our default fallback list, mapping a mock id
        const mappedFallbacks = FALLBACK_PRODUCTS.map((p, index) => ({
          ...p,
          id: `fallback-${index + 1}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })) as Product[];
        setProducts(mappedFallbacks);
        
        // Setup categories
        const cats = ['All', ...Array.from(new Set(mappedFallbacks.map(p => p.category)))];
        setCategories(cats);
      } else {
        setProducts(dbProducts);
        
        // Setup categories
        const cats = ['All', ...Array.from(new Set(dbProducts.map(p => p.category)))];
        setCategories(cats);
      }
    } catch (err) {
      console.error("Failed to fetch products from Supabase, using fallback data:", err);
      // Fail-safe fallback data
      const mappedFallbacks = FALLBACK_PRODUCTS.map((p, index) => ({
        ...p,
        id: `fallback-${index + 1}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })) as Product[];
      setProducts(mappedFallbacks);
      
      const cats = ['All', ...Array.from(new Set(mappedFallbacks.map(p => p.category)))];
      setCategories(cats);
    } finally {
      setLoading(false);
    }
  };

  // Filter products by category & activity (active only)
  const filteredProducts = products.filter(product => {
    const isCategoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    // For customers, show only active products
    const isProductActive = product.is_active !== false; 
    return isCategoryMatch && isProductActive;
  });

  return (
    <section id="products" className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Exclusive Shop
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explore Our Premium Range
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Handcrafted accessories, ergonomic gear, and professional grooming items engineered to elevate pet care.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 shrink-0">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader className="w-8 h-8 text-amber-500 animate-spin" />
            <p className="text-zinc-400 text-sm">Loading premium products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-zinc-900 rounded-3xl bg-zinc-900/10">
            <p className="text-zinc-400 text-base">No active products found in this category.</p>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const discountPercentage = product.original_price > product.price
                ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
                : 0;

              return (
                <div 
                  key={product.id}
                  className="group flex flex-col bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-850 hover:border-amber-500/30 hover:bg-zinc-900 transition-all duration-350 shadow-xl relative"
                >
                  {/* Discount Badge */}
                  {discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-lg z-20 shadow-md animate-pulse">
                      {discountPercentage}% OFF
                    </div>
                  )}

                  {/* Stock Alert Badge */}
                  {product.stock > 0 && product.stock <= 10 && (
                    <div className="absolute top-4 right-4 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg z-20 shadow-md flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                      Only {product.stock} Left!
                    </div>
                  )}

                  {/* Out of stock tag */}
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black/75 z-20 flex items-center justify-center">
                      <span className="bg-red-600 text-white font-black text-sm tracking-wider uppercase px-6 py-2.5 rounded-xl shadow-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="aspect-[4/3] w-full bg-zinc-950 overflow-hidden relative border-b border-zinc-950">
                    <img 
                      src={product.image_url} 
                      alt={product.product_name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                          {product.category}
                        </span>
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span className="text-xs font-bold text-zinc-300">4.9</span>
                          <span className="text-[10px] text-zinc-500">(150+)</span>
                        </div>
                      </div>

                      <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-amber-400 transition-colors line-clamp-2">
                        {product.product_name}
                      </h3>

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-zinc-850/60">
                      {/* Price Section */}
                      <div className="flex items-baseline space-x-2.5">
                        <span className="text-xl sm:text-2xl font-black text-white">₹{product.price}</span>
                        {product.original_price > product.price && (
                          <>
                            <span className="text-zinc-500 line-through text-xs sm:text-sm">₹{product.original_price}</span>
                            <span className="text-amber-500 text-xs font-bold">Save ₹{product.original_price - product.price}</span>
                          </>
                        )}
                      </div>

                      {/* Buy Button */}
                      <button
                        onClick={() => onBuyNowClick(product)}
                        disabled={product.stock === 0}
                        className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                          product.stock === 0
                            ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-zinc-700'
                            : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black shadow-lg shadow-amber-600/10 hover:shadow-amber-500/20 hover:-translate-y-0.5'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Order Now (Cash On Delivery)</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
