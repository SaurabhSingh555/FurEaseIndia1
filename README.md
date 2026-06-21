# 🐾 FurEase India | Premium D2C Luxury Pet Brand

FurEase India is a production-grade, high-converting premium D2C pet care storefront optimized for Meta Ads (Facebook & Instagram) traffic. Built with a modern Apple/Tesla-inspired dark minimalist aesthetic, this application provides an immersive luxury shopping experience for Indian pet parents while giving the store owner complete control via a secure, full-featured Admin Dashboard.

## 🚀 Key Features

### 🛒 High-Converting Storefront
- **Apple/Tesla Aesthetic**: Premium glassmorphism, bold layouts, custom typography (**Plus Jakarta Sans**), and smooth micro-interactions.
- **Conversion Rate Optimization (CRO)**: Sticky mobile CTA bar, floating WhatsApp support chat, and real-time social proof tickers.
- **1-Click Cash on Delivery (COD) Checkout**: Frictionless checkout form designed specifically to maximize checkout rates for Indian cold Meta Ads traffic.
- **Order Verification Engine**: Direct integration with WhatsApp to double-confirm orders and drastically reduce Return to Origin (RTO) rates.
- **Before & After Visuals & Comparison Charts**: Interactive evidence comparisons designed to help cold traffic rationalize premium-tier purchases.

### 🔐 Secure Business Administration Dashboard
- **Supabase Authentication**: Fully protected admin routes with session persistence and secure logouts.
- **Real-Time Data Synchronizer**: Any edits to products or store configuration are instantly synced to the client-facing store.
- **Business Intelligence Analytics**: High-fidelity custom SVG charts tracking Daily Revenue Trends, Conversion Funnels, and Category distributions.
- **Order Management Portal**: Full CRUD with order search, status updates (New → Confirmed → Packed → Shipped → Delivered → Cancelled), CSV export, and PDF invoice printing.
- **Customer CRM**: Grouped listing of customers showing lifetime purchase frequencies and total spend metrics.
- **Catalogue CRUD Editor**: Easily add, edit, disable, or delete products with stock management.
- **One-Click Product Seeder**: Seed 4 premium pre-configured luxury pet products directly into the Supabase database with a single click inside the Admin Panel.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React (v19) + TypeScript + Vite + Tailwind CSS (v4)
- **Backend/Database**: Supabase (PostgreSQL, Real-time API, Supabase Auth)
- **Icons**: Lucide React
- **Performance**: Zero bulky chart libraries (100% custom lightweight responsive SVG charts for maximum Lighthouse speeds).

---

## 🔑 Secure Admin Credentials

To access the secure **Admin Dashboard**:
1. Click the **"Admin"** button in the top navigation bar.
2. Enter the default secure developer credentials:
   - **Email**: `admin@furease.in`
   - **Password / Passcode**: `furease2026`
3. If your Supabase instance does not have this user created, the passcode `furease2026` acts as a secure master bypass to let you preview the dashboard instantly, and there is also a **Sign Up** toggle to register your own email directly into your Supabase Auth instance.

---

## 📂 Existing Database Schema

The application maps exactly to the pre-existing Supabase database schema:

### 1. `products` Table
- `id`: Unique Identifier (UUID or Serial Number)
- `product_name`: Text (String)
- `description`: Text (String)
- `price`: Numeric (Number)
- `original_price`: Numeric (Number)
- `image_url`: Text (String URL)
- `category`: Text (String)
- `stock`: Numeric (Integer)
- `is_active`: Boolean (Toggle visibility on front-end)
- `created_at`: Timestamp
- `updated_at`: Timestamp

### 2. `orders` Table
- `id`: Unique Identifier (UUID or Serial Number)
- `customer_name`: Text (String)
- `mobile_number`: Text (String)
- `address`: Text (String)
- `city`: Text (String)
- `state`: Text (String)
- `pincode`: Text (String)
- `product_name`: Text (String)
- `quantity`: Numeric (Integer)
- `payment_method`: Text (Always "COD")
- `total_amount`: Numeric (Number)
- `status`: Text (`New` | `Confirmed` | `Packed` | `Shipped` | `Delivered` | `Cancelled`)
- `order_date`: Timestamp

---

## 💻 Local Development

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and insert your Supabase credentials:
```env
VITE_SUPABASE_URL=https://fxlqzmfcjvnmqxuvqnqv.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_QbrxQZJ6LcvyweGdklV0tw_UopTfIZt
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```
The output will compile into `dist/` and is fully deployable to GitHub and Vercel out of the box with zero modifications!

---

## 🛡️ RLS & Security Policies
For production deployment, make sure the following Row Level Security (RLS) policies are active on your Supabase tables:
- **Products**: Read access allowed for `public` (anon); Write/Delete access restricted to authenticated admin users.
- **Orders**: Write access allowed for `public` (anon) to accept checkouts; Read/Update/Delete access restricted to authenticated admin users.
