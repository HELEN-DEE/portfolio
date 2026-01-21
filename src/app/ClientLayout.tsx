// app/ClientLayout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./context/ThemeContext";

interface ClientLayoutProps {
    children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setMounted(true);
        const timeout = setTimeout(() => setShowLoader(false), 1800);
        return () => clearTimeout(timeout);
    }, []);

    if (!mounted) return null;

    return (
        <>
        <AnimatePresence>
            {showLoader && (
            <motion.div
                className={`fixed inset-0 z-[9999] flex items-center justify-center ${
                theme === "dark" ? "bg-slate-950" : "bg-white"
                }`}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col items-center gap-10 w-full max-w-md px-6">
                
                {/* Name */}
                <motion.h1
                    className={`text-4xl md:text-6xl font-semibold tracking-tight ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                    initial="hidden"
                    animate="visible"
                    variants={{
                    visible: {
                        transition: { staggerChildren: 0.06 },
                    },
                    }}
                >
                    {"Helen Dee".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {char}
                    </motion.span>
                    ))}
                    <span className="text-purple-600">.</span>
                </motion.h1>

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`text-sm tracking-wide uppercase ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                    Web Developer
                </motion.p>

                {/* Progress Line */}
                <div className="w-full h-[3px] bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                    className="h-full bg-purple-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.0, ease: "easeInOut" }}
                    />
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* Main Content */}
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: showLoader ? 0 : 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
        >
            {children}
        </motion.main>
        </>
    );
};

export default ClientLayout;
