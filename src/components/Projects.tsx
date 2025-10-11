"use client";
import { useState } from "react";
import {
    Github,
    Eye,
    Code2,
    Sparkles,
    Filter,
    ArrowUpRight,
} from "lucide-react";

import Image from "next/image";
import project1 from "../../public/assets/bagstore-project.png"
import project3 from "../../public/assets/voltage-monitor-pro.png"


const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    // Example projects - all web projects
    const projects = [
        {
            id: 1,
            title: "Voltage Monitor pro",
            description:
                "Power management system that monitors and controls voltage levels in real-time.",
            image:
                project3,
            technologies: ["Next.JS", "TypeScriot", "Tailwind CSS", "Firebase"],
            category: "web",
            featured: true,
            liveUrl: "https://voltage-monitor-pro.vercel.app/",
            githubUrl: "https://github.com/HELEN-DEE/Voltage-monitor-pro.git",
            status: "in progress",
        },
        {
            id: 2,
            title: "E-Commerce Website",
            description:
                "Admin dashboard with real-time analytics, inventory tracking, and order management.",
            image: project1,
            technologies: [ "Next.js", "TypeScript", "Tailwind CSS", "Firebase" ],
            category: "web",
            featured: true,
            liveUrl: "https://bag-ecommerce-next-v9tf.vercel.app/",
            githubUrl: "https://github.com/HELEN-DEE/bag-ecommerce-app.git",
            status: "Completed",
        },
        // {
        //     id: 2,
        //     title: "Task Management App",
        //     description:
        //         "Modern task manager with drag-and-drop, collaboration, and project tracking.",
        //     image:
        //         "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        //     technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        //     category: "web",
        //     featured: true,
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     status: "Completed",
        // },
        
        // socket.io, mongodb, node.js
        // {
        //     id: 3,
        //     title: "Travel Booking Platform",
        //     description:
        //         "Responsive travel booking website with search filters and booking system.",
        //     image:
        //         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        //     technologies: ["React", "Next.js", "CSS3", "REST API"],
        //     category: "web",
        //     featured: false,
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     status: "Completed",
        // },
        // {
        //     id: 4,
        //     title: "Fitness Tracking Dashboard",
        //     description:
        //         "Interactive dashboard for tracking fitness progress and workout routines.",
        //     image:
        //         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        //     technologies: ["JavaScript", "Chart.js", "HTML5", "CSS3"],
        //     category: "web",
        //     featured: false,
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     status: "Completed",
        // },
        // {
        //     id: 5,
        //     title: "Recipe Sharing Platform",
        //     description:
        //         "Community-driven platform for sharing and discovering new recipes.",
        //     image:
        //         "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
        //     technologies: ["React", "Firebase", "Material UI", "Redux"],
        //     category: "web",
        //     featured: false,
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     status: "Completed",
        // },
        // {
        //     id: 6,
        //     title: "Real Estate Listing",
        //     description:
        //         "Modern real estate platform with property search and filtering capabilities.",
        //     image:
        //         "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        //     technologies: ["React", "Next.js", "Tailwind CSS", "Mapbox"],
        //     category: "web",
        //     featured: false,
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     status: "Completed",
        // },
    ];

    const categories = [
        { id: "all", label: "All Projects", count: projects.length },
        {
        id: "web",
        label: "Web Applications",
        count: projects.filter((p) => p.category === "web").length,
        },
    ];

    const filteredProjects =
        activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-br from-[#0F0F13] via-[#1A142D] to-[#0F0F13] text-slate-100 py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-purple-700 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm border border-white/20 mb-6">
                <Code2 className="w-4 h-4 text-purple-300" />
                <span>My Creative Work</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A collection of responsive websites and web applications I&apos;ve crafted with modern technologies
            </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-20">
            <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">
                Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                <div
                    key={project.id}
                    className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02]"
                >
                    <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                        <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                        >
                        {project.status}
                        </span>
                    </div>
                    </div>

                    <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                    </h4>
                    <p className="text-slate-400 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 border border-white/20"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        </a>
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-white/30 hover:border-white/60 text-slate-100 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10"
                        >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20"
                }`}
                >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                </span>
                </button>
            ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105"
                >
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                    {project.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-md text-xs text-slate-300"
                        >
                        {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-slate-300">
                        +{project.technologies.length - 3}
                        </span>
                    )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-300 hover:text-purple-200 flex items-center"
                    >
                        View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 max-w-2xl mx-auto">
                <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                Have a Project in Mind?
                </h3>
                <p className="text-slate-300 mb-6">
                Let&apos;s collaborate and bring your ideas to life with clean
                code and beautiful design.
                </p>
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
            </div>
            </div>
        </div>
        </section>
);
};

export default Projects;