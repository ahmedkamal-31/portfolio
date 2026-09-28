import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function GitHub() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="github"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Open Source & Activity
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            GitHub Activity
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-7">
            A look at my recent coding activity and contributions on GitHub.
          </p>

        </div>

        {/* GitHub Card */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-950 border border-slate-800
          rounded-2xl p-6 md:p-10
          shadow-xl"
        >

          {/* Profile */}
          <div className="flex flex-col md:flex-row
          items-center justify-between gap-6 mb-10">

            <div className="flex items-center gap-5">

              <img
                src="https://github.com/ahmedkamal-31.png"
                alt="Ahmed Kamal GitHub"
                className="w-20 h-20 rounded-full
                border-2 border-blue-500"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Ahmed Kamal
                </h3>

                <p className="text-slate-400">
                  @ahmedkamal-31
                </p>
              </div>

            </div>

            <a
              href="https://github.com/ahmedkamal-31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2
              bg-blue-600 hover:bg-blue-700
              px-5 py-3 rounded-lg
              font-medium
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaGithub size={20} />
              Visit GitHub
            </a>

          </div>

          {/* Contribution Graph */}
          <div className="overflow-x-auto pb-3">

            <div className="min-w-[750px] flex justify-center">

              <img
                src="https://ghchart.rshah.org/ahmedkamal-31"
                alt="Ahmed Kamal GitHub Contributions"
                className="max-w-full rounded-lg"
              />

            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row
          items-center justify-between
          gap-4 mt-8 pt-6
          border-t border-slate-800">

            <p className="text-slate-500 text-sm">
              Check out my repositories and development journey.
            </p>

            <a
              href="https://github.com/ahmedkamal-31?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300
              text-sm font-medium transition"
            >
              View all repositories →
            </a>

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default GitHub;