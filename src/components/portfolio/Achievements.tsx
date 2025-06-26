
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Achievements = () => {
  const { t } = useLanguage();
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const achievements = [
    {
      category: "Учебные",
      items: [
        {
          title: "Диплом с отличием СПбПУ",
          date: "2023",
          description: "Магистерская диссертация по инновационным технологиям"
        },
        {
          title: "Всероссийская олимпиада (призер)",
          date: "2021",
          description: "Поступление в магистратуру без экзаменов"
        }
      ]
    },
    {
      category: "Профессиональные", 
      items: [
        {
          title: "Product Manager Certification",
          date: "2022",
          description: "Сертификат по продуктовому менеджменту"
        },
        {
          title: "Agile/Scrum Master",
          date: "2022",
          description: "Сертификация по гибким методологиям"
        }
      ]
    },
    {
      category: "Творческие",
      items: [
        {
          title: "Инженерные соревнования (2 место)",
          date: "2020",
          description: "Командная победа на первом курсе"
        },
        {
          title: "Хакатон по ИИ (финалист)",
          date: "2022",
          description: "Разработка EdTech решения"
        }
      ]
    }
  ];

  const flatAchievements = achievements.flatMap((category, categoryIndex) => 
    category.items.map((item, itemIndex) => ({
      ...item,
      category: category.category,
      index: categoryIndex * 100 + itemIndex
    }))
  );

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('achievementsTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="glass-card p-6 hover-lift">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm text-pulse-600 dark:text-pulse-400 font-medium">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setSelectedAchievement(categoryIndex * 100 + itemIndex)}
                      className="text-pulse-600 hover:text-pulse-700 dark:text-pulse-400 dark:hover:text-pulse-300 font-medium"
                    >
                      {t('viewCertificate')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedAchievement !== null} 
        onClose={() => setSelectedAchievement(null)}
        title={selectedAchievement !== null ? flatAchievements.find(a => a.index === selectedAchievement)?.title : ""}
      >
        {selectedAchievement !== null && (
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <p className="text-gray-500 dark:text-gray-400">
                Сертификат/диплом будет отображен здесь
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Achievements;
