import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from "react-icons/fa";
import { SiDotnet, SiReact } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import profile from "../assets/images/profile.webp";

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const cvUrl = `${import.meta.env.BASE_URL}Ahmed_Kamal_CV.pdf`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950"
    >
      {/* Subtle Background Glow Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-slate opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/95 border border-slate-800 text-xs text-slate-300 mb-5 sm:mb-6 backdrop-blur-sm shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-slate-300 text-[11px] sm:text-xs truncate">Available for Junior .NET Roles &amp; Internships</span>
            </motion.div>

            {/* Main Title & Role */}
            <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
              <p className="text-xs sm:text-base font-mono text-blue-400 tracking-wider uppercase mb-1.5 sm:mb-2 font-semibold">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 sm:mb-3 break-words">
                <span className="bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">
                  Ahmed Kamal
                </span>
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200 tracking-tight">
                Junior <span className="text-blue-400 font-extrabold">.NET Developer</span>
              </h2>
            </motion.div>

            {/* Accurate Value Proposition (Consistent with CV) */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-[18px] text-slate-300 leading-relaxed sm:leading-8 max-w-2xl mx-auto lg:mx-0 mb-7 sm:mb-9 font-normal"
            >
              Student at the Faculty of Computers and Information, Assiut University (entering fourth year).
              Passionate about building scalable web applications with{" "}
              <strong className="text-white font-semibold">C#, ASP.NET Core, and SQL Server</strong>,
              with basic frontend integration experience in{" "}
              <strong className="text-white font-semibold">React</strong>.
            </motion.p>

            {/* Strengthened CTAs Hierarchy */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full"
            >
              {/* Dominant Primary Action */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5 ring-1 ring-blue-400/40 min-h-[44px]"
              >
                <span>View Projects</span>
                <FaArrowRight size={13} />
              </a>

              {/* Clear Secondary Action */}
              <a
                href={cvUrl}
                download
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:-translate-y-0.5 min-h-[44px]"
              >
                <FaFileDownload size={14} className="text-blue-400" />
                <span>Download CV</span>
              </a>

              {/* Subtle Tertiary Action */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm sm:text-base transition-colors hover:underline underline-offset-4 decoration-blue-500/50 min-h-[44px]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Proof & Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80"
            >
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <a
                href="https://github.com/ahmedkamal-31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:ahmedkamal312005@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Portrait Preserved */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-6"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Radial Backdrop Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 rounded-full blur-2xl"
              />

              {/* Portrait Frame */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-blue-500/40 via-slate-800 to-slate-900 border border-blue-500/30 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={profile}
                    alt="Ahmed Kamal - Junior .NET Developer"
                    width={640}
                    height={640}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top select-none"
                  />
                </div>
              </div>

              {/* Floating Capability Badge 1: ASP.NET Core */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2.5 left-0 sm:-bottom-3 sm:-left-6 bg-slate-900/95 border border-slate-700/80 rounded-xl p-2 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <SiDotnet size={18} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">Specialized in</p>
                  <p className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">ASP.NET Core</p>
                </div>
              </motion.div>

              {/* Floating Capability Badge 2: SQL Server */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2.5 right-0 sm:-top-3 sm:-right-4 bg-slate-900/95 border border-slate-700/80 rounded-xl p-2 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <DiMsqlServer size={18} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">Building with</p>
                  <p className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">C# &amp; SQL Server</p>
                </div>
              </motion.div>

              {/* Floating Capability Badge 3: React */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="hidden sm:flex absolute top-1/2 -left-8 bg-slate-900/95 border border-slate-700/80 rounded-xl p-2.5 shadow-xl backdrop-blur-md items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <SiReact size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Supporting</p>
                  <p className="text-xs font-semibold text-white whitespace-nowrap">React (Basic)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
