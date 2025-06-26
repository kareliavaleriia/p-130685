
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "HRtech Стартап",
      role: "Product Manager",
      period: "2023-2024",
      description: "Разработка платформы для автоматизации HR-процессов",
      problem: "Компании тратили много времени на ручное управление кандидатами",
      solution: "Создали платформу с ИИ для скрининга резюме и автоматизации интервью",
      results: "Сократили время найма на 40%, увеличили конверсию в 2 раза",
      tags: ["Product Strategy", "User Research", "Analytics"]
    },
    {
      title: "АО \"Роббо\"",
      role: "Product Manager",
      period: "2022-2023", 
      description: "Образовательная робототехника для детей",
      problem: "Сложность внедрения робототехники в школьную программу",
      solution: "Разработали методические материалы и упростили интерфейс",
      results: "Внедрили в 150+ школ, NPS выросла до 75",
      tags: ["EdTech", "UX/UI", "Roadmap"]
    },
    {
      title: "Школа 21",
      role: "Product Manager Intern",
      period: "2022",
      description: "ИИ-решения для образования",
      problem: "Недостаток персонализации в обучении",
      solution: "Прототип адаптивной системы обучения с ИИ",
      results: "MVP с 80% точностью рекомендаций",
      tags: ["AI/ML", "MVP", "Testing"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('projectsTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="feature-card glass-card hover-lift animate-on-scroll">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-pulse-600 dark:text-pulse-400 font-medium mb-1">
                  {project.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.period}
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedProject(index)}
                className="w-full py-2 px-4 bg-pulse-600 hover:bg-pulse-700 text-white rounded-lg transition-colors"
              >
                {t('viewPresentation')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject !== null ? projects[selectedProject].title : ""}
      >
        {selectedProject !== null && (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Проблема:</h4>
              <p className="text-gray-600 dark:text-gray-300">{projects[selectedProject].problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Решение:</h4>
              <p className="text-gray-600 dark:text-gray-300">{projects[selectedProject].solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Результаты:</h4>
              <p className="text-gray-600 dark:text-gray-300">{projects[selectedProject].results}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
