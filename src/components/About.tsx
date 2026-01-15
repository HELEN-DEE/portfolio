"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code2, Users, Target, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import { getSkillLogo } from '@/lib/skillLogos';



// Counter Animation Component
const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && !isVisible && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let start: number | null = null;
    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <div ref={counterRef}>{count}{suffix}</div>;
};

const About = () => {
  const { theme } = useTheme();


  const skills = [
    { name: 'HTML', category: 'Markup' },
    { name: 'CSS', category: 'Styling' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Git', category: 'Tools' },
    { name: 'Solidity', category: 'Web3' },
    { name: 'Shopify', category: 'E-commerce' }
  ];

  const values = [
    { icon: <Code2 className="w-5 h-5" />, title: 'Clean Code', description: 'Writing maintainable, scalable code that stands the test of time' },
    { icon: <Users className="w-5 h-5" />, title: 'Collaboration', description: 'Building meaningful relationships and working seamlessly with teams' },
    { icon: <Target className="w-5 h-5" />, title: 'Problem Solving', description: 'Turning complex challenges into elegant, user-friendly solutions' },
    { icon: <BookOpen className="w-5 h-5" />, title: 'Continuous Learning', description: 'Staying ahead of trends and constantly improving my craft' }
  ];

  const stats = [
    { value: 4, label: 'Years Experience', suffix: '+' },
    { value: 25, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

  const cardClass = `rounded-2xl p-8 border transition-colors ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`;
  const textClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const headingClass = theme === 'dark' ? 'text-white' : 'text-slate-900';

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section id="about" className={`min-h-screen py-6 lg:py-8 transition-colors ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <Users className="w-4 h-4 text-purple-600" />
            <span className={`text-sm font-medium ${textClass}`}>Get to know me</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${headingClass}`}>About Me</h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Where curiosity meets code, and passion drives innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Profile Image */}
            <motion.div 
              className="relative"
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
            >
              <div className={`relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <span className={`text-6xl font-bold ${theme === 'dark' ? 'text-slate-700' : 'text-slate-500'}`}>H</span>
                </div>
                <Image src="/assets/Helen-red.png" alt="Helen" fill className="object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-purple-600 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-purple-600 rounded-2xl -z-10"></div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className={cardClass}
              variants={fadeInLeft}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${headingClass}`}>Quick Stats</h3>
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</span>
                    <span className="text-2xl font-bold text-purple-600">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div 
              className={cardClass}
              variants={fadeInLeft}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>What Drives Me</h3>
              <div className="space-y-4">
                {values.map((value, i) => (
                  <motion.div 
                    key={i} 
                    className={`p-4 rounded-xl border transition-all ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white">{value.icon}</div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${headingClass}`}>{value.title}</h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Story */}
            <motion.div 
              className={cardClass}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>My Journey</h3>
              <div className={`space-y-4 leading-relaxed ${textClass}`}>
                <p>
                  I&apos;m a developer who got into tech out of pure curiosity, I wanted to understand how
                  websites actually worked and how ideas turned into real products. Over time, that curiosity
                  turned into a passion for building things that people genuinely enjoy using.
                </p>

                <p>
                  I build modern Web2, Web3, and CMS-driven products with a strong focus on usability, performance,
                  and clean structure. For me, development isn&apos;t just about shipping features — it&apos;s about solving
                  problems thoughtfully and creating interfaces that feel intuitive from the first interaction.
                </p>

                <p>
                  Outside of building products, I create tech content, share what I&apos;m learning, and actively
                  encourage others navigating their own tech journeys. I care about community, growth, and making
                  the space feel a little less overwhelming for the next person.
                </p>
              </div>

            </motion.div>

            {/* Skills */}
            <motion.div 
              className={cardClass}
              variants={fadeInRight}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className={`group p-4 rounded-xl border transition-all hover:scale-105 ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700 hover:border-purple-600' : 'bg-white border-slate-200 hover:border-purple-600'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="transition-transform group-hover:scale-110">{getSkillLogo(skill.name)}</div>
                      <div>
                        <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{skill.name}</div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{skill.category}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Card - Centered at bottom */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`rounded-2xl p-8 border text-center ${theme === 'dark' ? 'bg-purple-900/20 border-purple-800/50' : 'bg-purple-50 border-purple-200'}`}>
            <h3 className={`text-2xl font-semibold mb-3 ${headingClass}`}>Let&apos;s Work Together</h3>
            <p className={`mb-6 ${textClass}`}>
              Ready to bring your next project to life? I&apos;m always excited to collaborate on new ideas and create something amazing together.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2 group shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;