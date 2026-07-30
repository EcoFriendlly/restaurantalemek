export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mb-6">
        {/* הטבעת המסתובבת בזהב ובורדו */}
        <div className="w-28 h-28 border-4 border-[#D4AF37]/30 border-t-[#8B0000] border-r-[#D4AF37] rounded-full animate-spin"></div>
        
        {/* הלוגו במרכז */}
        <div className="absolute w-20 h-20 rounded-full overflow-hidden bg-black p-1 shadow-2xl border border-[#D4AF37]">
          <img 
            src="/images/logo.png" 
            alt="Al-Emek Logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback אם התמונה לא נמצאה
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      <h2 className="text-[#D4AF37] font-bold text-2xl tracking-widest animate-pulse">
        מסעדת העמק
      </h2>
    </div>
  );
}