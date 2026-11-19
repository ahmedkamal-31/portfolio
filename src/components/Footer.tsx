import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 64;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, elementPosition - headerHeight),
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-2 text-xl font-bold text-white tracking-tight group cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-mono text-xs">
                AK
              </span>
              <span>Ahmed Kamal</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md">
              Junior .NET Developer specializing in ASP.NET Core, C#, SQL Server, and modern React.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer py-1.5 px-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ahmedkamal-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:ahmedkamal312005@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            >
              <FaEnvelope size={16} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Legal / Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-300">
          <p>© {CURRENT_YEAR} Ahmed Kamal. All rights reserved.</p>
          <p className="text-slate-400">
            Built with React & ASP.NET Core
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
