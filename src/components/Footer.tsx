"use client";
import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaTiktok, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa';
import { useTheme } from '@/app/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://x.com/_devHelen',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/helen-dee-dev/',
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="w-5 h-5" />,
      url: 'https://www.tiktok.com/@helendeecodes',
      color: 'hover:text-[#000000] dark:hover:text-[#EE1D52]'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/helen_dee__',
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/HELEN-DEE',
      color: 'hover:text-[#333] dark:hover:text-white'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-700'
    }`}>
      {/* Top border */}
      <div className={`h-px ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

      <div className="container mx-auto px-6 lg:px-6 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            
            {/* Brand Column */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Helen Dee<span className="text-purple-600">.</span>
              </h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Web developer creating intuitive and scalable digital solutions.
              </p>
              
              {/* Email */}
              <a 
                href="mailto:your-email@example.com"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'border-slate-800 hover:border-purple-600 bg-slate-900/50'
                    : 'border-slate-200 hover:border-purple-600 bg-slate-50'
                }`}
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">helendeee12@gmail.com</span>
              </a>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Let&apos;s Connect
              </h4>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Follow along for project updates and web development insights
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-3 rounded-lg border transition-all ${
                      theme === 'dark'
                        ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    } ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-6 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                © {currentYear} Helen Dee
              </p>
              <span className={`text-slate-500`}>•</span>
              <p className={`text-sm flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                Made with <FaHeart className="w-3.5 h-3.5 text-purple-600" /> and Next.js
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`p-2.5 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/50 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50 text-slate-600 hover:text-purple-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;