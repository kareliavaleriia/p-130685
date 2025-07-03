import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const Examples = () => {
  const {
    t
  } = useLanguage();
  const examples = [{
    title: "AI Chat Assistant",
    description: "Интеллектуальный чат-бот с интеграцией OpenAI",
    link: "https://example1.lovable.app",
    tech: ["React", "TypeScript", "OpenAI API"]
  }, {
    title: "E-commerce Dashboard",
    description: "Панель управления для интернет-магазина",
    link: "https://example2.lovable.app",
    tech: ["React", "Charts", "Analytics"]
  }, {
    title: "Task Management App",
    description: "Приложение для управления задачами команды",
    link: "https://example3.lovable.app",
    tech: ["React", "Drag & Drop", "Real-time"]
  }];
  return;
};
export default Examples;