import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/images/profile.png";
import { motion } from "framer-motion";

function Hero() {


  return (
    
    <motion.section initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
     className="min-h-screen py-40 bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold mb-4">
          Ahmed Kamal
        </h1>

        <h2 className="text-3xl text-slate-300 mb-6">
          Full Stack .NET Developer
        </h2>

        <p className="max-w-2xl text-slate-400 leading-8 text-lg">
        Information Systems student specializing in Full Stack
         .NET development with React, ASP.NET Core and SQL Server.
          Passionate about building scalable and user-friendly web applications.
        </p>
<div className="relative">
  <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

  <img
    src={profile}
    alt="Ahmed Kamal"
    className="relative w-96 h-96 rounded-full object-cover border-4 border-blue-500"
  />
</div>

        <div className="flex gap-4 mt-8">
<a
  href="/Ahmed_Kamal_CV.pdf"
  download
  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition bg-blue-600 "
>
  Download CV
</a>

        
          <a
    href="#projects"
    className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
    View Projects
</a>

          <a
    href="#contact"
    className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
    Contact Me
</a>

        </div>

        <div className="flex gap-6 mt-10">
        <a href="https://github.com/ahmedkamal-31" target="_blank" rel="noopener noreferrer">
          <FaGithub size={36} className="hover:text-blue-400 hover:scale-110 transition duration-300" />
        </a>

        <a href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={36} className="hover:text-blue-400 hover:scale-110 transition duration-300"/>
        </a>
<a href="mailto:ahmedkamal312005@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={36} className="hover:text-blue-400 hover:scale-110 transition duration-300" />
        </a>

        </div>

      </div>
    </motion.section>
  );
  



  
}

export default Hero;