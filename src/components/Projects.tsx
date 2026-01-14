"use client";

import { useState } from "react";
import { Github, Code2, Layers, ShoppingBag, Blocks, ArrowRight, Filter, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

import project1 from "../../public/assets/VoltWatchGrid-website.png";
import project2 from "../../public/assets/bagstore-project.png";
import project3 from "../../public/assets/mod-portfolio.png";
import project4 from "../../public/assets/crowdmint-header.png";
import project5 from "../../public/assets/Finesse-republic-website.png";

type ProjectCategory = "all" | "web2" | "web3" | "cms";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
  status: "Completed" | "In progress";
}

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { theme } = useTheme();

    const projects: Project[] = [
        {
        id: 1,
        title: "Voltage Monitor Pro",
        description: "Power management system that monitors and controls voltage levels in real-time.",
        image: project1,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        category: "web2",
        featured: false,
        liveUrl: "https://voltage-monitor-pro.vercel.app/",
        githubUrl: "https://github.com/HELEN-DEE/Voltage-monitor-pro.git",
        status: "In progress",
        },
        {
        id: 2,
        title: "E-Commerce Website",
        description: "Responsive e-commerce site with product listings, shopping cart, and secure checkout.",
        image: project2,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        category: "web2",
        featured: true,
        liveUrl: "https://bag-ecommerce-next-v9tf.vercel.app/",
        githubUrl: "https://github.com/HELEN-DEE/bag-ecommerce-app.git",
        status: "Completed",
        },
        {
        id: 3,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects, skills, and experience.",
        image: project3,
        technologies: ["React", "Next.js", "CSS3", "REST API"],
        category: "web2",
        featured: false,
        liveUrl: "https://helen-dee.pxxl.click/",
        githubUrl: "https://github.com/HELEN-DEE/portfolio.git",
        status: "Completed",
        },
        {
        id: 4,
        title: "Crowdfunding Dapp",
        description: "Decentralized crowdfunding application with wallet integration.",
        image: project4,
        technologies: ["Next.js", "Solidity", "wagmi", "Hardhat"],
        category: "web3",
        featured: false,
        liveUrl: "https://crowdmint-liart.vercel.app/",
        githubUrl: "https://github.com/HELEN-DEE/crowdfunding-dapp.git",
        status: "In progress",
        },
        {
        id: 5,
        title: "Fashion Store",
        description: "Custom Shopify theme with advanced product filtering and checkout.",
        image: project5,
        technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
        category: "cms",
        featured: true,
        liveUrl: "https://www.finesserepublic.store",
        githubUrl: "#",
        status: "Completed",
        },
    ];

    const categories = [
        { id: "all" as ProjectCategory, label: "All Projects", icon: Layers },
        { id: "web2" as ProjectCategory, label: "Web Apps", icon: Code2 },
        { id: "web3" as ProjectCategory, label: "Blockchain", icon: Blocks },
        { id: "cms" as ProjectCategory, label: "E-Commerce", icon: ShoppingBag },
    ];

    const filteredProjects =
        activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const activeCategory = categories.find(cat => cat.id === activeFilter);

    const textClass = theme === "dark" ? "text-slate-300" : "text-slate-700";
    const headingClass = theme === "dark" ? "text-white" : "text-slate-900";

    return (
        <section
        id="projects"
        className={`min-h-screen py-20 lg:py-28 transition-colors ${
            theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
        >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

            {/* Header */}
            <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${
                theme === "dark"
                    ? "bg-slate-900/80 border-slate-800"
                    : "bg-slate-50 border-slate-200"
                }`}
            >
                <Code2 className="w-4 h-4 text-purple-600" />
                <span className={`text-sm font-medium ${textClass}`}>My Work</span>
            </div>

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${headingClass}`}>
                Featured Projects
            </h2>

            <p className={`text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
                A selection of Web2, Web3, and E-commerce projects I&apos;ve built
            </p>
            </motion.div>

            {/* Filter - Desktop: Buttons, Mobile: Dropdown */}
            
            {/* Mobile Dropdown */}
            <div className="md:hidden flex justify-center mb-12">
            <div className="relative">
                <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                    theme === "dark"
                    ? "bg-slate-900/50 border-slate-800 text-white hover:bg-slate-800"
                    : "bg-white border-slate-200 text-slate-900 hover:bg-slate-50 shadow-md"
                } border`}
                >
                <Filter className="w-4 h-4 text-purple-600" />
                <span className="flex items-center gap-2">
                    {activeCategory && <activeCategory.icon className="w-4 h-4" />}
                    {activeCategory?.label}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full mt-2 left-0 right-0 rounded-lg border overflow-hidden shadow-xl z-10 min-w-[200px] ${
                        theme === "dark"
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
                    >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                        <button
                            key={category.id}
                            onClick={() => {
                            setActiveFilter(category.id);
                            setIsDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                            activeFilter === category.id
                                ? "bg-purple-600 text-white"
                                : theme === "dark"
                                ? "text-slate-300 hover:bg-slate-800"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-medium">{category.label}</span>
                        </button>
                        );
                    })}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            </div>

            {/* Desktop Buttons */}
            <motion.div 
            className="hidden md:flex justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            >
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                    activeFilter === category.id
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : theme === "dark"
                        ? "bg-slate-900/50 text-slate-300 border border-slate-800 hover:bg-slate-800"
                        : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                </button>
                );
            })}
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeFilter}
            >
            {filteredProjects.map((project, index) => (
                <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group rounded-2xl overflow-hidden border transition-all hover:scale-105 ${
                    theme === "dark"
                    ? "bg-slate-900/50 border-slate-800 hover:border-purple-600"
                    : "bg-white border-slate-200 hover:border-purple-400 shadow-md"
                }`}
                >
                <div className="relative h-48 overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        project.status === "Completed"
                        ? "bg-emerald-500/90 text-white"
                        : "bg-amber-500/90 text-white"
                    }`}>
                        {project.status}
                    </span>
                    </div>
                </div>

                <div className="p-5">
                    <h3 className={`text-xl font-bold mb-2 ${headingClass}`}>
                    {project.title}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-2 ${textClass}`}>
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                        <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded ${
                            theme === "dark"
                            ? "bg-slate-800 text-slate-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                        >
                        {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className={`text-xs px-2 py-1 rounded ${
                        theme === "dark" ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
                        }`}>
                        +{project.technologies.length - 3}
                        </span>
                    )}
                    </div>

                    <div className="flex items-center justify-between">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    {project.githubUrl !== "#" && (
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                            theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                        }`}
                        >
                        <Github className="w-5 h-5" />
                        </a>
                    )}
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
            className="text-center mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <div className={`rounded-2xl p-8 border ${
                theme === "dark"
                ? "bg-purple-900/20 border-purple-800/50"
                : "bg-purple-50 border-purple-200"
            }`}>
                <h3 className={`text-2xl font-bold mb-3 ${headingClass}`}>
                Have a Project in Mind?
                </h3>
                <p className={`mb-6 ${textClass}`}>
                Let&apos;s collaborate and bring your ideas to life with clean code and beautiful design.
                </p>
                <motion.button 
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

export default Projects;