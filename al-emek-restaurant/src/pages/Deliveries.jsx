import { useLanguage } from '../context/LanguageContext';
import { Phone, Bike, MapPin, Sparkles } from 'lucide-react';

export default function Deliveries() {
  const { lang } = useLanguage();

  const isRtl = lang === 'ar' || lang === 'he';

  const phoneNumbers = [
    { label: '04-9830500', raw: '049830500' },
    { label: '04-9533310', raw: '049533310' },
    { label: '050-564-3643', raw: '0505643643' },
  ];

  const content = {
    he: {
      title: 'שירות משלוחים',
      subtitle: 'משלוחים חמים ומהירים ישר עד הבית, המשרד או המפעל',
      areasTitle: 'אזורי חלוקה',
      areasText: 'רמת ישי, מגדל העמק, יישובי הסביבה, אזורי תעשייה וחברות בסביבה.',
      orderTitle: 'להזמנות חייגו',
      quickCall: 'חיוג מהיר למשלוחים',
    },
    ar: {
      title: 'خدمة التوصيل',
      subtitle: 'توصيل سريع وسخن حتى باب البيت، المكتب أو الشركة',
      areasTitle: 'مناطق التوصيل',
      areasText: 'رمات يشاي، مجدال هعيمق، البلدات المجاورة والشركات والمصانع في المنطقة.',
      orderTitle: 'اطلبوا الآن',
      quickCall: 'اتصال مباشر للتوصيل',
    },
    en: {
      title: 'Delivery Service',
      subtitle: 'Fast & hot delivery directly to your home, office, or business',
      areasTitle: 'Delivery Areas',
      areasText: 'Ramat Yishai, Migdal HaEmek, surrounding towns, and local tech/business parks.',
      orderTitle: 'Order Now',
      quickCall: 'Direct Call for Delivery',
    },
  };

  const t = content[lang] || content.he;

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#141414] text-white min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center selection:bg-[#8B0000] selection:text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12 w-full">
        
        {/* Header Icon & Title */}
        <header className="space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1A1A1A] to-[#242424] rounded-3xl border border-[#D4AF37]/40 shadow-2xl text-4xl transform hover:scale-110 active:scale-95 transition-all duration-300 group">
            <Bike className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] tracking-wider drop-shadow-2xl animate-gradient">
            {t.title}
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            {t.subtitle}
          </p>
          <div className="w-28 sm:w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-4"></div>
        </header>

        {/* Coverage Areas Card */}
        <section aria-labelledby="delivery-areas-title" className="bg-gradient-to-br from-[#1A1A1A] to-[#242424] border border-[#D4AF37]/30 p-6 sm:p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto space-y-3 backdrop-blur-sm hover:shadow-[#D4AF37]/10 transition-all duration-500">
          <div className="flex items-center justify-center gap-2 mb-1">
            <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
            <h2 id="delivery-areas-title" className="text-xl sm:text-2xl font-black text-[#D4AF37]">
              {t.areasTitle}
            </h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.areasText}
          </p>
        </section>

        {/* Ordering Box with Phone Numbers */}
        <section aria-labelledby="order-title" className="bg-gradient-to-br from-[#1A1A1A] to-[#242424] p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-[#D4AF37]/40 max-w-lg mx-auto space-y-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <h3 id="order-title" className="text-2xl sm:text-3xl font-black text-white">
              {t.orderTitle}
            </h3>
          </div>

          <div className="space-y-4">
            {phoneNumbers.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.raw}`}
                aria-label={`Call ${phone.label}`}
                className="group flex items-center justify-between p-4 sm:p-5 bg-gradient-to-r from-[#242424] to-[#1A1A1A] hover:from-[#8B0000] hover:to-[#DC143C] active:from-[#8B0000] active:to-[#DC143C] rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 touch-manipulation min-h-[60px]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#D4AF37]/10 group-hover:bg-white/10 rounded-xl transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wide hidden sm:inline-block">
                    {t.quickCall}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-[#D4AF37] group-hover:text-white font-mono tracking-wider transition-colors duration-300" dir="ltr">
                  {phone.label}
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* Embedded Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}