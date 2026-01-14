// app/ClientLayout.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './context/ThemeContext';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide loading screen after progress completes
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [mounted]);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={`fixed inset-0 z-[9999] flex items-center justify-center ${
              theme === 'dark' ? 'bg-slate-950' : 'bg-white'
            }`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex flex-col items-center">
              
              {/* Animated Logo/Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <motion.h1
                  className={`text-5xl md:text-7xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Helen Dee
                  <motion.span 
                    className="text-purple-600"
                    animate={{ 
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    .
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Animated Circles */}
              <div className="relative w-32 h-32 mb-8">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 border-4 border-purple-600 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1.4],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeOut",
                    }}
                  />
                ))}
                
                {/* Center Logo */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <motion.div
                      className="w-8 h-8 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="w-64 md:w-80">
                <div className={`h-1 rounded-full overflow-hidden mb-3 ${
                  theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                }`}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Progress Text */}
                <motion.p
                  className={`text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Loading... {progress}%
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ClientLayout;