"use client";
import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa';
import { useTheme } from '@/app/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://twitter.com/your-handle',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: 'https://linkedin.com/in/your-profile',
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="w-5 h-5" />,
      url: 'https://tiktok.com/@your-username',
      color: 'hover:text-[#000000] dark:hover:text-[#EE1D52]'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://instagram.com/your-username',
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/your-username',
      color: 'hover:text-[#333] dark:hover:text-white'
    }
  ];

  const quickLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
    { label: 'Contact', path: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className={`relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-700'
    }`}>
      {/* Top border */}
      <div className={`h-px ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Helen Dee<span className="text-purple-600">.</span>
              </h3>
              <p className={`mb-6 max-w-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Frontend developer crafting beautiful, functional web experiences. Let&apos;s build something amazing together.
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
                <span className="text-sm font-medium">your-email@example.com</span>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      onClick={(e) => handleSmoothScroll(e, link.path)}
                      className={`transition-colors ${
                        theme === 'dark'
                          ? 'text-slate-400 hover:text-purple-400'
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Connect With Me
              </h4>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Follow me for updates, tips, and behind-the-scenes content
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
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
              © {currentYear} Helen Dee. Built with{' '}
              <Heart className="w-4 h-4 inline text-red-500 fill-red-500" />{' '}
              and Next.js
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/50 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50 text-slate-600 hover:text-purple-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;