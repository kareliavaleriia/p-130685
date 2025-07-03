
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Modal from "@/components/ui/modal";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
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
      {/* Enhanced decorative brush stroke line */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-80 sm:h-96 lg:h-[32rem]"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.9" />
              <stop offset="15%" stopColor="#ff7f00" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#ff6347" stopOpacity="1" />
              <stop offset="45%" stopColor="#ff4500" stopOpacity="1" />
              <stop offset="60%" stopColor="#ff6347" stopOpacity="1" />
              <stop offset="75%" stopColor="#ff7f00" stopOpacity="0.95" />
              <stop offset="90%" stopColor="#ff8c00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffa500" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="brushGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb347" stopOpacity="0.7" />
              <stop offset="25%" stopColor="#ff9500" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff6b35" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#ff9500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffb347" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="brushGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.5" />
              <stop offset="30%" stopColor="#ffb347" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ff8c42" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#ffb347" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0.5" />
            </linearGradient>
            <filter id="roughPaper">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
            </filter>
            <filter id="watercolor" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="15"/>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feColorMatrix type="saturate" values="1.5"/>
            </filter>
          </defs>
          
          {/* Main curved stroke - wider and more pronounced */}
          <path
            d="M0 200 Q150 120 300 160 Q450 200 600 180 Q750 160 900 170 Q1050 180 1200 160"
            stroke="url(#brushGradient)"
            strokeWidth="105"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#watercolor)"
            opacity="0.8"
          />
          
          {/* Secondary stroke for depth */}
          <path
            d="M0 205 Q140 115 290 165 Q440 205 590 185 Q740 165 890 175 Q1040 185 1200 165"
            stroke="url(#brushGradient2)"
            strokeWidth="75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#watercolor)"
            opacity="0.6"
          />
          
          {/* Highlight stroke */}
          <path
            d="M0 195 Q160 125 310 155 Q460 195 610 175 Q760 155 910 165 Q1060 175 1200 155"
            stroke="url(#brushGradient3)"
            strokeWidth="45"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#watercolor)"
            opacity="0.4"
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
              
              <div className="space-y-2">
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl opacity-0 animate-fade-in" style={{
                  animationDelay: "0.7s"
                }}>
                  В поиске баланса между интересами бизнеса и реальными потребностями людей через творческий взгляд, техническое мышление и внимание к деталям
                </p>
                
                <a 
                  href="https://t.me/pmkarelina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lg text-purple-600 dark:text-purple-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: "0.8s"
                  }}
                >
                  Канал "О чем думает продакт"
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
              animationDelay: "0.9s"
            }}>
              <button 
                onClick={() => setShowResumeModal(true)}
                className="button-primary inline-flex items-center justify-center group"
              >
                Посмотреть резюме
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex gap-3">
                <a href="#about" className="button-secondary inline-flex items-center justify-center">
                  {t('about')}
                </a>
                
                <a
                  href="https://music.yandex.ru/users/Karelina.valery/playlists/1013?utm_source=desktop&utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Music size={20} />
                </a>
              </div>
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

      {/* Resume Modal */}
      <Modal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)}
        title="Резюме"
        className="max-w-4xl"
      >
        <div className="space-y-4">
          <div className="w-full h-96">
            <iframe
              src="https://kareliavaleriia.github.io/p-130685/public/Резюме_Валерия_Карелина_продакт.pdf"
              className="w-full h-full border rounded-lg"
              title="Резюме"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://kareliavaleriia.github.io/p-130685/public/Резюме_Валерия_Карелина_продакт.pdf"
              download
              className="px-4 py-2 bg-pulse-600 text-white rounded-lg hover:bg-pulse-700 transition-colors"
            >
              Скачать PDF
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
