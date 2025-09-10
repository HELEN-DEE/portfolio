"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

return (
    <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled
            ? "bg-[#0D0C1A]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
        >
        <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="relative">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-purple-200 bg-clip-text text-transparent">
                HELEN.
                </h1>
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#7D2A9B] to-[#C2185B]"></div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                    <a
                    href={link.path}
                    className="text-slate-200 hover:text-white font-medium transition-all duration-300 py-2 px-1 relative"
                    >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7D2A9B] to-[#C2185B] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                ))}
            </ul>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
                <button className="bg-gradient-to-r from-[#7D2A9B] to-[#C2185B] hover:from-[#6A1B9A] hover:to-[#AD1457] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
                {navLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.path}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-slate-200 hover:text-white font-medium transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                >
                    <span>{link.label}</span>
                    <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C2185B] group-hover:translate-x-1 transition-all duration-200" />
                </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                <button className="w-full bg-gradient-to-r from-[#7D2A9B] to-[#C2185B] hover:from-[#6A1B9A] hover:to-[#AD1457] text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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
