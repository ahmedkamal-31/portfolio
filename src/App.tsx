import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <GitHub />
        <Contact />
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
