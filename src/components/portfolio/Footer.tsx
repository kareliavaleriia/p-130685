
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Product Manager</h3>
            <p className="text-gray-300">
              {language === 'ru' 
                ? "Создаю продукты, которые решают реальные задачи пользователей"
                : "Building products that solve real user problems"
              }
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'ru' ? 'Быстрые ссылки' : 'Quick Links'}
            </h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                {language === 'ru' ? 'Обо мне' : 'About'}
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                {language === 'ru' ? 'Проекты' : 'Projects'}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                {language === 'ru' ? 'Контакты' : 'Contact'}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'ru' ? 'Контакты' : 'Contact'}
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>your.email@example.com</p>
              <p>+7 (999) 123-45-67</p>
              <a href="https://t.me/your_channel" className="hover:text-white transition-colors">
                Telegram Channel
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Product Manager Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
