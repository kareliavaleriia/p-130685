
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Achievements = () => {
  const { t } = useLanguage();
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const achievements = {
    academic: [
      {
        title: "Призер Всероссийской олимпиады \"Я-профессионал\"",
        date: "2023",
        description: "Направление \"Инноватика\"",
        document: "https://kareliavaleriia.github.io/p-130685/public/Призер_Инноватика.jpg",
        type: "image"
      },
      {
        title: "Лучший доклад на конференции",
        date: "2023",
        description: "III Всероссийская учебно-научная конференция I&Q Project «Управление инновациями в условиях цифровой трансформации», выступление на пленарном заседании",
        document: "https://kareliavaleriia.github.io/p-130685/public/конференция%20I&Q%20Project%20«Управление%20инновациями%20в%20условиях%20цифровой%20трансформации».jpg",
        type: "image"
      },
      {
        title: "Финалист Мегаолимпиады ИТМО",
        date: "2024",
        description: "Направление \"Технологическое предпринимательство\"",
        type: "none"
      },
      {
        title: "Нагрудный знак \"Отличник учебы\"",
        date: "2021-2024",
        description: "Награда за отличное обучение I, II и III степени",
        images: [
          "https://kareliavaleriia.github.io/p-130685/public/Знак_1_степени.jpg",
          "https://kareliavaleriia.github.io/p-130685/public/Знак_2_степени.jpg",
          "https://kareliavaleriia.github.io/p-130685/public/Знак_3_степени.jpg"
        ],
        type: "carousel"
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

  const handleDocumentClick = (document: string, type: string) => {
    if (type === "image") {
      setSelectedDocument(document);
    }
  };

  const handleImagesClick = (images: string[]) => {
    setSelectedImages(images);
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
                  <div key={index} className="glass-card p-6 hover-lift bg-white/80 dark:bg-gray-800/80">
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
                    {achievement.type !== "none" && (
                      <button
                        onClick={() => {
                          if (achievement.type === "carousel" && achievement.images) {
                            handleImagesClick(achievement.images);
                          } else if (achievement.document) {
                            handleDocumentClick(achievement.document, achievement.type || "pdf");
                          }
                        }}
                        className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium"
                      >
                        Посмотреть диплом/сертификат
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for single image */}
      <Modal 
        isOpen={selectedDocument !== null} 
        onClose={() => setSelectedDocument(null)}
        title="Достижение"
        className="max-w-4xl"
      >
        {selectedDocument && (
          <div className="w-full">
            <img
              src={selectedDocument}
              alt="Сертификат достижения"
              className="w-full h-auto max-h-96 object-contain rounded-lg"
            />
          </div>
        )}
      </Modal>

      {/* Modal for carousel of images */}
      <Modal 
        isOpen={selectedImages !== null} 
        onClose={() => setSelectedImages(null)}
        title="Нагрудные знаки"
        className="max-w-4xl"
      >
        {selectedImages && (
          <div className="w-full">
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {selectedImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Знак ${index + 1} степени`}
                        className="w-full h-auto max-h-96 object-contain rounded-lg mx-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Achievements;
