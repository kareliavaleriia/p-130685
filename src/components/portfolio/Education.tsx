
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Education = () => {
  const { t } = useLanguage();
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const education = [
    {
      institution: "НИУ ИТМО",
      degree: "Магистратура • Цифровые продукты: создание и управление",
      period: "2024-2026",
      description: "",
      tags: ["Оценка рынка", "Пользовательские исследования", "Agile-подход", "Стратегический менеджмент", "Цифровые бизнес-модели", "Figma", "Яндекс Метрика", "Составление презентаций", "Тестирование гипотез"],
      document: "/lovable-uploads/diploma-itmo.pdf"
    },
    {
      institution: "СПбПУ Петра Великого",
      degree: "Бакалавриат • Инноватика",
      period: "2020-2024", 
      description: "Диплом с отличием",
      tags: ["Управление инновационной деятельностью", "Системный анализ", "Менеджмент качества", "Управление продуктом", "Управление проектами", "Управление ресурсами", "Miro", "Figma", "Power BI", "C#"],
      document: "/lovable-uploads/diploma-spbpu.pdf"
    }
  ];

  const courses = [
    {
      name: "Управление проектами и продуктами при разработке цифровых сервисов",
      provider: "Формула-IT Цифровые кафедры • СПбПУ",
      year: "2024",
      tags: ["Анализ конкурентов", "SWOT-анализ", "PEST-анализ", "Анализ ЦА", "Образ продукта"],
      document: "/lovable-uploads/cert-otus.pdf"
    },
    {
      name: "Технологии анализа данных",
      provider: "Bonus Track • ИТМО",
      year: "2023",
      tags: ["Анализ данных", "SQL-запросы"],
      document: "/lovable-uploads/cert-netology.pdf"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6">
            Образование
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Высшее образование</h3>
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 animate-on-scroll hover-lift">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {edu.institution}
                </h4>
                <p className="text-pulse-600 dark:text-pulse-400 font-medium mb-2">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.period}
                </p>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                )}
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {edu.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 text-xs sm:text-sm rounded-full border border-pulse-200 dark:border-pulse-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedDocument(edu.document)}
                  className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium"
                >
                  Посмотреть диплом
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Дополнительное образование</h3>
            {courses.map((course, index) => (
              <div key={index} className="glass-card p-6 animate-on-scroll hover-lift">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {course.name}
                </h4>
                <p className="text-pulse-600 dark:text-pulse-400 font-medium mb-2">
                  {course.provider}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {course.year}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {course.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 text-xs sm:text-sm rounded-full border border-pulse-200 dark:border-pulse-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedDocument(course.document)}
                  className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium"
                >
                  Посмотреть сертификат
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal 
        isOpen={selectedDocument !== null} 
        onClose={() => setSelectedDocument(null)}
        title="Документ"
        className="max-w-4xl"
      >
        {selectedDocument && (
          <div className="w-full h-96">
            <iframe
              src={selectedDocument}
              className="w-full h-full border rounded-lg"
              title="Документ об образовании"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Education;
