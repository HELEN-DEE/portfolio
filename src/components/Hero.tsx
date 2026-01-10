"use client";
import React from 'react';
import { ArrowRight, Code2, Sparkles, Globe, Terminal, Layers, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section 
            id="home" 
            className={`min-h-screen flex items-center relative overflow-hidden pt-16  transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-slate-950 text-slate-100' 
                    : 'bg-white text-slate-900'
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* LEFT - Main Content */}
                    <motion.div 
                        className="space-y-8 max-w-3xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Status badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                            theme === 'dark' 
                                ? 'bg-slate-900/80 border-slate-800' 
                                : 'bg-slate-50 border-slate-200'
                        } border`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className={`text-[12px] font-medium ${
                                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                                Available for work
                            </span>
                        </div>

                        {/* Main headline */}
                        <div className="space-y-2">
                            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight transition-colors duration-300 ${
                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                                Web Developer
                                <br />
                                <span className={`transition-colors duration-300 ${
                                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                    building digital
                                </span>
                                <br />
                                <span className="relative inline-block">
                                    experiences
                                    <svg 
                                        className="absolute -bottom-2 left-0 w-full" 
                                        height="12" 
                                        viewBox="0 0 300 12" 
                                        fill="none"
                                    >
                                        <path 
                                        d="M2 10C50 5 100 2 150 4C200 6 250 8 298 5" 
                                        stroke="#7c3aed" 
                                        strokeWidth="3" 
                                        strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h1>

                            <p className={`text-lg max-w-2xl leading-relaxed transition-colors duration-300 ${
                                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                                I&apos;m Helen, a web developer who turns complex problems into clean, intuitive digital experiences.
                                I build modern Web2, Web3, and CMS-driven products that users actually enjoy using.
                            </p>
                        </div>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: Code2, label: 'React & Next.js' },
                                { icon: Sparkles, label: 'Modern UI/UX' },
                                { icon: Globe, label: 'Web3 Integration' }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-sm border hover:border-[#7c3aed] transition-all ${
                                        theme === 'dark'
                                            ? 'bg-slate-900/80 border-slate-800'
                                            : 'bg-white/80 border-slate-200'
                                    }`}
                                >
                                    <item.icon className="w-4 h-4 text-[#7c3aed]" />
                                    <span className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                                    }`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 ">
                            <button className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-xl ">
                                <span>View My Work</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm ${
                                theme === 'dark'
                                    ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 hover:border-slate-400'
                            }`}>
                                Get in Touch
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT - Decorative Visual Element */}
                    <motion.div 
                        className="hidden lg:flex relative h-[600px] items-center justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Code Window Mockup */}
                        <div className={`relative w-full max-w-md h-[500px] rounded-2xl border overflow-hidden shadow-2xl ${
                            theme === 'dark' 
                                ? 'bg-slate-900 border-slate-800' 
                                : 'bg-white border-slate-200'
                        }`}>
                            {/* Window Header */}
                            <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                                theme === 'dark' ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
                            }`}>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className={`ml-4 text-xs font-medium ${
                                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                    portfolio.tsx
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 font-mono text-sm space-y-3">
                                <div className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}>
                                    <span className="text-purple-500">const</span>{' '}
                                    <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>developer</span>{' '}
                                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>= {'{'}</span>
                                </div>
                                <div className={`pl-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>name</span>: 
                                    <span className={theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}> &quot;Helen&quot;</span>,
                                </div>
                                <div className={`pl-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>skills</span>: [
                                </div>
                                <div className={`pl-8 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>
                                    {'"React", "Next.js", "TypeScript,"'}
                                </div>
                                <div className={`pl-8 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>
                                    {'"Tailwind", "Web3", "CMS"'}
                                </div>
                                <div className={`pl-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>],</div>
                                <div className={`pl-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>passion</span>: 
                                    <span className={theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}> &quot;Building UIs&quot;</span>,
                                </div>
                                <div className={`pl-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>available</span>: 
                                    <span className="text-purple-500"> true</span>
                                </div>
                                <div className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>{'}'}</div>
                            </div>

                            {/* Floating Icons */}
                            <motion.div
                                className={`absolute top-20 -right-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${
                                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Terminal className="w-6 h-6 text-purple-600" />
                            </motion.div>

                            <motion.div
                                className={`absolute bottom-32 -left-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${
                                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Layers className="w-6 h-6 text-purple-600" />
                            </motion.div>

                            <motion.div
                                className={`absolute top-1/2 -right-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${
                                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Zap className="w-6 h-6 text-purple-600" />
                            </motion.div>
                        </div>

                        {/* Background decoration */}
                        <div className={`absolute inset-0 -z-10 ${
                            theme === 'dark' ? 'opacity-30' : 'opacity-20'
                        }`}>
                            <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-purple-600/20 rounded-full"></div>
                            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-purple-600/20 rounded-full"></div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;