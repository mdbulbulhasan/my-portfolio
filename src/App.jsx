import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css"

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="App poppins">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="max-w-[85%] mx-auto">
        <HeroSection />
        <About></About>
        <Skills></Skills>
        {/* <Experience></Experience> */}
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
