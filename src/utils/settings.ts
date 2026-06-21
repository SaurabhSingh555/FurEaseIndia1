export interface BrandSettings {
  brandName: string;
  whatsappNumber: string;
  supportEmail: string;
  shippingCharge: number;
  freeShippingLimit: number;
  codAvailable: boolean;
  siteBanner: string;
  heroTitle: string;
  heroSubtitle: string;
  footerDetails: string;
}

const DEFAULT_SETTINGS: BrandSettings = {
  brandName: "FurEase India",
  whatsappNumber: "919876543210", // Without "+" or spaces for direct WhatsApp API link
  supportEmail: "care@furease.in",
  shippingCharge: 0,
  freeShippingLimit: 999,
  codAvailable: true,
  siteBanner: "⚡ FESTIVAL SALE: FLAT 50% OFF + FREE COD SHIPPING ALL OVER INDIA! ⚡",
  heroTitle: "Luxury Care Your Pet Deserves.",
  heroSubtitle: "Experience India's premium self-cleaning grooming tools and orthopedic beds designed for royal pets.",
  footerDetails: "FurEase India - India's Premier D2C Luxury Pet Care Brand. Delivering happiness, health, and comfort to your furry family members."
};

export const getBrandSettings = (): BrandSettings => {
  try {
    const saved = localStorage.getItem('furease_settings');
    if (saved) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Failed to load settings:", e);
  }
  return DEFAULT_SETTINGS;
};

export const saveBrandSettings = (settings: BrandSettings): void => {
  try {
    localStorage.setItem('furease_settings', JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save settings:", e);
  }
};
