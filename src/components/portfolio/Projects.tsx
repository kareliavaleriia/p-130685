
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "HRtech стартап-маркетплейс вакансий JUST JOB",
      role: "intern product manager",
      period: "март – июнь 2023",
      description: "Разработка платформы вакансий: анализ пользователей, тестирование гипотез, запуск и аналитика тестов.",
      problem: "поиск актуальных направлений вакансий (сегментация пользователей)",
      solution: "1. Проведен анализ конкурентов: составлены CJM, User flow соискателей и работодателей.\n2. Проведен анализ telegram (tg-каналов) на предмет лидогенерации\n3. Через запуск тестов Casual Impact проверены гипотезы по 41 вакансии для выборки востребованных направлений\n4. Созданы UТМ-ссылки для получения сведений о деятельности посетителей (конверсия, время на сайте).",
      results: "Определены основные сегменты пользователей для дальнейшей разработки продукта",
      tags: ["User flow", "CJM", "UTM-ссылки", "Яндекс Метрика", "Анализ лидогенерации"],
      badge: "HRtech"
    },
    {
      title: "АО «Роббо»",
      role: "стажер тех.отдела",
      period: "декабрь 2023 – май 2024", 
      description: "Проект совершенствования процесса проверки продуктовых гипотез в управлении инновационными продуктами.",
      problem: "Высокий уровень затрат на разработку новых продуктов и открытие новых направлений бизнеса.",
      goal: "Оптимизация проверки продуктовых гипотез для снижения затрат и повышения конкурентоспособности",
      solution: "Разработана проектная документация: устав проекта, календарный и бюджетный планы, схемы текущего (AS IS) и ожидаемого (ТО ВЕ) процессов в нотации BPMN, проведена оценка рисков проекта. Внедрены фреймворки для оптимизации процесса",
      results: "1. Снижение стоимости проверки гипотез на 15% от бюджета проекта\n2. Увеличение скорости проверки гипотез на 10%\n3. Снижение кол-ва перепроверок гипотез на 10%, с последующим повышением конкурентоспособности.",
      tags: ["ТЗ проекта", "Диаграмма Ганта", "AS IS/TO BE процессы", "Реестр рисков", "Календарный план", "BPMN-нотация", "Бюджетный план"],
      badge: "Edtech",
      presentation: "/lovable-uploads/presentation-robbo.pdf"
    },
    {
      title: "АНО «Школа 21»",
      role: "intern product manager",
      period: "февраль 2025 – апрель 2025",
      description: "Разработка концепции B2B-обучения и автоматизация составления программы обучения для Заказчика.",
      problem: "Разработать концепцию B2B-обучения (формирование идеи и прототипирование продукта) с долгосрочными перспективами и оптимизировать работу специалистов Go-to-Market, методологов и продуктовой команды",
      solution: "Выявлена актуальность существующих продуктов и сформированы гипотезы для новых продуктов с помощью кабинетного исследования трендов и курсов по ИИ, проведена разработка прототипов для автоматизации внутренних процессов",
      results: "1. Разработана концепция продукта «B2B-обучение по работе с ИИ-ассистентами».\n2. Разработан прототип-конструктор автоматической разработки Заказчику образовательной программы для оптимизации работы Go-to-Market, методологов и продуктовой команды и возможность масштабирования.",
      tags: ["Анализ рынка", "Концепция продукта", "App Script", "Google Colab", "ИИ-инструменты", "Python", "Figma"],
      badge: "Edtech",
      presentation: "/lovable-uploads/presentation-school21.pdf"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Check if we're in the projects section
      if (sectionTop <= 0 && sectionTop > -sectionHeight + windowHeight) {
        // Calculate which card should be visible based on scroll position
        const scrollProgress = Math.abs(sectionTop) / Math.max(1, sectionHeight - windowHeight);
        const cardIndex = Math.min(Math.floor(scrollProgress * projects.length), projects.length - 1);
        setCurrentCard(cardIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 min-h-screen"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Карьера
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto" style={{ height: "32rem" }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index <= currentCard ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ 
                zIndex: projects.length - index,
                transform: `translateY(${Math.max(0, (index - currentCard) * 15)}px) scale(${Math.max(0.92, 1 - Math.max(0, (index - currentCard) * 0.04))})`,
              }}
            >
              <div className="bg-gradient-to-br from-orange-600 via-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl text-white hover:transform hover:scale-[1.02] transition-all duration-300 h-full w-full">
                <div className="relative h-full flex flex-col">
                  {/* Badge */}
                  <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {project.badge}
                  </div>
                  
                  <div className="mb-4 sm:mb-6 pr-16 sm:pr-20">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-orange-200 font-medium mb-2 text-base sm:text-lg">
                      {project.role}
                    </p>
                    <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                      {project.period}
                    </p>
                  </div>
                  
                  <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition-all duration-300 font-medium mt-auto text-sm sm:text-base"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject !== null ? projects[selectedProject].title : ""}
        className="max-w-4xl"
      >
        {selectedProject !== null && (
          <div className="space-y-6">
            {/* Problem/Goals section */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {selectedProject === 0 ? "Проблема:" : selectedProject === 1 ? "Проблема:" : "Цели:"}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {projects[selectedProject].problem}
              </p>
            </div>

            {/* Goal section for project 1 (Robbo) */}
            {selectedProject === 1 && projects[selectedProject].goal && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Цель:</h4>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {projects[selectedProject].goal}
                </p>
              </div>
            )}
            
            {/* Solution section */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Решение:</h4>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {projects[selectedProject].solution}
              </p>
            </div>
            
            {/* Results section */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Результаты:</h4>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {projects[selectedProject].results}
              </p>
            </div>
            
            {/* PDF Preview for projects with presentations */}
            {projects[selectedProject].presentation && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Презентация:</h4>
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe
                    src={projects[selectedProject].presentation}
                    className="w-full h-full"
                    title="Презентация проекта"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
