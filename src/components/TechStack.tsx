import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaJava,
  FaPython,

} from "react-icons/fa";

import {
  SiTypescript,
  SiDotnet,
  SiPostman,
  SiVercel,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";
import { VscCode } from "react-icons/vsc";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={45} /> },
        { name: "CSS3", icon: <FaCss3Alt size={45} /> },
       
        { name: "TypeScript", icon: <SiTypescript size={45} /> },
        { name: "React", icon: <FaReact size={45} /> },
      ],
    },

    {
      title: "Programming Languages",
      skills: [
        { name: "C#", icon: <FaCode size={45} /> },
        { name: "Java", icon: <FaJava size={45} /> },
        { name: "Python", icon: <FaPython size={45} /> },
        { name: "C++", icon: <SiCplusplus size={45} /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "ASP.NET Core", icon: <SiDotnet size={45} /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "SQL Server", icon: <DiMsqlServer size={45} /> },
        { name: "MySQL", icon: <SiMysql size={45} /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt size={45} /> },
        { name: "GitHub", icon: <FaGithub size={45} /> },
        { name: "VS Code", icon: <VscCode size={45} /> },
        { name: "Postman", icon: <SiPostman size={45} /> },
        { name: "Vercel", icon: <SiVercel size={45} /> },
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tech Stack
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Technologies and tools I use to build software and web applications.
        </p>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-slate-800 rounded-xl p-6 flex flex-col items-center gap-4
                    transition-all duration-300 hover:-translate-y-2
                    hover:border hover:border-blue-500 hover:shadow-xl"
                  >
                    {skill.icon}

                    <span className="font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;