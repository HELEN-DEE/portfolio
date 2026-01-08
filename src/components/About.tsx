"use client";
import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import { Code2, Users, Target, BookOpen, ArrowRight } from 'lucide-react';
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
    { value: 3, label: 'Years Experience', suffix: '+' },
    { value: 25, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  const cardClass = `rounded-2xl p-8 border transition-colors ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`;
  const textClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const headingClass = theme === 'dark' ? 'text-white' : 'text-slate-900';

  return (
    <section id="about" className={`min-h-screen py-20 lg:py-28 transition-colors ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <Users className="w-4 h-4 text-purple-600" />
            <span className={`text-sm font-medium ${textClass}`}>Get to know me</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${headingClass}`}>About Me</h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Where curiosity meets code, and passion drives innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className={`relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <span className={`text-6xl font-bold ${theme === 'dark' ? 'text-slate-700' : 'text-slate-300'}`}>H</span>
                </div>
                {/* <Image src="/your-image.jpg" alt="Helen" fill className="object-cover" /> */}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-purple-600 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-purple-600 rounded-2xl -z-10"></div>
            </div>

            {/* Quick Stats */}
            <div className={cardClass}>
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
            </div>

            {/* CTA Card */}
            <div className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-purple-900/20 border-purple-800/50' : 'bg-purple-50 border-purple-200'}`}>
              <h3 className={`text-lg font-semibold mb-2 ${headingClass}`}>Let&apos;s Work Together</h3>
              <p className={`text-sm mb-4 ${textClass}`}>Ready to bring your next project to life?</p>
              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story */}
            <div className={cardClass}>
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>My Journey</h3>
              <div className={`space-y-4 leading-relaxed ${textClass}`}>
                <p>I&apos;m a passionate frontend developer who entered the tech space driven by an insatiable curiosity and love for crafting digital experiences. What started as fascination with how websites work has evolved into a deep passion for building solutions that make a difference.</p>
                <p>My approach to development goes beyond just writing code—I believe in creating experiences that are not only visually stunning but also performant, accessible, and user-centered. Every project is an opportunity to push boundaries and solve real-world problems through clean, maintainable code.</p>
                <p>When I&apos;m not immersed in code, you&apos;ll find me creating video content, writing technical pieces that help fellow developers, or being one of X&apos;s biggest motivators—spreading positivity and knowledge in the developer community.</p>
              </div>
            </div>

            {/* Skills */}
            <div className={cardClass}>
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className={`group p-4 rounded-xl border transition-all hover:scale-105 ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700 hover:border-purple-600' : 'bg-white border-slate-200 hover:border-purple-600'}`}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="transition-transform group-hover:scale-110">{getSkillLogo(skill.name)}</div>
                      <div>
                        <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{skill.name}</div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{skill.category}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className={cardClass}>
              <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>What Drives Me</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <div key={i} className={`p-4 rounded-xl border transition-all ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white">{value.icon}</div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${headingClass}`}>{value.title}</h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;