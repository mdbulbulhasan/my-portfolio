import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="py-4 md:py-6 px-2 md:px-8 text-center text-xs md:text-sm glassmorphism-card mt-12 rounded-2xl w-full relative shadow-lg border border-cyan-400/20 overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
    >
      {/* Full-width animated accent line */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse" style={{zIndex:2}} />
      <div className="flex flex-col items-center gap-2 z-10 relative w-full">
        <FaCode className="text-cyan-300 animate-soft-pulse text-xl md:text-2xl mb-1" />
        <p className="text-cyan-100 text-xs md:text-sm">
          Created by{' '}
          <a
            href="https://www.fiverr.com/bulbul_web_dev?up_rollout=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold shadow hover:from-blue-500 hover:to-cyan-400 transition"
          >
            @bulbul_web_dev
          </a>
          {' '} &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
