import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import GitHub from "./components/GitHub";
//import TechStack from "./components/TechStack";



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
      <Hero />
      <About />
      
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;