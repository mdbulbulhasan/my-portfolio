import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/mdbulbulhasan", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/mdbulbulhasan", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg px-2 md:px-4 xl:px-8 min-w-0 overflow-x-auto">
      <div className="max-w-[95%] mx-auto flex justify-between items-center h-16 min-w-0 overflow-x-auto px-3">
        {/* Animated Logo */}
        <motion.div
          className="flex items-center h-16 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.07, filter: "drop-shadow(0 0 16px #67e8f9)" }}
          tabIndex={0}
          aria-label="Home - MBH Portfolio Logo"
          role="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg
            width="54"
            height="44"
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-soft-glow"
            style={{ display: 'block' }}
            aria-hidden="true"
          >
            {/* Coding-related logo: code brackets, stylized M, and blinking cursor */}
            <rect x="2" y="2" width="50" height="40" rx="12" fill="rgba(17,24,39,0.7)" stroke="#67e8f9" strokeWidth="2.2" />
            {/* Left code bracket */}
            <path d="M12 14 Q8 22 12 30" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            {/* Right code bracket */}
            <path d="M42 14 Q46 22 42 30" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            {/* Stylized M */}
            <path d="M18 30V16L27 28L36 16V30" stroke="#67e8f9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Blinking code cursor/underscore */}
            <rect id="code-cursor" x="39" y="32" width="7" height="3" rx="1.5" fill="#67e8f9">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
            </rect>
          </svg>
          <span className="ml-2 text-cyan-200 font-bold text-lg tracking-widest poppins" style={{letterSpacing:'0.12em'}}>MBH</span>
        </motion.div>
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {[
            "home",
            "about",
            "skills",
            "education",
            "projects",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="nav-active-link"
              className="relative cursor-pointer nav-link px-1"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-cyan-300 transition"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
