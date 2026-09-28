import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium mb-3">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            A selection of full-stack web applications I've built using
            ASP.NET Core, C#, SQL Server, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group bg-slate-800/80 border border-slate-700/60
              rounded-2xl overflow-hidden shadow-xl
              hover:border-blue-500/50 hover:shadow-blue-500/10
              transition-all duration-300"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover
                  group-hover:scale-105 transition-transform duration-500"
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-slate-900/80 via-transparent to-transparent
                  opacity-70"
                />

                {/* Project Number */}
                <div
                  className="absolute top-4 left-4
                  bg-slate-950/80 backdrop-blur-sm
                  border border-slate-700
                  px-3 py-1 rounded-full
                  text-sm text-slate-300"
                >
                  0{index + 1}
                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-7">

                {/* Title */}
                <div className="mb-5">

                  <h3 className="text-2xl font-bold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-blue-400 text-sm font-medium">
                    {project.subtitle}
                  </p>

                </div>

                {/* Description */}
                <p className="text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-7">

                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
                    Key Features
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-2
                        text-slate-400 text-sm"
                      >
                        <span className="text-blue-400">
                          ✓
                        </span>

                        {feature}
                      </div>

                    ))}

                  </div>

                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-7">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs font-medium
                      bg-blue-500/10
                      border border-blue-500/20
                      text-blue-400
                      px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-700">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    px-5 py-2.5
                    rounded-lg
                    font-medium
                    transition-all duration-300
                    hover:-translate-y-0.5"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                    border border-slate-600
                    hover:border-blue-400
                    hover:text-blue-400
                    px-5 py-2.5
                    rounded-lg
                    font-medium
                    transition-all duration-300
                    hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;