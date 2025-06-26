
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('aboutTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto mb-8"></div>
        </div>
        
        <div className="glass-card p-8 lg:p-12 animate-on-scroll">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            {t('aboutText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
