import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string; // UUID or number as string
  product_name: string;
  description: string;
  price: number;
  original_price: number;
  image_url: string;
  category: string;
  stock: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Order {
  id: string; // UUID or number as string
  customer_name: string;
  mobile_number: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  product_name: string;
  quantity: number;
  payment_method: string; // "COD"
  total_amount: number;
  status: 'New' | 'Confirmed' | 'Packed' | 'Shipped' | 'Delivered' | 'Cancelled';
  order_date: string;
}

// Fallback high-converting products just in case the Supabase table is empty.
// If empty, the admin can click "Seed Sample Products" to populate the Supabase DB!
export const FALLBACK_PRODUCTS: Omit<Product, 'id' | 'created_at' | 'updated_at'>[] = [
  {
    product_name: "FurEase Ultra-Glide Deshedding Brush",
    description: "The ultimate self-cleaning deshedding tool for dogs & cats. Patented micro-bristle technology removes 95% of loose hair in 2 minutes without scratching your pet's skin. Over 45,000+ happy pets in India.",
    price: 999,
    original_price: 1999,
    image_url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    category: "Grooming",
    stock: 85,
    is_active: true
  },
  {
    product_name: "FurEase Orthopedic Memory Foam Pet Bed",
    description: "Premium joint-relief therapeutic bed with waterproof protective liner and ultra-soft washable cover. Designed to relieve pressure points, improve sleep quality, and ease arthritis discomfort in senior pets.",
    price: 2999,
    original_price: 5999,
    image_url: "https://images.unsplash.com/photo-1591584563742-13d58e3e4159?auto=format&fit=crop&q=80&w=800",
    category: "Beds & Comfort",
    stock: 24,
    is_active: true
  },
  {
    product_name: "FurEase Hands-Free Luxury Pet Leash & Harness Set",
    description: "Military-grade adjustable nylon leash with dual bungee absorption and ergonomic padded chest harness. Reflective 3M stitching for safe night walks and zero-tension control.",
    price: 1499,
    original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    category: "Harness & Leashes",
    stock: 50,
    is_active: true
  },
  {
    product_name: "FurEase Magic Paw Cleaner & Moisturizing Balm",
    description: "All-natural silicone massage paw cleaner cup paired with organic shea-butter soothing paw balm. Keeps paws 100% clean, hydrated, and protected from hot Indian pavements.",
    price: 799,
    original_price: 1499,
    image_url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    category: "Grooming",
    stock: 120,
    is_active: true
  }
];
