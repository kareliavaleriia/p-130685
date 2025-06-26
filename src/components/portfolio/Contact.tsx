
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📧</span>
                  <span className="text-gray-600 dark:text-gray-300">valeria.karelina@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📱</span>
                  <span className="text-gray-600 dark:text-gray-300">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">💼</span>
                  <a href="https://linkedin.com/in/valeria-karelina" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">LinkedIn</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📱</span>
                  <a href="https://t.me/valeria_karelina" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">Telegram</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-pulse-100 dark:bg-pulse-900/30 rounded-full flex items-center justify-center">📢</span>
                  <a href="https://t.me/product_channel" className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700">Telegram-канал</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">QR-код Telegram-канала</h4>
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">QR-код</span>
                </div>
              </div>
              <a 
                href="/lovable-uploads/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Скачать резюме
              </a>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Форма обратной связи</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="channel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Предпочтительный канал связи
                </label>
                <select
                  id="channel"
                  name="channel"
                  value={formData.channel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="email">Email</option>
                  <option value="telegram">Telegram</option>
                  <option value="phone">Телефон</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full button-primary"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
