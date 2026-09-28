import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            A brief look at my background, development journey, and
            what I'm working towards.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Building ideas into{" "}
              <span className="text-blue-400">
                real applications.
              </span>
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              I'm Ahmed Kamal, an Information Systems student at the
              Faculty of Computers and Information, currently entering
              my fourth year.
            </p>

            <p className="text-slate-400 leading-8 mb-6">
              My main focus is Full Stack .NET development. I enjoy
              building complete web applications, working with
              ASP.NET Core, C#, databases, authentication, and
              application logic.
            </p>

            <p className="text-slate-400 leading-8">
              I'm continuously improving my development skills through
              hands-on projects and learning new technologies while
              working towards becoming a professional Full Stack Developer.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 text-slate-300">
                <FaCheckCircle className="text-blue-400" />
                Full Stack Development
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <FaCheckCircle className="text-blue-400" />
                ASP.NET Core
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <FaCheckCircle className="text-blue-400" />
                SQL Server & MySQL
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <FaCheckCircle className="text-blue-400" />
                Real-world Projects
              </div>

            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Education */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700
              rounded-2xl p-7 hover:border-blue-500/50
              transition-all duration-300"
            >
              <FaGraduationCap
                className="text-blue-400 mb-5"
                size={32}
              />

              <h3 className="text-xl font-bold mb-3">
                Education
              </h3>

              <p className="text-slate-400 leading-7">
                Faculty of Computers and Information
              </p>

              <p className="text-slate-500 mt-2">
                Information Systems
              </p>

              <p className="text-blue-400 text-sm mt-4">
                Entering 4th Year
              </p>
            </motion.div>

            {/* Development */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700
              rounded-2xl p-7 hover:border-blue-500/50
              transition-all duration-300"
            >
              <FaCode
                className="text-blue-400 mb-5"
                size={30}
              />

              <h3 className="text-xl font-bold mb-3">
                Development
              </h3>

              <p className="text-slate-400 leading-7">
                Full Stack web development with a strong focus on
                ASP.NET Core, C#, SQL Server, and modern web technologies.
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700
              rounded-2xl p-7 hover:border-blue-500/50
              transition-all duration-300"
            >
              <FaRocket
                className="text-blue-400 mb-5"
                size={30}
              />

              <h3 className="text-xl font-bold mb-3">
                Hands-on Projects
              </h3>

              <p className="text-slate-400 leading-7">
                Building real-world applications including e-commerce,
                booking systems, and business platforms.
              </p>
            </motion.div>

            {/* Career */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700
              rounded-2xl p-7 hover:border-blue-500/50
              transition-all duration-300"
            >
              <FaCheckCircle
                className="text-blue-400 mb-5"
                size={30}
              />

              <h3 className="text-xl font-bold mb-3">
                Career Goal
              </h3>

              <p className="text-slate-400 leading-7">
                Looking for internship and junior opportunities to
                gain professional experience and grow as a Full Stack
                .NET Developer.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;