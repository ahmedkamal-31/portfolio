import {FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-slate-400 mb-10">
          Feel free to contact me for internships,
          freelance work or collaborations.
        </p>

        <div className="flex justify-center gap-8 text-3xl">

          <a href="https://github.com/ahmedkamal-31">

            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/">
          
            <FaLinkedin />
          </a>

          <a href="mailto:ahmedkamal312005@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>
    </motion.section>
  );
}

export default Contact;