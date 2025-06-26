
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Education = () => {
  const { t } = useLanguage();
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);

  const education = [
    {
      title: "СПбПУ Петра Великого",
      degree: "Магистр техники и технологии",
      period: "2021-2023",
      description: "Диплом с отличием, стипендия за академические успехи",
      details: "Специализация: Инновационные технологии в машиностроении"
    },
    {
      title: "ИТМО",
      degree: "Переподготовка по Product Management",
      period: "2022",
      description: "Углубленное изучение продуктового менеджмента",
      details: "Курс включал: User Research, Analytics, Product Strategy"
    },
    {
      title: "Онлайн-курсы",
      degree: "Специализированное обучение",
      period: "2020-2024",
      description: "Coursera, Skillbox, ProductStar",
      details: "Data Analysis, UX/UI Design, Agile/Scrum"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('educationTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="glass-card p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between hover-lift animate-on-scroll">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-pulse-600 dark:text-pulse-400 font-medium mb-1">
                  {item.degree}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedEducation(index)}
                className="mt-4 lg:mt-0 lg:ml-6 py-2 px-4 bg-pulse-600 hover:bg-pulse-700 text-white rounded-lg transition-colors"
              >
                {t('viewDocument')}
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedEducation !== null} 
        onClose={() => setSelectedEducation(null)}
        title={selectedEducation !== null ? education[selectedEducation].title : ""}
      >
        {selectedEducation !== null && (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              {education[selectedEducation].details}
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-500 dark:text-gray-400">
                Документ будет отображен здесь
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Education;
