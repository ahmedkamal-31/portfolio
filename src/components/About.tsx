import { motion, useReducedMotion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaCheck,
} from "react-icons/fa";

function About() {
  const shouldReduceMotion = useReducedMotion();

  const competencies = [
    "Full Stack .NET Development",
    "ASP.NET Core (MVC & Web API)",
    "C# & Entity Framework Core",
    "SQL Server & Relational Schemas",
    "ASP.NET Core Identity & Security",
    "React & Responsive Web UIs",
  ];

  const highlights = [
    {
      icon: <FaGraduationCap size={24} className="text-blue-400" />,
      title: "Education",
      subtitle: "Assiut University",
      detail:
        "Faculty of Computers and Information, Assiut University (entering fourth year, expected graduation 2027). Strong foundation in computer science and software development.",
      badge: "Entering 4th Year",
    },
    {
      icon: <FaCode size={22} className="text-cyan-400" />,
      title: "Development Focus",
      subtitle: "ASP.NET Core & C#",
      detail:
        "Specializing in full-stack web development with a strong focus on C#, ASP.NET Core MVC, ASP.NET Core Web API, Entity Framework Core, and SQL Server.",
      badge: "Primary Focus",
    },
    {
      icon: <FaRocket size={22} className="text-blue-400" />,
      title: "Hands-on Projects",
      subtitle: "Practical Applications",
      detail:
        "Building practical, real-world web applications including e-commerce platforms, vehicle rentals, booking portals, and developer analytics tools.",
      badge: "Applied Work",
    },
    {
      icon: <FaCheckCircle size={22} className="text-emerald-400" />,
      title: "Career Objective",
      subtitle: "Junior .NET Developer",
      detail:
        "Actively seeking an Internship or Junior .NET Developer opportunity to apply technical skills, contribute to real-world projects, and continue growing as a software developer.",
      badge: "Ready to Contribute",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Ahmed Kamal Mohamed"
      className="py-24 md:py-32 bg-slate-900/60 border-t border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 font-semibold">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A brief look at my background, development journey, and what I'm working towards.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Personal Journey Narrative (Faithful to CV) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold">
              My Journey
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Building ideas into{" "}
              <span className="text-blue-400">real applications</span>.
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-[17px]">
              I'm <strong className="text-white font-semibold">Ahmed Kamal Mohamed</strong>, a student at the
              Faculty of Computers and Information, Assiut University, currently entering my fourth year.
            </p>

            <p className="text-slate-300 leading-relaxed text-base sm:text-[17px]">
              My main focus is <strong className="text-white font-semibold">Full Stack .NET development</strong>. I have hands-on experience developing web applications using C#, ASP.NET Core MVC, Entity Framework Core, SQL Server, and ASP.NET Core Identity. Recently, I expanded into RESTful API development through DevScope, a full-stack GitHub analytics platform built with ASP.NET Core Web API and React.
            </p>

            <p className="text-slate-300 leading-relaxed text-base sm:text-[17px]">
              I am seeking an <strong className="text-white font-semibold">Internship or Junior .NET Developer opportunity</strong> to apply my technical skills, contribute to real-world projects, and continue growing as a software developer alongside experienced engineering teams.
            </p>

            {/* Core Focus Areas Checklist */}
            <div className="pt-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5 font-semibold">
                Core Competencies
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {competencies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-950/70 border border-slate-800/90 px-3.5 py-2.5 rounded-lg shadow-sm"
                  >
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">
                      <FaCheck />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Visual Structured Highlight Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {highlights.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group relative bg-slate-950 border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs font-mono text-blue-400/90 mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
