
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    about: "Обо мне",
    projects: "Проекты",
    education: "Образование",
    examples: "Примеры работ",
    achievements: "Достижения",
    skills: "Навыки",
    testimonials: "Отзывы",
    faq: "FAQ",
    contact: "Контакты",
    
    // Hero
    heroTitle: "Product Manager",
    heroSubtitle: "Создаю продукты, которые решают реальные задачи пользователей",
    heroDescription: "Опытный продакт-менеджер с фокусом на EdTech, HRtech и инновационные IT-решения. Умею находить баланс между пользовательскими потребностями и бизнес-целями.",
    downloadCV: "Скачать резюме",
    
    // About
    aboutTitle: "Обо мне",
    aboutText: "Привет! Я продакт-менеджер, который верит в силу хороших продуктов и крутых команд. Работала в стартапах и корпорациях, от HRtech до EdTech. Люблю копаться в данных, разговаривать с пользователями и превращать хаос в понятные roadmap'ы. В свободное время веду тг-канал про продакт-менеджмент и читаю всё подряд про индустрию.",
    
    // Projects
    projectsTitle: "Мои проекты",
    viewPresentation: "Посмотреть презентацию",
    
    // Education
    educationTitle: "Образование",
    viewDocument: "Посмотреть документ",
    
    // Examples
    examplesTitle: "Примеры работ",
    viewExample: "Посмотреть",
    
    // Achievements
    achievementsTitle: "Достижения",
    viewCertificate: "Посмотреть сертификат",
    
    // Skills
    skillsTitle: "Навыки и инструменты",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    tools: "Инструменты",
    
    // FAQ
    faqTitle: "FAQ",
    
    // Contact
    contactTitle: "Контакты",
    contactForm: "Форма обратной связи",
    contactChannel: "Выберите канал связи",
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    send: "Отправить",
    
    // Common
    close: "Закрыть"
  },
  en: {
    // Navigation
    about: "About",
    projects: "Projects",
    education: "Education",
    examples: "Examples",
    achievements: "Achievements", 
    skills: "Skills",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    
    // Hero
    heroTitle: "Product Manager",
    heroSubtitle: "Building products that solve real user problems",
    heroDescription: "Experienced product manager focused on EdTech, HRtech and innovative IT solutions. I find the balance between user needs and business goals.",
    downloadCV: "Download CV",
    
    // About
    aboutTitle: "About Me",
    aboutText: "Hi! I'm a product manager who believes in the power of great products and amazing teams. I've worked in startups and corporations, from HRtech to EdTech. I love diving into data, talking to users, and turning chaos into clear roadmaps. In my free time, I run a Telegram channel about product management and read everything about the industry.",
    
    // Projects
    projectsTitle: "My Projects",
    viewPresentation: "View Presentation",
    
    // Education
    educationTitle: "Education",
    viewDocument: "View Document",
    
    // Examples
    examplesTitle: "Work Examples",
    viewExample: "View",
    
    // Achievements
    achievementsTitle: "Achievements",
    viewCertificate: "View Certificate",
    
    // Skills
    skillsTitle: "Skills & Tools",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills", 
    tools: "Tools",
    
    // FAQ
    faqTitle: "FAQ",
    
    // Contact
    contactTitle: "Contact",
    contactForm: "Contact Form",
    contactChannel: "Choose communication channel",
    name: "Name",
    email: "Email", 
    message: "Message",
    send: "Send",
    
    // Common
    close: "Close"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
