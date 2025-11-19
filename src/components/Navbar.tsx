"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

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

    // Set initial active section
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with proper TypeScript typing
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, 
    path: string
  ) => {
    e.preventDefault();
    
    if (path.startsWith("#")) {
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        setIsOpen(false);
        
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
        // Update URL without page reload (Next.js compatible)
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
          ? "bg-[#0D0C1A]/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#0D0C1A]/20 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-2">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-purple-200 bg-clip-text text-transparent">
              HELEN.
            </h1>
            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#C49BFF]"></div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const sectionId = link.path.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={index} className="relative group">
                  <a
                    href={link.path}
                    onClick={(e) => handleSmoothScroll(e, link.path)}
                    className={`font-medium transition-all duration-300 py-2 px-1 relative ${
                      isActive 
                        ? "text-white" 
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#C49BFF] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="bg-[#945ee4] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-slate-100 hover:text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0D0C1A]/95 backdrop-blur-md rounded-2xl border border-white/10 p-6 space-y-4 shadow-2xl">
            {navLinks.map((link, index) => {
              const sectionId = link.path.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={index}
                  href={link.path}
                  onClick={(e) => handleSmoothScroll(e, link.path)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-white/10 text-white border-l-2 border-[#C2185B]"
                      : "hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <FiArrowRight className={`w-4 h-4 transition-all duration-200 ${
                    isActive 
                      ? "text-[#C2185B] translate-x-1" 
                      : "text-slate-400 group-hover:text-[#C2185B] group-hover:translate-x-1"
                  }`} />
                </a>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <button 
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full bg-gradient-to-r from-[#7D2A9B] to-[#C2185B] hover:from-[#6A1B9A] hover:to-[#AD1457] text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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