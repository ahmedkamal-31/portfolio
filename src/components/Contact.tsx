import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const emailAddress = "ahmedkamal312005@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactMethods = [
    {
      title: "Direct Email",
      value: emailAddress,
      description: "Direct inbox for junior developer roles, internships & inquiries",
      icon: <FaEnvelope size={24} className="text-blue-400" />,
      actionText: "Send Email",
      href: `mailto:${emailAddress}`,
      primary: true,
    },
    {
      title: "LinkedIn",
      value: "ahmed-kamal",
      description: "Professional networking, background & recommendations",
      icon: <FaLinkedin size={24} className="text-cyan-400" />,
      actionText: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-kamal-135b8b353/",
      primary: false,
    },
    {
      title: "GitHub",
      value: "ahmedkamal-31",
      description: "Explore my source code, project commits & repositories",
      icon: <FaGithub size={24} className="text-slate-300" />,
      actionText: "Explore GitHub",
      href: "https://github.com/ahmedkamal-31",
      primary: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-24 md:py-32 bg-slate-900/60 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 font-semibold">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I'm always open to discussing new opportunities, full-stack projects, internships, or collaborations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className={`bg-slate-950 border rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 ${
                method.primary
                  ? "border-blue-500/60 shadow-2xl shadow-blue-950/30 ring-1 ring-blue-500/20"
                  : "border-slate-800/90 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-xs font-mono text-blue-400 mb-3 font-medium">
                  {method.value}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {method.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
                <a
                  href={method.href}
                  target={method.title === "Direct Email" ? undefined : "_blank"}
                  rel={method.title === "Direct Email" ? undefined : "noopener noreferrer"}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    method.primary
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <FaPaperPlane size={11} />
                  <span>{method.actionText}</span>
                </a>

                {method.primary && (
                  <button
                    onClick={handleCopyEmail}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <FaCheck size={11} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy size={11} />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= PROMINENT FINAL CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 border-2 border-blue-500/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl shadow-blue-950/40"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Actively Seeking Opportunities</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Looking for a Dedicated <span className="text-gradient-primary">Junior .NET Developer?</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              I am ready to contribute solid backend and full-stack engineering skills to your team. Whether you have an internship opening, junior position, or want to discuss a project, let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${emailAddress}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5 ring-1 ring-blue-400/40"
              >
                <FaPaperPlane size={14} />
                <span>Send Me an Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={13} />
                    <span className="hidden sm:inline">Copy: {emailAddress}</span>
                    <span className="sm:hidden">Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs font-mono text-slate-400 mt-6">
              Based in Egypt · Open to on-site, hybrid, and remote roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
