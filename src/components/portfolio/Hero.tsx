
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const image = imageRef.current;
    if (image) {
      image.addEventListener("mousemove", handleMouseMove);
      image.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (image) {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-50/50 to-orange-50/30 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative brush stroke line */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-40 sm:h-56 lg:h-72"
          viewBox="0 0 1200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brushGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ff4500" stopOpacity="1" />
              <stop offset="75%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
            </linearGradient>
            <filter id="roughPaper">
              <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" seed="1"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
            </filter>
          </defs>
          <path
            d="M0 150 Q200 120 400 140 T800 130 Q1000 125 1200 135"
            stroke="url(#brushGradient)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roughPaper)"
            opacity="0.7"
          />
          <path
            d="M0 155 Q180 115 380 145 T780 135 Q980 130 1200 140"
            stroke="url(#brushGradient)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roughPaper)"
            opacity="0.5"
          />
          <path
            d="M0 145 Q220 125 420 135 T820 125 Q1020 120 1200 130"
            stroke="url(#brushGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roughPaper)"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight opacity-0 animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                Карелина Валерия
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in leading-relaxed" style={{
                animationDelay: "0.5s"
              }}>
                Вижу проблемы - придумываю решения - создаю продукты, которые действительно нужны
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl opacity-0 animate-fade-in" style={{
                animationDelay: "0.7s"
              }}>
                В поиске баланса между интересами бизнеса и реальными потребностями людей через творческий взгляд, техническое мышление и внимание к деталям
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
              animationDelay: "0.9s"
            }}>
              <a 
                href="/lovable-uploads/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-primary inline-flex items-center justify-center group"
              >
                Посмотреть резюме
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#about" className="button-secondary inline-flex items-center justify-center">
                {t('about')}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-fade-in" style={{
              animationDelay: "1.1s"
            }}>
              {/* Orange gradient background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-30 transform rotate-6 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-xl opacity-40 transform -rotate-3 scale-105"></div>
              
              <img 
                ref={imageRef} 
                src="/lovable-uploads/40c8633b-600f-4b78-97b2-c2fe189cfc58.png" 
                alt="Карелина Валерия" 
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl transition-transform duration-500 ease-out" 
                style={{
                  transformStyle: 'preserve-3d'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
