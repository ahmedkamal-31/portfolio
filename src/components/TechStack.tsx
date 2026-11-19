import { JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaJs,
  FaMicrosoft,
  FaUserShield,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiMysql,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp, TbBrandVisualStudio, TbApi, TbApiApp, TbSql } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

interface SkillItem {
  name: string;
  icon: JSX.Element;
  color: string;
  note?: string;
}

interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  isPrimary?: boolean;
  skills: SkillItem[];
}

// 4 Core .NET Pillars with Strongest Visual Emphasis
const corePillars = [
  {
    name: "C#",
    tagline: "Primary Language",
    description: "OOP, modern C# features, LINQ, and backend business logic.",
    icon: <TbBrandCSharp size={44} />,
    color: "text-purple-400 group-hover:text-purple-300",
    border: "border-purple-500/40 group-hover:border-purple-500/70",
    glow: "from-purple-950/30 to-slate-900",
  },
  {
    name: "ASP.NET Core",
    tagline: "Web Framework",
    description: "Web API & MVC architectures, middleware, Identity, and routing.",
    icon: <SiDotnet size={44} />,
    color: "text-blue-400 group-hover:text-blue-300",
    border: "border-blue-500/40 group-hover:border-blue-500/70",
    glow: "from-blue-950/30 to-slate-900",
  },
  {
    name: "Entity Framework Core",
    tagline: "ORM & Data Access",
    description: "Code-First migrations, DbContext, LINQ queries, and relational mapping.",
    icon: <FaMicrosoft size={38} />,
    color: "text-cyan-400 group-hover:text-cyan-300",
    border: "border-cyan-500/40 group-hover:border-cyan-500/70",
    glow: "from-cyan-950/30 to-slate-900",
  },
  {
    name: "SQL Server",
    tagline: "Relational Database",
    description: "Relational database schema design, queries, and constraints.",
    icon: <DiMsqlServer size={44} />,
    color: "text-red-400 group-hover:text-red-300",
    border: "border-red-500/40 group-hover:border-red-500/70",
    glow: "from-red-950/30 to-slate-900",
  },
];

const categories: SkillCategory[] = [
  {
    title: "Backend & .NET",
    badge: "Core Skills",
    description: "Primary engineering focus: backend architecture, frameworks, authentication, and RESTful APIs.",
    isPrimary: true,
    skills: [
      { name: "C#", icon: <TbBrandCSharp size={32} />, color: "group-hover:text-purple-400 group-hover:border-purple-500/40" },
      { name: "ASP.NET Core MVC", icon: <SiDotnet size={32} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
      { name: "ASP.NET Core Web API", icon: <TbApiApp size={32} />, color: "group-hover:text-emerald-400 group-hover:border-emerald-500/40" },
      { name: "Entity Framework Core", icon: <FaMicrosoft size={30} />, color: "group-hover:text-cyan-400 group-hover:border-cyan-500/40" },
      { name: "ASP.NET Core Identity", icon: <FaUserShield size={30} />, color: "group-hover:text-amber-400 group-hover:border-amber-500/40" },
      { name: "LINQ", icon: <TbSql size={32} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
      { name: "REST APIs", icon: <TbApi size={32} />, color: "group-hover:text-emerald-400 group-hover:border-emerald-500/40" },
    ],
  },
  {
    title: "Databases",
    badge: "Databases",
    description: "Relational database schema design, query development, and structured data persistence.",
    skills: [
      { name: "SQL Server", icon: <DiMsqlServer size={34} />, color: "group-hover:text-red-400 group-hover:border-red-500/40" },
      { name: "MySQL", icon: <SiMysql size={32} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
    ],
  },
  {
    title: "Frontend",
    badge: "Supporting Skills",
    description: "Supporting web technologies used for basic client-side integration with backend services.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={32} />, color: "group-hover:text-orange-400 group-hover:border-orange-500/40" },
      { name: "CSS3", icon: <FaCss3Alt size={32} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
      { name: "JavaScript", icon: <FaJs size={32} />, color: "group-hover:text-yellow-400 group-hover:border-yellow-500/40" },
      { name: "React", icon: <FaReact size={32} />, color: "group-hover:text-cyan-400 group-hover:border-cyan-500/40", note: "Basic" },
      { name: "TypeScript", icon: <SiTypescript size={30} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40", note: "Basic" },
    ],
  },
  {
    title: "Programming Languages",
    badge: "Languages",
    description: "Programming languages studied and applied in computer science coursework and problem-solving.",
    skills: [
      { name: "C++", icon: <SiCplusplus size={30} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
      { name: "Python", icon: <FaPython size={30} />, color: "group-hover:text-yellow-400 group-hover:border-yellow-500/40" },
      { name: "Java", icon: <FaJava size={30} />, color: "group-hover:text-orange-400 group-hover:border-orange-500/40" },
    ],
  },
  {
    title: "Tools",
    badge: "Tools & Workflow",
    description: "Development environments, version control platforms, and API testing utilities.",
    skills: [
      { name: "Git", icon: <FaGitAlt size={32} />, color: "group-hover:text-orange-400 group-hover:border-orange-500/40" },
      { name: "GitHub", icon: <FaGithub size={32} />, color: "group-hover:text-white group-hover:border-slate-500" },
      { name: "Visual Studio", icon: <TbBrandVisualStudio size={32} />, color: "group-hover:text-purple-400 group-hover:border-purple-500/40" },
      { name: "VS Code", icon: <VscCode size={30} />, color: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
      { name: "Postman", icon: <SiPostman size={30} />, color: "group-hover:text-orange-400 group-hover:border-orange-500/40" },
    ],
  },
];

function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech"
      aria-label="Technical Skills and Stack"
      className="py-24 md:py-32 bg-slate-900/60 border-t border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 font-semibold">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technologies, frameworks, programming languages, and tools I use to build modern web applications.
          </p>
        </div>

        {/* ================= CORE .NET PILLARS (STRONGEST EMPHASIS) ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Core .NET Pillars
            </h3>
            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
              Primary Focus
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className={`group relative bg-gradient-to-b ${pillar.glow} border ${pillar.border} rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${pillar.color} transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}>
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {pillar.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CATEGORIES STACK ================= */}
        <div className="space-y-10 sm:space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                category.isPrimary
                  ? "bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30 border-2 border-blue-500/40 shadow-xl shadow-blue-950/20 ring-1 ring-blue-500/20"
                  : "bg-slate-950/70 border border-slate-800/80 shadow-lg shadow-black/20"
              }`}
            >
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h4>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        category.isPrimary
                          ? "bg-blue-500/15 text-blue-400 border-blue-500/30 font-semibold"
                          : "bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    aria-label={skill.note ? `${skill.name} (${skill.note})` : skill.name}
                    className={`group bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-slate-850 hover:shadow-lg ${skill.color}`}
                  >
                    <div className="text-slate-400 transition-colors duration-200 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[10px] font-mono text-blue-400/90 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 font-medium">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/30 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 font-semibold">
              Main Development Focus
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
              Full Stack <span className="text-blue-400">.NET</span> Development
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Building full-stack web applications using C#, ASP.NET Core, Entity Framework Core, SQL Server, and modern web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
