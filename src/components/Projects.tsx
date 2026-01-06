"use client";
import { useState } from "react";
import {
    Github,
    Eye,
    Code2,
    Sparkles,
    Filter,
    ArrowUpRight,
    Layers,
    ShoppingBag,
    Blocks,
} from "lucide-react";

import Image, { type StaticImageData } from "next/image";
import project1 from "../../public/assets/VoltWatchGrid-website.png";
import project2 from "../../public/assets/bagstore-project.png";
import project3 from "../../public/assets/helen-portfolio.png";
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

    const projects: Project[] = [
        {
            id: 1,
            title: "Voltage Monitor Pro",
            description:
                "Power management system that monitors and controls voltage levels in real-time.",
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
            description:
                "Responsive e-commerce site with product listings, shopping cart, and secure checkout.",
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
            description:
                "Personal portfolio showcasing projects, skills, and experience.",
            image: project3,
            technologies: ["React", "Next.js", "CSS3", "REST API"],
            category: "web2",
            featured: false,
            liveUrl: "https://helen-dee.pxxl.click/",
            githubUrl: "https://github.com/HELEN-DEE/portfolio.git",
            status: "In progress",
        },
             // Web3/Blockchain projects here
        {
            id: 4,
            title: "Crowdfunding Dapp",
            description: "Decentralized marketplace for trading NFTs with wallet integration.",
            image: project4,
            technologies: ["Next.js", "Solidity", "wagmi", "Hardhat"],
            category: "web3",
            featured: false,
            liveUrl: "https://crowdmint-liart.vercel.app/",
            githubUrl: "https://github.com/HELEN-DEE/crowdfunding-dapp.git",
            status: "In progress",
        },
            // Shopify/WordPress projects here
        {
            id: 5,
            title: "Fashion Store",
            description: "Custom Shopify theme with advanced product filtering and checkout.",
            image: project5,
            technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
            category: "cms",
            featured: true,
            liveUrl: "www.finesserepublic.store",
            githubUrl: "#",
            status: "Completed",
        },
        // {
        //     id: 6,
        //     title: "Flight Aggregator",
        //     description:
        //         "Responsive e-commerce site with product listings, shopping cart, and secure checkout.",
        //     image: project2,
        //     technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        //     category: "web2",
        //     featured: true,
        //     liveUrl: "https://bag-ecommerce-next-v9tf.vercel.app/",
        //     githubUrl: "https://github.com/HELEN-DEE/bag-ecommerce-app.git",
        //     status: "Completed",
        // },
        // {
        //     id: 7,
        //     title: "Todo App",
        //     description:
        //         "Responsive e-commerce site with product listings, shopping cart, and secure checkout.",
        //     image: project2,
        //     technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        //     category: "web2",
        //     featured: true,
        //     liveUrl: "https://helen-dee.github.io/Todo-app/",
        //     githubUrl: "https://github.com/HELEN-DEE/bag-ecommerce-app.git",
        //     status: "Completed",
        // },
    ];

    const categories = [
        { 
            id: "all" as ProjectCategory, 
            label: "All Projects", 
            count: projects.length,
            icon: Layers 
        },
        {
            id: "web2" as ProjectCategory,
            label: "Web2",
            count: projects.filter((p) => p.category === "web2").length,
            icon: Code2,
        },
        {
            id: "web3" as ProjectCategory,
            label: "Blockchain",
            count: projects.filter((p) => p.category === "web3").length,
            icon: Blocks,
        },
        {
            id: "cms" as ProjectCategory,
            label: "CMS",
            count: projects.filter((p) => p.category === "cms").length,
            icon: ShoppingBag,
        },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section
            id="projects"
            className="min-h-screen bg-gradient-to-br from-[#0F0F13] via-[#1A142D] to-[#0F0F13] text-slate-100 py-20 relative overflow-hidden"
        >
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
                        A collection of responsive websites and applications across Web2, Web3, and CMS platforms
                    </p>
                </div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
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
                                                className="flex items-center space-x-2 bg-gradient-to-br from-[#ffd53d] to-[#ff9327] hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
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
                )}

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeFilter === category.id
                                        ? "bg-gradient-to-br from-[#ffd53d] to-[#ff9327] text-white shadow-lg shadow-orange-500/30"
                                        : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20"
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                <span>{category.label}</span>
                                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
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
                        <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Have a Project in Mind?
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Let&apos;s collaborate and bring your ideas to life with clean
                            code and beautiful design.
                        </p>
                        <button className="group bg-gradient-to-br from-[#ffd53d] to-[#ff9327] hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
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