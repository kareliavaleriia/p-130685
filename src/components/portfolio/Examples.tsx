
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Examples = () => {
  const { t } = useLanguage();

  const examples = [
    {
      title: "AI Chat Assistant",
      description: "Интеллектуальный чат-бот с интеграцией OpenAI",
      link: "https://example1.lovable.app",
      tech: ["React", "TypeScript", "OpenAI API"]
    },
    {
      title: "E-commerce Dashboard",
      description: "Панель управления для интернет-магазина",
      link: "https://example2.lovable.app", 
      tech: ["React", "Charts", "Analytics"]
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами команды",
      link: "https://example3.lovable.app",
      tech: ["React", "Drag & Drop", "Real-time"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6">
            Проекты
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="glass-card p-6 animate-on-scroll hover-lift">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {example.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {example.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {example.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium"
              >
                Посмотреть проект →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
