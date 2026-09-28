import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur-lg border-b border-slate-800/60 text-white z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-blue-400"
        >
          Ahmed Kamal
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}

                <span
                  className="absolute -bottom-2 left-0 w-0 h-0.5
                  bg-blue-500 group-hover:w-full
                  transition-all duration-300"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-slate-300 hover:text-blue-400 transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden border-t border-slate-800/50"
      >
        <ul className="px-6 py-5 space-y-4 bg-slate-950/95">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;