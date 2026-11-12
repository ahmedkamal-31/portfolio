import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <GitHub />
        <Contact />
      </main>

      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;