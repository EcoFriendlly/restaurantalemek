
import { useLanguage } from '../context/LanguageContext';

export default function FoodCard({ item }) {
  const { lang } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name[lang] || item.name.he}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/logo.png'; // Fallback אם התמונה טרם נטענה
          }}
        />
      </div>
      <div className="p-4 text-center flex-grow flex items-center justify-center">
        <h3 className="text-lg font-bold text-gray-800">
          {item.name[lang] || item.name.he}
        </h3>
      </div>
    </div>
  );
}