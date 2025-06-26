
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: 'email',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Свяжитесь со мной
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pulse-600 dark:text-pulse-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    your.email@example.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pulse-600 dark:text-pulse-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +7 (999) 123-45-67
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="button-primary text-center"
                >
                  {t('downloadCV')}
                </a>
                
                <a 
                  href="https://t.me/your_channel" 
                  className="button-secondary text-center"
                >
                  Telegram Channel
                </a>
              </div>
              
              {/* QR Code */}
              <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">QR Code</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Telegram Channel
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contactForm')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="channel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactChannel')}
                  </label>
                  <select
                    id="channel"
                    name="channel"
                    value={formData.channel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="email">Email</option>
                    <option value="telegram">Telegram</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full button-primary"
                >
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
