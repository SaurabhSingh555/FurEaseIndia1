import { getBrandSettings } from '../utils/settings';

export default function OfferBanner() {
  const settings = getBrandSettings();
  
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-2.5 px-4 overflow-hidden relative z-50 shadow-md">
      <div className="flex justify-center items-center text-center">
        <div className="inline-flex items-center text-xs md:text-sm font-bold tracking-wider uppercase animate-pulse">
          <span className="inline-block w-2 h-2 rounded-full bg-black mr-2"></span>
          {settings.siteBanner}
          <span className="inline-block w-2 h-2 rounded-full bg-black ml-2"></span>
        </div>
      </div>
    </div>
  );
}
