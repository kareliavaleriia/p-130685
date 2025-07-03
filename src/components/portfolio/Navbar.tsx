
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: 'about', href: '#about' },
    { key: 'career', href: '#career', label: 'Карьера' },
    { key: 'education', href: '#education' },
    { key: 'projects', href: '#projects', label: 'Проекты' },
    { key: 'examples', href: '#examples' },
    { key: 'achievements', href: '#achievements' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}>
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-pulse-600 dark:text-pulse-400">
              Product Manager
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a 
                key={item.key}
                href={item.href} 
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-pulse-600 dark:hover:text-pulse-400"
              >
                {item.label || t(item.key)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="px-3 py-1 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 hover:bg-pulse-50 dark:hover:bg-pulse-900/20 transition-colors"
            >
              {language.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}>
          <nav className="flex flex-col p-4 space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className="py-2 text-gray-700 dark:text-gray-300 hover:text-pulse-600 dark:hover:text-pulse-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label || t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-40 p-3 bg-pulse-600 text-white rounded-full shadow-lg hover:bg-pulse-700 transition-all duration-300",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Navbar;
