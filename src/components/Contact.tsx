import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const contactLinks = [
    {
      title: "GitHub",
      description: "Check out my projects and code",
      icon: <FaGithub size={30} />,
      link: "https://github.com/ahmedkamal-31",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/ahmed-kamal-135b8b353/",
    },
    {
      title: "Email",
      description: "Send me a message",
      icon: <FaEnvelope size={30} />,
      link: "mailto:ahmedkamal312005@gmail.com",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Contact Me
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-7">
            I'm always open to discussing new opportunities, freelance
            projects, internships, or collaborations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target={contact.title === "Email" ? undefined : "_blank"}
              rel={
                contact.title === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {contact.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {contact.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 mb-4">
            Have a project in mind?
          </p>

          <a
            href="mailto:ahmedkamal312005@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-500/20"
          >
            <FaEnvelope />
            Send Me an Email
          </a>
        </div>

      </div>
    </motion.section>
  );
}

export default Contact;