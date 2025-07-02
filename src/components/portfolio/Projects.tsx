import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Инструмент управления офисной средой",
      role: "Проект для ПАО «Газпром нефть», II место на питч-сессии",
      description: "Инновационное решение для оптимизации офисной среды и повышения комфорта сотрудников.",
      presentation: "/Проект СО2.pdf"
    },
    {
      title: "Углеродная компенсация. Декарбонизация",
      role: "Проект для ПАО «Газпром нефть», II место на питч-сессии",
      description: "Экологический проект по снижению углеродного следа и внедрению принципов устойчивого развития.",
      presentation: "/Проект СО2.pdf"
    },
    {
      title: "Гипотезы по приложениям",
      role: "Мои разборы приложений и гипотезы по улучшению",
      description: "Анализ пользовательского опыта популярных приложений и разработка гипотез для их улучшения.",
      links: [
        {
          name: "Михайловский театр",
          url: "https://theater-app-insights.lovable.app/"
        },
        {
          name: "РивГош",
          url: "https://rivgosh-hypothesis-showcase.lovable.app/"
        }
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Проекты
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-orange-600 via-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl text-white hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-orange-200 font-medium mb-2 text-base sm:text-lg">
                    {project.role}
                  </p>
                </div>
                
                <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                <button
                  onClick={() => setSelectedProject(index)}
                  className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Посмотреть проект
                </button>
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
            {/* PDF Preview for projects with presentations */}
            {projects[selectedProject].presentation && (
              <div>
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe
                    src={projects[selectedProject].presentation}
                    className="w-full h-full"
                    title="Презентация проекта"
                  />
                </div>
              </div>
            )}
            
            {/* Links for projects with links */}
            {projects[selectedProject].links && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Ссылки на проекты:</h4>
                <div className="space-y-3">
                  {projects[selectedProject].links!.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pulse-600 dark:text-pulse-400 hover:text-pulse-700 dark:hover:text-pulse-300 font-medium text-lg underline"
                      >
                        {link.name}
                      </a>
                    </div>
                  ))}
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