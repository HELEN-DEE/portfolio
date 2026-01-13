"use client";

import { useState } from "react";
import { Github, Code2, Layers, ShoppingBag, Blocks, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
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
    { id: "all" as ProjectCategory, label: "All Projects", count: projects.length, icon: Layers },
    { id: "web2" as ProjectCategory, label: "Web Apps", count: projects.filter(p => p.category === "web2").length, icon: Code2 },
    { id: "web3" as ProjectCategory, label: "Blockchain", count: projects.filter(p => p.category === "web3").length, icon: Blocks },
    { id: "cms" as ProjectCategory, label: "E-Commerce", count: projects.filter(p => p.category === "cms").length, icon: ShoppingBag },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const textClass = theme === "dark" ? "text-slate-300" : "text-slate-700";
  const headingClass = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    <section
      id="projects"
      className={`min-h-screen transition-colors ${
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
            Projects
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}>
            A selection of Web2, Web3, and E-commerce projects I’ve built.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
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
                {category.label}
                <span className="text-xs opacity-70">({category.count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group rounded-2xl overflow-hidden border transition-all hover:scale-105 ${
                project.featured ? "ring-2 ring-purple-500/40" : ""
              } ${
                theme === "dark"
                  ? "bg-slate-900/50 border-slate-800 hover:border-purple-600"
                  : "bg-white border-slate-200 hover:border-purple-400 shadow-md"
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 ${headingClass}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${textClass}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
