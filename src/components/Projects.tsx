import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaLayerGroup, FaStar } from "react-icons/fa";
import { projects, type Project } from "../data/projects";

function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterCategories = ["All", "ASP.NET Core Web API + React", "Full Stack ASP.NET Core MVC"];

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(selectedFilter) || (selectedFilter.includes("MVC") && p.category.includes("MVC")));

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-14 sm:py-20 md:py-28 lg:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-2 sm:mb-3">
            <FaLayerGroup size={11} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed">
            Real-world full-stack web applications and architectures engineered with ASP.NET Core, C#, SQL Server, and modern web technologies.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer min-h-[38px] flex items-center ${
                  selectedFilter === cat
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {filteredProjects.map((project: Project, index: number) => {
            const isDevScope = project.title === "DevScope";
            const isSanaa = project.title === "Sanaa";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className={`group rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isSanaa ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : "w-full"
                } ${
                  isDevScope
                    ? "bg-slate-900 border-2 border-blue-500/70 shadow-2xl shadow-blue-950/40 ring-1 ring-blue-500/30"
                    : "bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/20"
                }`}
              >
                <div>
                  {/* Visual Image Container with 16:10 aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title} - ${project.subtitle}`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Vignette */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"
                    />

                    {/* Index and Category Badges */}
                    <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-start justify-between gap-2 pointer-events-none">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-mono text-xs font-bold text-slate-200 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/80">
                          0{index + 1}
                        </span>

                        {isDevScope && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/40 border border-blue-400/40">
                            <FaStar size={10} className="text-amber-300" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-mono text-blue-300 bg-blue-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-500/30 truncate max-w-[55%] sm:max-w-none">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 lg:p-7">
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        {isDevScope && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                            Flagship
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* High-Readability Description */}
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 mb-4 sm:mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Features Grid */}
                    <div className="mb-4 sm:mb-6 bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 sm:p-4">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                        <span>Highlighted Capabilities</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px] flex-shrink-0">
                              <FaCheck />
                            </span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links Footer */}
                <div className="px-4 sm:px-7 py-3 sm:py-4 bg-slate-950/80 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isSanaa ? "w-full" : "flex-1 sm:flex-initial"
                    }`}
                  >
                    <FaGithub size={15} />
                    <span>View Repository</span>
                  </a>

                  {/* For Sanaa ONLY, remove the Live Demo button completely */}
                  {!isSanaa && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 flex-1 sm:flex-initial"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
