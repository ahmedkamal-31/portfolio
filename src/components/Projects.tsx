import { projects } from "../data/projects";
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.section initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
     id="projects" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <motion.div
whileHover={{
    scale:1.05,
    y:-8
}}
transition={{
    duration:.3
}}
className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"



              key={project.title}
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>

              <div className="mt-5">

    <h4 className="font-semibold mb-3">
        Key Features
    </h4>

    <ul className="space-y-2">

        {project.features.map((feature) => (

            <li
                key={feature}
                className="text-slate-300"
            >
                ✔ {feature}
            </li>

        ))}

    </ul>

</div>

               <div className="flex flex-wrap gap-2 mt-6">

    {project.technologies.map((tech)=>(

        <span
            key={tech}
            className="bg-blue-600/20 text-blue-400 px-3 py-2 rounded-full"
        >
            {tech}
        </span>

    ))}

</div>

               <div className="flex gap-4 mt-8">

<a
href={project.github}

target="_blank"
className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg "

>

GitHub

</a>

<a
href={project.demo}
target="_blank"
className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
>

Live Demo

</a>

</div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;

 800