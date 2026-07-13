import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }} className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

        <h1 className="text-2xl font-bold text-blue-400">
          Ahmed Kamal
        </h1>

        <ul className="flex gap-8">

          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </motion.nav>
  );
}

export default Navbar;