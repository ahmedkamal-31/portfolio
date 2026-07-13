import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend ",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["C#", "ASP.NET Core", "Entity Framework Core", "REST API"],
  },
  {
    title: "Database",
    items: ["SQL Server", "LINQ"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
  },
];

function Skills() {
  return (
    <motion.section initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
     id="skills" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-slate-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;