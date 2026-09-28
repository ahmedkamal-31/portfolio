import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import profile from "../assets/images/profile.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-28 sm:py-32 lg:py-40 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-blue-400 text-base sm:text-lg font-medium mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              Ahmed Kamal
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Full Stack{" "}
              <span className="text-blue-400">.NET</span> Developer
            </h2>

            <p className="max-w-2xl mx-auto lg:mx-0 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8 mb-8">
              Information Systems student specializing in Full Stack .NET
              development with ASP.NET Core, SQL Server, and modern web
              technologies. Passionate about building scalable and
              user-friendly web applications.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">

              <a
                href="#projects"
                className="bg-blue-600 px-6 sm:px-7 py-3 rounded-lg font-medium
                hover:bg-blue-700 hover:-translate-y-1
                transition-all duration-300
                shadow-lg shadow-blue-600/20
                text-center"
              >
                View Projects
              </a>

              <a
                href="/Ahmed_Kamal_CV.pdf"
                download
                className="border border-slate-600 px-6 sm:px-7 py-3 rounded-lg font-medium
                hover:bg-white hover:text-slate-950
                hover:-translate-y-1
                transition-all duration-300
                text-center"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="border border-slate-600 px-6 sm:px-7 py-3 rounded-lg font-medium
                hover:border-blue-400 hover:text-blue-400
                transition-all duration-300
                text-center"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}

            <div className="flex justify-center lg:justify-start gap-6 mt-10">

              <a
                href="https://github.com/ahmedkamal-31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="mailto:ahmedkamal312005@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-red-400 hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope size={26} />
              </a>

            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Outer Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl scale-110" />

              {/* Image Border */}

              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700">

                <div className="bg-slate-950 p-1.5 sm:p-2 rounded-full">

                  <img
                    src={profile}
                    alt="Ahmed Kamal"
                    className="
                    w-56 h-56
                    sm:w-72 sm:h-72
                    md:w-80 md:h-80
                    lg:w-96 lg:h-96
                    rounded-full object-cover
                    "
                  />

                </div>

              </div>

              {/* Floating Badge - ASP.NET */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                absolute
                -bottom-5
                left-0
                sm:-left-6
                bg-slate-900
                border border-slate-700
                px-4 sm:px-5
                py-2.5 sm:py-3
                rounded-xl
                shadow-xl
                "
              >
                <p className="text-xs sm:text-sm text-slate-400">
                  Specialized in
                </p>

                <p className="text-sm sm:text-base font-semibold text-blue-400">
                  ASP.NET Core
                </p>
              </motion.div>

              {/* Floating Badge - C# */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="
                absolute
                -top-5
                right-0
                sm:-right-4
                bg-slate-900
                border border-slate-700
                px-4 sm:px-5
                py-2.5 sm:py-3
                rounded-xl
                shadow-xl
                "
              >
                <p className="text-xs sm:text-sm text-slate-400">
                  Building with
                </p>

                <p className="text-sm sm:text-base font-semibold text-cyan-400">
                  C# & SQL Server
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          hidden sm:block
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          text-slate-500
          hover:text-blue-400
          transition
          "
          aria-label="Scroll to About"
        >
          <FaArrowDown size={20} />
        </motion.a>

      </div>
    </section>
  );
}

export default Hero;