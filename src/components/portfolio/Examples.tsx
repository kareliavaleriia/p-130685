
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Examples = () => {
  const { t } = useLanguage();

  const examples = [
    {
      title: "E-commerce Dashboard",
      description: "Аналитическая панель для интернет-магазина",
      tech: "React, TypeScript, Charts",
      url: "#"
    },
    {
      title: "Learning Platform",
      description: "Образовательная платформа с ИИ",
      tech: "Next.js, AI Integration",
      url: "#"
    },
    {
      title: "Task Manager",
      description: "Система управления задачами команды",
      tech: "Vue.js, Firebase",
      url: "#"
    }
  ];

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('examplesTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="glass-card p-6 hover-lift animate-on-scroll group">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {example.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {example.description}
              </p>
              <p className="text-sm text-pulse-600 dark:text-pulse-400 mb-6">
                {example.tech}
              </p>
              <a 
                href={example.url}
                className="inline-flex items-center text-pulse-600 hover:text-pulse-700 dark:text-pulse-400 dark:hover:text-pulse-300 font-medium group"
              >
                {t('viewExample')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
