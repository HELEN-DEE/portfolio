"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from '@/app/context/ThemeContext';

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Get all sections with IDs
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      
      let current: string = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        
        if (
          sectionId &&
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          current = sectionId;
        }
      });
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, 
    path: string
  ) => {
    e.preventDefault();
    
    if (path.startsWith("#")) {
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setIsOpen(false);
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
        if (window.history.pushState) {
          window.history.pushState(null, "", path);
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
            : "bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Simplified and elegant */}
          <a 
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="group relative"
          >
            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Helen
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => {
                const sectionId = link.path.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <li key={index}>
                    <a
                      href={link.path}
                      onClick={(e) => handleSmoothScroll(e, link.path)}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                        isActive 
                          ? "text-slate-900 dark:text-white" 
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-500"></span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-slate-700" />
              ) : (
                <FiSun className="w-5 h-5 text-slate-300" />
              )}
            </button>

            {/* CTA Button */}
            <button 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-5 py-2.5 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-slate-700" />
              ) : (
                <FiSun className="w-5 h-5 text-slate-300" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.path.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={index}
                    href={link.path}
                    onClick={(e) => handleSmoothScroll(e, link.path)}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="font-medium">{link.label}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <button 
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full py-3 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;