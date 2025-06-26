
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Achievements = () => {
  const { t } = useLanguage();
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const achievements = {
    academic: [
      {
        title: "Призер Всероссийской олимпиады",
        date: "2023",
        description: "Поступление в магистратуру без экзаменов",
        document: "/lovable-uploads/olympiad-cert.pdf"
      },
      {
        title: "Диплом с отличием ИТМО",
        date: "2025",
        description: "Магистратура по инновационному предпринимательству",
        document: "/lovable-uploads/diploma-itmo.pdf"
      }
    ],
    professional: [
      {
        title: "Стипендия Правительства РФ",
        date: "2021-2023",
        description: "За высокие академические достижения",
        document: "/lovable-uploads/scholarship-cert.pdf"
      },
      {
        title: "Победитель хакатона",
        date: "2024",
        description: "Разработка MVP продукта за 48 часов",
        document: "/lovable-uploads/hackathon-cert.pdf"
      }
    ],
    creative: [
      {
        title: "Второе место в инженерных соревнованиях",
        date: "2020",
        description: "Командная работа, приведшая к практике в Газпром нефть",
        document: "/lovable-uploads/competition-cert.pdf"
      }
    ]
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6">
            Достижения
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="space-y-12">
          {Object.entries(achievements).map(([category, items], categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                {category === 'academic' ? 'Учебные' : 
                 category === 'professional' ? 'Профессиональные' : 'Творческие'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((achievement, index) => (
                  <div key={index} className="glass-card p-6 hover-lift">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {achievement.description}
                    </p>
                    <button
                      onClick={() => setSelectedDocument(achievement.document)}
                      className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium"
                    >
                      Посмотреть диплом/сертификат
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedDocument !== null} 
        onClose={() => setSelectedDocument(null)}
        title="Достижение"
        className="max-w-4xl"
      >
        {selectedDocument && (
          <div className="w-full h-96">
            <iframe
              src={selectedDocument}
              className="w-full h-full border rounded-lg"
              title="Сертификат достижения"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Achievements;
