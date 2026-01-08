"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/5"
            : "bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5"
          : theme === 'dark'
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="relative group z-10"
          >
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Helen Dee
              <span className="text-purple-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const sectionId = link.path.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={index}
                  href={link.path}
                  onClick={(e) => handleSmoothScroll(e, link.path)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive 
                      ? theme === 'dark'
                        ? "text-white bg-slate-800/50"
                        : "text-slate-900 bg-slate-100"
                      : theme === 'dark'
                        ? "text-slate-400 hover:text-white hover:bg-slate-800/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <FiMoon className="w-4 h-4" />
              ) : (
                <FiSun className="w-4 h-4" />
              )}
            </button>

            {/* CTA Button */}
            <button 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-800/50 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-800/50 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`mt-2 rounded-xl overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-900/95 border border-slate-800'
              : 'bg-white/95 border border-slate-200'
          } backdrop-blur-xl shadow-xl`}>
            <div className="p-3 space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.path.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={index}
                    href={link.path}
                    onClick={(e) => handleSmoothScroll(e, link.path)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? theme === 'dark'
                          ? "bg-purple-900/30 text-purple-300"
                          : "bg-purple-50 text-purple-700"
                        : theme === 'dark'
                          ? "text-slate-300 hover:bg-slate-800"
                          : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className={`p-3 border-t ${
              theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <button 
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-purple-500/25"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;