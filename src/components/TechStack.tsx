import { motion } from "framer-motion";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaJava,
  FaPython,
  FaJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiDotnet,
  
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={42} /> },
      { name: "CSS3", icon: <FaCss3Alt size={42} /> },
      { name: "JavaScript", icon: <FaJs size={42} /> },
      { name: "TypeScript", icon: <SiTypescript size={42} /> },
      { name: "React", icon: <FaReact size={42} /> },
    ],
  },

  {
    title: "Backend",
    description: "Developing scalable web applications and APIs.",
    skills: [
      { name: "C#", icon: <FaCode size={42} /> },
      { name: "ASP.NET Core", icon: <SiDotnet size={42} /> },
      { name: "Entity Framework Core", icon: <FaMicrosoft size={42} /> },
      { name: "REST API", icon: <FaCode size={42} /> },
      { name: "LINQ", icon: <FaCode size={42} /> },
    ],
  },

  {
    title: "Programming Languages",
    description: "Programming languages I work and learn with.",
    skills: [
      { name: "C#", icon: <FaCode size={42} /> },
      { name: "C++", icon: <SiCplusplus size={42} /> },
      { name: "Python", icon: <FaPython size={42} /> },
      { name: "Java", icon: <FaJava size={42} /> },
    ],
  },

  {
    title: "Databases",
    description: "Working with relational databases and data access.",
    skills: [
      { name: "SQL Server", icon: <FaCode size={42} /> },
      { name: "MySQL", icon: <SiMysql size={42} /> },
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Tools I use for development and collaboration.",
    skills: [
      { name: "Git", icon: <FaGitAlt size={42} /> },
      { name: "GitHub", icon: <FaGithub size={42} /> },
      { name: "Visual Studio", icon: <FaCode size={42} /> },
      { name: "VS Code", icon: <VscCode size={42} /> },
    
    ],
  },
];

function TechStack() {
  return (
    <section
      id="tech"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            My Tech Stack
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Technologies, frameworks, programming languages, and tools
            I use to build modern web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
              }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px flex-1 bg-slate-800" />

                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                    {category.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="h-px flex-1 bg-slate-800" />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="group relative bg-slate-900 border border-slate-800
                    rounded-2xl p-6 min-h-[145px]
                    flex flex-col items-center justify-center gap-4
                    overflow-hidden
                    transition-all duration-300
                    hover:border-blue-500/60
                    hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)]"
                  >
                    {/* Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-gradient-to-b from-blue-500/10 to-transparent"
                    />

                    {/* Icon */}
                    <div
                      className="relative z-10 text-slate-300
                      group-hover:text-blue-400
                      transition-colors duration-300"
                    >
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <span className="relative z-10 text-sm font-semibold text-slate-300 text-center group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
        >
          <p className="text-slate-400 mb-2">
            Main Development Focus
          </p>

          <h3 className="text-2xl md:text-3xl font-bold">
            Full Stack <span className="text-blue-400">.NET</span> Development
          </h3>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Building full-stack applications using C#, ASP.NET Core,
            Entity Framework Core, SQL Server, and modern frontend technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default TechStack;