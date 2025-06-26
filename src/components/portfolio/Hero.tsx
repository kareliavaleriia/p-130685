
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
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-50/50 to-orange-50/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs mr-2">01</span>
                <span>Purpose</span>
              </div>
              
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight opacity-0 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {t('heroTitle')}
              </h1>
              
              <p 
                className="text-xl text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                {t('heroSubtitle')}
              </p>
              
              <p 
                className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl opacity-0 animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                {t('heroDescription')}
              </p>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <a 
                href="#contact" 
                className="button-primary inline-flex items-center justify-center group"
              >
                {t('downloadCV')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#about" 
                className="button-secondary inline-flex items-center justify-center"
              >
                {t('about')}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-200 to-orange-200 dark:from-pulse-800 dark:to-orange-800 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              <img 
                ref={imageRef}
                src="/lovable-uploads/40c8633b-600f-4b78-97b2-c2fe189cfc58.png" 
                alt="Product Manager"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl transition-transform duration-500 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
