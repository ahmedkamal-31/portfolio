import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const cvUrl = `${import.meta.env.BASE_URL}Ahmed_Kamal_CV.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Simple intersection tracker for active link
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open, restore cleanly
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Reliable navigation handler that closes the drawer and smoothly scrolls with header offset
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      // 1. Immediately unlock body scroll so scrolling is not suppressed by mobile browsers
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      // 2. Close mobile drawer
      setIsOpen(false);

      const targetId = href.replace("#", "");

      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        try {
          window.history.pushState(null, "", href);
        } catch {
          // Ignore state push errors
        }
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Small delay allows the mobile drawer transition/unmount to begin so layout height is stable
      setTimeout(() => {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 64;
        const elementRect = targetElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetScrollPosition = Math.max(0, absoluteElementTop - headerHeight);

        window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth",
        });

        try {
          window.history.pushState(null, "", href);
        } catch {
          // Ignore
        }
      }, 50);
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-slate-950/50 py-3 sm:py-3.5"
            : "bg-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
            aria-label="Ahmed Kamal - Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-xs font-mono font-bold text-blue-400">
                AK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Ahmed Kamal
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 -mt-0.5">
                Junior .NET Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/ahmedkamal-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-800"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-800"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700/80 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800/80 transition-all duration-200 shadow-sm"
            >
              <FaFileDownload size={12} className="text-blue-400" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button - 44px Touch Target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] p-2.5 text-slate-300 hover:text-white active:scale-95 bg-slate-900/90 border border-slate-800 rounded-xl focus:outline-none flex items-center justify-center transition-transform"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-slate-950/98 border-b border-slate-800/90 backdrop-blur-2xl px-4 pt-3 pb-5 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between min-h-[46px] cursor-pointer active:bg-blue-600/20 ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10 border border-blue-500/20 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-900/80"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Drawer Footer with Socials & CV Download */}
              <div className="pt-3.5 mt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/ahmedkamal-31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800 active:scale-95 transition-transform"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-kamal-135b8b353/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-blue-400 bg-slate-900 rounded-xl border border-slate-800 active:scale-95 transition-transform"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>

                <a
                  href={cvUrl}
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors shadow-md shadow-blue-600/20 active:scale-95"
                >
                  <FaFileDownload size={13} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for outside tap */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              document.body.style.overflow = "";
              document.body.style.touchAction = "";
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
