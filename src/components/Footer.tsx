import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-slate-400 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Description */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold text-blue-400"
            >
              Ahmed Kamal
            </a>

            <p className="mt-3 text-sm text-slate-500 max-w-md">
              Full Stack .NET Developer focused on building modern,
              scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/ahmedkamal-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="mailto:ahmedkamal312005@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              <FaArrowUp size={16} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

          <p>
            © {currentYear} Ahmed Kamal. All Rights Reserved.
          </p>

          <p className="text-slate-600">
            Built with React & ASP.NET Core
          </p>

        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;