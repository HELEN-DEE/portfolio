"use client";
import React from 'react';
import { ArrowRight, Code2, Sparkles, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme(); // This ensures component re-renders on theme change

    return (
        <section 
        id="home" 
        className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center relative overflow-hidden pt-24 pb-16 transition-colors duration-300"
        >
        {/* Subtle dot grid pattern - made even more subtle */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
            <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
            }}></div>
        </div>

        {/* Side element suggestion - Abstract shapes */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 opacity-10 dark:opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 border border-slate-400 dark:border-slate-600 rounded-full"></div>
            <div className="absolute bottom-0 right-32 w-48 h-48 border border-slate-400 dark:border-slate-600 rounded-full"></div>
            <div className="absolute top-1/4 right-16 w-32 h-32 border border-slate-400 dark:border-slate-600 rounded-full"></div>
        </div>

        {/* Floating elements alternative */}
        <div className="absolute right-8 top-1/4 opacity-5 dark:opacity-10">
            <div className="w-24 h-24 border border-slate-400 dark:border-slate-600 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute right-16 bottom-1/4 opacity-5 dark:opacity-10">
            <div className="w-16 h-16 border border-slate-400 dark:border-slate-600 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
            <div className="space-y-12">
            
            {/* Main Content */}
            <motion.div 
                className="space-y-6 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-sm transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Open to new opportunities</span>
                </div>

                {/* Main headline */}
                <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight transition-colors duration-300">
                    Web Developer
                    <br />
                    <span className="text-slate-600 dark:text-slate-400 transition-colors duration-300">building digital</span>
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

                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed transition-colors duration-300">
                    I&apos;m Helen, a developer who turns complex problems into clean, intuitive interfaces. 
                    I specialize in React and modern web technologies to build products that users actually enjoy using.
                </p>
                </div>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-[#7c3aed] transition-all backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">React & Next.js</span>
                </div>
                <div className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-[#7c3aed] transition-all backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Modern UI/UX</span>
                </div>
                <div className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-[#7c3aed] transition-all backdrop-blur-sm">
                <Globe className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Web3 Integration</span>
                </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button className="group relative px-8 py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-lg hover:shadow-xl">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg font-semibold border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm">
                Get in Touch
                </button>
            </motion.div>

            {/* Social proof / Quick stats */}
            <motion.div 
                className="pt-8 flex flex-wrap items-center gap-8 text-sm text-slate-700 dark:text-slate-400 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#f3e8ff] dark:bg-[#4c1d95] border-2 border-white dark:border-slate-950 flex items-center justify-center transition-colors duration-300">
                    <span className="text-xs font-bold text-[#7c3aed] dark:text-purple-300">5+</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-950 transition-colors duration-300"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-950 transition-colors duration-300"></div>
                </div>
                <span className="font-medium">Trusted by clients worldwide</span>
                </div>
                
                <div className="flex items-center gap-2">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                </div>
                <span className="font-medium">5+ years experience</span>
                </div>

                <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="font-medium">Available for hire</span>
                </div>
            </motion.div>

            </div>
        </div>
        </section>
    );
};

export default Hero;