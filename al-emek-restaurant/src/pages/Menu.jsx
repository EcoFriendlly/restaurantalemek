import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'الكل' : lang === 'en' ? 'All' : 'הכל' },
    { id: 'breakfast', label: lang === 'ar' ? 'إفطار' : lang === 'en' ? 'Breakfast' : 'ארוחות בוקר' },
    { id: 'salads', label: lang === 'ar' ? 'سلطات' : lang === 'en' ? 'Salads' : 'סלטים' },
    { id: 'mains', label: lang === 'ar' ? 'الأطباق الرئيسية' : lang === 'en' ? 'Main Dishes' : 'עיקריות' },
    { id: 'fish', label: lang === 'ar' ? 'أسماك' : lang === 'en' ? 'Fish' : 'דגים' },
    { id: 'stuffed', label: lang === 'ar' ? 'محاشي' : lang === 'en' ? 'Stuffed' : 'ממולאים' },
    { id: 'pastries', label: lang === 'ar' ? 'معجنات ومقالي' : lang === 'en' ? 'Pastries & Fried' : 'מאפים וטיגונים' },
  ];

  const menuItems = [
    // --- ארוחות בוקר ---
    { id: 1, category: 'breakfast', title: { he: 'ביצים', ar: 'بيض', en: 'Eggs' }, image: '/images/menu/breakfast/eggs.jpg' },
    { id: 2, category: 'breakfast', title: { he: 'שקשוקה', ar: 'شكشوكة', en: 'Shakshuka' }, image: '/images/menu/breakfast/shakshuka.jpg' },
    { id: 3, category: 'breakfast', title: { he: 'חביתה', ar: 'عجة', en: 'Omelette' }, image: '/images/menu/breakfast/omelette.jpg' },
    { id: 4, category: 'breakfast', title: { he: 'לבנה ביתית', ar: 'لبنة بلدية', en: 'Home-made Labneh' }, image: '/images/menu/breakfast/labneh.jpg' },
    { id: 5, category: 'breakfast', title: { he: 'מסבחה / משוושה', ar: 'مسبحة / مشوشة', en: 'Msabbaha' }, image: '/images/menu/breakfast/mashawsha.jpg' },

    // --- סלטים ---
    { id: 6, category: 'salads', title: { he: 'חומוס עם טחינה', ar: 'حمص مع طحينة', en: 'Hummus with Tahini' }, image: '/images/menu/salads/hummus.jpg' },
    { id: 7, category: 'salads', title: { he: 'חומוס פול', ar: 'حمص فول', en: 'Hummus with Fava Beans' }, image: '/images/menu/salads/hummusful.jpg' },
    { id: 8, category: 'salads', title: { he: 'חומוס גרגירים', ar: 'حمص حب', en: 'Hummus with Chickpeas' }, image: '/images/menu/salads/hummuschickpeas.jpg' },
    { id: 9, category: 'salads', title: { he: 'חציל מתובל', ar: 'باذنجان متبل', en: 'Seasoned Eggplant' }, image: '/images/menu/salads/seasonedeggplant.jpg' },
    { id: 10, category: 'salads', title: { he: 'חציל יווני', ar: 'باذنجان يوناني', en: 'Greek Eggplant' }, image: '/images/menu/salads/greekeggplant.jpg' },
    { id: 11, category: 'salads', title: { he: 'חציל פיקנטי', ar: 'باذنجان حار', en: 'Spicy Eggplant' }, image: '/images/menu/salads/spicyeggplant.jpg' },
    { id: 12, category: 'salads', title: { he: 'חציל רומני', ar: 'باذنجان روماني', en: 'Romanian Eggplant' }, image: '/images/menu/salads/romanianeggplant.jpg' },
    { id: 13, category: 'salads', title: { he: 'סלט ירקות', ar: 'سلطة خضار', en: 'Vegetable Salad' }, image: '/images/menu/salads/vegetablesalad.jpg' },
    { id: 14, category: 'salads', title: { he: 'סלט טורקי', ar: 'سلطة تركية', en: 'Turkish Salad' }, image: '/images/menu/salads/turkishsalad.jpg' },
    { id: 15, category: 'salads', title: { he: 'כרוב לבן', ar: 'ملفوف أبيض', en: 'White Cabbage' }, image: '/images/menu/salads/whitecabbage.jpg' },
    { id: 16, category: 'salads', title: { he: 'כרוב אדום', ar: 'ملفوف أحمر', en: 'Red Cabbage' }, image: '/images/menu/salads/redcabbage.jpg' },
    { id: 17, category: 'salads', title: { he: 'כרובית בתנור עם טחינה', ar: 'زهورات بالمشوي مع طحينة', en: 'Baked Cauliflower with Tahini' }, image: '/images/menu/salads/bakedcauliflower.jpg' },
    { id: 18, category: 'salads', title: { he: 'סלט מטבוחה', ar: 'مطبخية / مطبوخة', en: 'Matbucha' }, image: '/images/menu/salads/matbucha.jpg' },
    { id: 19, category: 'salads', title: { he: 'סלט סלק', ar: 'سلطة شمندر', en: 'Beetroot Salad' }, image: '/images/menu/salads/beetroot.jpg' },
    { id: 20, category: 'salads', title: { he: 'סלט תירס', ar: 'سلطة ذرة', en: 'Corn Salad' }, image: '/images/menu/salads/cornsalad.jpg' },
    { id: 21, category: 'salads', title: { he: 'סלט גזר חי', ar: 'سلطة جزر طازج', en: 'Fresh Carrot Salad' }, image: '/images/menu/salads/freshcarrot.jpg' },
    { id: 22, category: 'salads', title: { he: 'סלט גזר מרוקאי', ar: 'سلطة جزر مغربية', en: 'Moroccan Carrot Salad' }, image: '/images/menu/salads/moroccancarrot.jpg' },
    { id: 23, category: 'salads', title: { he: 'סלט תפוחי אדמה עם נענע', ar: 'سلطة بطاطا بالنعناع', en: 'Potato Salad with Mint' }, image: '/images/menu/salads/potatomint.jpg' },
    { id: 24, category: 'salads', title: { he: 'סלט תפוחי אדמה עם מיונז', ar: 'سلطة بطاطا بالمايونيز', en: 'Potato Salad with Mayo' }, image: '/images/menu/salads/potatomayo.jpg' },
    { id: 25, category: 'salads', title: { he: 'סלט פטריות', ar: 'سلطة فطر', en: 'Mushroom Salad' }, image: '/images/menu/salads/mushroomsalad.jpg' },
    { id: 26, category: 'salads', title: { he: 'סלט טבולה', ar: 'تبولة', en: 'Tabbouleh' }, image: '/images/menu/salads/tabbouleh.jpg' },
    { id: 27, category: 'salads', title: { he: 'במיה', ar: 'بامية', en: 'Okra (Bamya)' }, image: '/images/menu/salads/okra.jpg' },
    { id: 28, category: 'salads', title: { he: 'חציל מבושל', ar: 'باذنجان مطبوخ', en: 'Cooked Eggplant' }, image: '/images/menu/salads/cookedeggplant.jpg' },
    { id: 29, category: 'salads', title: { he: 'חציל בתנור עם טחינה', ar: 'باذنجان بالمشوي مع طحينة', en: 'Baked Eggplant with Tahini' }, image: '/images/menu/salads/bakedeggplanttahini.jpg' },

    // --- מנות עיקריות ---
    { id: 30, category: 'mains', title: { he: 'חומוס עם בשר', ar: 'حمص مع لحمة', en: 'Hummus with Meat' }, image: '/images/menu/mains/hummusmeat.jpg' },
    { id: 31, category: 'mains', title: { he: 'קבב', ar: 'كباب', en: 'Kebab' }, image: '/images/menu/mains/kebab.jpg' },
    { id: 32, category: 'mains', title: { he: 'שישליק פרגית', ar: 'شيش طاووق', en: 'Chicken Skewers' }, image: '/images/menu/mains/chickenskewers.jpg' },
    { id: 33, category: 'mains', title: { he: 'כבד עוף בגריל', ar: 'كبد دجاج مشوي', en: 'Grilled Chicken Liver' }, image: '/images/menu/mains/livergrilled.jpg' },
    { id: 34, category: 'mains', title: { he: 'כבד עוף מטוגן', ar: 'كبد دجاج مقلي', en: 'Fried Chicken Liver' }, image: '/images/menu/mains/liverfried.jpg' },
    { id: 35, category: 'mains', title: { he: 'לבבות עוף', ar: 'قلوب دجاج', en: 'Chicken Hearts' }, image: '/images/menu/mains/chickenhearts.jpg' },
    { id: 36, category: 'mains', title: { he: 'חזה עוף', ar: 'صدر دجاج', en: 'Chicken Breast' }, image: '/images/menu/mains/chickenbreast.jpg' },
    { id: 37, category: 'mains', title: { he: 'שניצל', ar: 'شنيتسل', en: 'Chicken Schnitzel' }, image: '/images/menu/mains/schnitzel.jpg' },
    { id: 38, category: 'mains', title: { he: 'סטייק פרגית', ar: 'ستيك فرجيت', en: 'Chicken Thigh Steak' }, image: '/images/menu/mains/pargitsteak.jpg' },
    { id: 39, category: 'mains', title: { he: 'סטייק אנטריקוט', ar: 'ستيك انتركوت', en: 'Ribeye Steak' }, image: '/images/menu/mains/entrecoite.jpg' },
    { id: 40, category: 'mains', title: { he: 'צלעות כבש', ar: 'ريش خروف', en: 'Lamb Chops' }, image: '/images/menu/mains/lambchops.jpg' },
    { id: 41, category: 'mains', title: { he: 'סנייה עם טחינה', ar: 'صينية بالطحينة', en: 'Siniyah with Tahini' }, image: '/images/menu/mains/siniyahtahini.jpg' },
    { id: 42, category: 'mains', title: { he: 'סנייה עם עגבניות', ar: 'صينية بالبندورة', en: 'Siniyah with Tomatoes' }, image: '/images/menu/mains/siniyahtomato.jpg' },
    { id: 43, category: 'mains', title: { he: 'המבורגר קבב', ar: 'همبرغر كباب', en: 'Kebab Burger' }, image: '/images/menu/mains/kebabburger.jpg' },

    // --- דגים ---
    { id: 44, category: 'fish', title: { he: 'דג דניס', ar: 'سمك دنقيس', en: 'Denis Fish' }, image: '/images/menu/fish/denis.jpg' },

    // --- ממולאים ---
    { id: 45, category: 'stuffed', title: { he: 'מוסקה', ar: 'مسقعة', en: 'Moussaka' }, image: '/images/menu/stuffed/moussaka.jpg' },
    { id: 46, category: 'stuffed', title: { he: 'קישואים ממולאים באורז', ar: 'كوسا محشي بالأرز', en: 'Stuffed Zucchini with Rice' }, image: '/images/menu/stuffed/zucchinirice.jpg' },
    { id: 47, category: 'stuffed', title: { he: 'פלפל ממולא באורז', ar: 'فلفل محشي بالأرز', en: 'Stuffed Peppers with Rice' }, image: '/images/menu/stuffed/peppersrice.jpg' },
    { id: 48, category: 'stuffed', title: { he: 'עלי גפן', ar: 'ورق دوالي', en: 'Stuffed Grape Leaves' }, image: '/images/menu/stuffed/grapeleaves.jpg' },
    { id: 49, category: 'stuffed', title: { he: 'פרגית ממולאת באורז', ar: 'فرجيت محشي بالأرز', en: 'Stuffed Chicken Thigh with Rice' }, image: '/images/menu/stuffed/stuffedpargit.jpg' },

    // --- מאפים וטיגונים ---
    { id: 50, category: 'pastries', title: { he: 'קובה', ar: 'كبة', en: 'Kubbeh' }, image: '/images/menu/fried/kubbeh.jpg' },
    { id: 51, category: 'pastries', title: { he: 'צ׳יפס', ar: 'بطاطا مقلية (شيبس)', en: 'French Fries' }, image: '/images/menu/fried/chips.jpg' },
    { id: 52, category: 'pastries', title: { he: 'סיגרים', ar: 'سجاير لحمة', en: 'Meat Cigars' }, image: '/images/menu/fried/cigars.jpg' },
    { id: 53, category: 'pastries', title: { he: 'פלאפל', ar: 'فلافل', en: 'Falafel' }, image: '/images/menu/fried/falafel.jpg' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pt-2 pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-[#0F0F0F]/95 backdrop-blur-md pt-3 pb-3 border-b border-[#D4AF37]/30 shadow-2xl space-y-3">
          
          {/* Main Title Header */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#D4AF37] tracking-wider uppercase drop-shadow-md">
              {lang === 'ar' ? 'قائمة الطعام' : lang === 'en' ? 'Our Menu' : 'תפריט המסעדה'}
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium px-4 line-clamp-1">
              {lang === 'ar' 
                ? 'تذوق أشهى المأكولات المحضرة بأجود المكونات الطازجة يومياً' 
                : 'מגוון מנות עשירות המוכנות מידי יום מחומרי הגלם הטריים ביותר'}
            </p>
          </div>

          {/* Fully Visible Wrap Categories Bar */}
          <div className="bg-[#1A1A1A] p-2 rounded-2xl border border-[#D4AF37]/20">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#8B0000] text-white shadow-lg border border-red-500/50 scale-105'
                      : 'bg-[#242424] text-gray-300 hover:text-[#D4AF37] hover:bg-[#2D2D2D]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 pt-2">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 transform sm:hover:-translate-y-2 shadow-xl flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-gradient-to-br from-black/60 to-black/40 shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title[lang] || item.title.he}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const placeholders = {
                      breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
                      salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
                      mains: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
                      fish: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
                      stuffed: 'https://images.unsplash.com/photo-1574653853027-23e5f6c8e81b?auto=format&fit=crop&w=800&q=80',
                      pastries: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
                    };
                    e.currentTarget.src = placeholders[item.category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
              </div>

              {/* Title Section */}
              <div className="p-3 sm:p-4 text-center flex-grow flex items-center justify-center">
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-[#D4AF37] group-hover:text-white transition-colors line-clamp-2 leading-tight sm:leading-snug">
                  {item.title[lang] || item.title.he}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}