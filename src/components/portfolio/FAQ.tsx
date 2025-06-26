
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Какими проектами ты гордишься больше всего и почему?",
      answer: "Командная победа — инженерные соревнования, где мы с подругами заняли на первом курсе второе место, а потом нас позвали на летнюю практику в Газпром нефть. Личная победа — призерство во всероссийской олимпиаде, по которой я поступила в магистратуру без экзаменов. Профессионально — стажировка в Школе 21, где я сильно прокачалась в теме ИИ, собрала свои реально работающие прототипы и первую концепцию Edtech-продукта."
    },
    {
      question: "Какой твой подход к работе с командой?",
      answer: "Хоть вопрос про команду, я скажу, что стремлюсь быть сильной и когда работаю одна (беру на себя ответственность, самостоятельна, пробую себя в роли лидера), и когда работаю в команде (умею делегировать задачи, выстраиваю коммуникацию, работаю на общий, а не только личный результат, поддерживаю коллег и сама прошу помощи, если необходимо). По Белбину я доводчик, координатор и мотиватор. Ещё коллеги говорят, я — социальный клей))"
    },
    {
      question: "Как ты относишься к обучению и развитию новых навыков?",
      answer: "Учиться мы будем всегда, это я уже уяснила. Отношусь положительно: надо идти в ногу со временем и постоянно искать что-то новое и интересное для себя."
    },
    {
      question: "В каких сферах IT у тебя наибольшая экспертиза?",
      answer: "По большей части погрузилась в Edtech, но активно развиваю насмотренность в E-com, HRtech, Fintech и Medtech. Пока ещё в поиске \"любимого\", а может, уже нашла своих фаворитов — могу проявить гибкость и карьерно развиваться в разных сферах."
    },
    {
      question: "Что тебя вдохновляет на работу и развитие?",
      answer: "Я начала вести тг-канал с целью замотивировать себя погрузиться в продакт-менеджмент, ведь чтобы что-то написать — надо что-то знать. Моя ставка сработала, и теперь я просто живу, и всё вокруг меня: люди, вещи, события — заставляют шестерёнки крутиться и вдохновляют на работу."
    },
    {
      question: "Какой опыт вне работы помогает тебе быть лучшим продактом?",
      answer: "Читать каналы, статьи, книжки других продактов (и не только продактов); делать свои проекты, применяя рабочие навыки, и поддержка высокого эмоционального интеллекта и глубокой эмпатии к людям."
    },
    {
      question: "Какой твой любимый инструмент для управления продуктом и почему?",
      answer: "Голова на плечах :) Как говорил один мудрый человек, фреймворки теребить и DeepSeek сможет."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('faqTitle')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="glass-card animate-on-scroll">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <span className={cn(
                    "text-pulse-600 dark:text-pulse-400 transition-transform duration-200",
                    openIndex === index ? "rotate-180" : ""
                  )}>
                    ▼
                  </span>
                </div>
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
