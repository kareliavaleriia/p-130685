
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Анна Петрова",
      position: "CTO, HRtech Startup",
      text: "Отличный продакт-менеджер с глубоким пониманием пользователей. Умеет находить баланс между техническими возможностями и бизнес-потребностями.",
      rating: 5
    },
    {
      name: "Михаил Сидоров", 
      position: "Lead Developer, Роббо",
      text: "Работать с ней — одно удовольствие. Четко ставит задачи, всегда на связи, и главное — понимает техническую сторону вопроса.",
      rating: 5
    },
    {
      name: "Елена Кузнецова",
      position: "Design Lead, Школа 21", 
      text: "Прекрасные навыки коммуникации и способность объединять команду вокруг общей цели. Настоящий лидер.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            {t('testimonials')}
          </h2>
          <div className="w-20 h-1 bg-pulse-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 animate-on-scroll hover-lift">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-pulse-600 dark:text-pulse-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
