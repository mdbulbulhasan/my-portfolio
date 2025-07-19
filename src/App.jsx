import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SiteTimeline from "./components/layouts/HomeLayout";
import "./index.css";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--glow-x', `${x}%`);
      document.documentElement.style.setProperty('--glow-y', `${y}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <SiteTimeline />
      <div className="background-overlay">
        <svg width="100%" height="100%">
          {[...Array(16)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i * 100) / 15}%`} y1="0%" x2={`${(i * 100) / 15}%`} y2="100%"
              stroke="#e0e7ef" strokeWidth="0.5" opacity="0.07"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0%" y1={`${(i * 100) / 9}%`} x2="100%" y2={`${(i * 100) / 9}%`}
              stroke="#e0e7ef" strokeWidth="0.5" opacity="0.07"
            />
          ))}
        </svg>
        <div className="scanlines" />
      </div>
      <div className="background-glow" />
      <div className="App poppins w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="w-full px-2 md:px-4 xl:max-w-7xl xl:mx-auto">
          <HeroSection />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
