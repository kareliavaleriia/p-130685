
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const hardSkills = [
    "Product Management", "User Research", "Analytics", "A/B Testing",
    "Figma", "Jira", "Notion", "Python", "SQL", "Google Analytics"
  ];

  const softSkills = [
    "Лидерство", "Коммуникация", "Аналитическое мышление", "Эмпатия",
    "Решение проблем", "Адаптивность", "Критическое мышление", "Креативность"
  ];

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "Jira", category: "Management" },
    { name: "Notion", category: "Documentation" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Miro", category: "Collaboration" },
    { name: "Slack", category: "Communication" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-left section-title text-gray-900 dark:text-white mb-6">
            Навыки и инструменты
          </h2>
          <div className="w-20 h-1 bg-pulse-500"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="glass-card p-6 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, index) => (
                <span key={index} className="px-3 py-2 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="px-3 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Инструменты</h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{tool.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
