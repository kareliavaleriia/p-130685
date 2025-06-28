
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    channel: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6">
            Контакты
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Как связаться со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📧</span>
                  <span className="text-gray-600 dark:text-gray-300">karelina.valeriia@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📱</span>
                  <span className="text-gray-600 dark:text-gray-300">+7 (981) 821-22-12</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">💼</span>
                  <a href="https://www.linkedin.com/in/valeriiakarelina/" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">LinkedIn</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📱</span>
                  <a href="https://t.me/karelinavaleria" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">Telegram</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📢</span>
                  <a href="https://t.me/pmkarelina" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">Telegram-канал</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">QR-код Telegram-канала</h4>
                <div className="w-32 h-32 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/7e25ad47-0e77-4a52-bec0-d758c5aecd1c.png" 
                    alt="QR-код Telegram-канала" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <a href="/lovable-uploads/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-primary">
                Скачать резюме
              </a>
            </div>
          </div>

          <div className="animate-on-scroll">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
