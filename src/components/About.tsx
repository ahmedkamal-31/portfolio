import { motion } from "framer-motion";

function About() {
  return (
    <motion.section initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    
    id="about" className="bg-slate-900 text-white py-24 px-6"
    
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              🎓 Education
            </h3>
            <p>
              Information Systems Student at Faculty of Computers and Information.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              💻 Development
            </h3>
            <p>
              Passionate about building scalable Full Stack applications using React and ASP.NET Core.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              🎯 Career Goal
            </h3>
            <p>
              Looking for internship and junior opportunities to grow as a Full Stack Developer.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;