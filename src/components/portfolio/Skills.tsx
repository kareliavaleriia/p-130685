
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skills = {
    hard: [
      "Product Strategy", "User Research", "Data Analysis", "A/B Testing",
      "Roadmapping", "Metrics & KPIs", "Customer Development", "Market Research"
    ],
    soft: [
      "Leadership", "Communication", "Problem Solving", "Empathy",
      "Critical Thinking", "Team Collaboration", "Adaptability", "Creativity"
    ],
    tools: [
      "Figma", "Jira", "Confluence", "Notion", "Google Analytics",
      "Amplitude", "Miro", "Slack", "Tableau", "SQL", "Python", "Git"
    ]
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('hardSkills')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.hard.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-pulse-100 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('softSkills')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('tools')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
