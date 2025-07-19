import React, { useRef, useEffect, useState } from "react";
import {
  FaDownload,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import Typewriter from "typewriter-effect";

const skills = [
  { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaReact, name: "React", color: "text-cyan-300" },
  { icon: FaNodeJs, name: "NodeJS", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-gray-200" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-300" },
  { icon: FaGithub, name: "GitHub", color: "text-gray-300" },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlowPos({ x, y });
        rafId = null;
      });
    };

    const section = sectionRef.current;
    section && section.addEventListener("mousemove", handleMouseMove);
    return () => {
      section && section.removeEventListener("mousemove", handleMouseMove);
      rafId && cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col md:flex-row justify-center items-center min-h-[80vh] py-8 px-2 md:px-6 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(103,232,249,0.1) 0%, rgba(34,211,238,0.08) 30%, transparent 70%)`,
          transition: "background 0.2s",
        }}
      />

      {/* Left Side */}
      <div className="md:w-1/2 p-6 flex justify-center z-10">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-xl p-6 md:p-10 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-200">
            Hi, I'm <span className="text-cyan-400">MD Bulbul Hasan</span>
          </h1>

          {/* Custom Typewriter with cool effects */}
          <div className="relative inline-block text-cyan-300 font-mono text-xl md:text-xl tracking-wide select-none">
            <Typewriter
              options={{
                strings: ["Frontend Based | MERN Stack Developer"],
                autoStart: true,
                loop: true,
                cursor: "", // Hide default cursor
                delay: 80,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                // Nothing extra for now
              }}
            />
            {/* Custom blinking futuristic cursor */}
            <span className="absolute -right-2 top-0 h-full w-1 bg-cyan-400 rounded animate-flicker-cursor"></span>
          </div>

          <p className="text-lg text-gray-200">
            Building performant, scalable, and elegant web applications to turn
            ideas into impactful digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1nlC5IwyiGZqgLNaiKmSvz3WXDelxNu7z/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              <FaEnvelope /> Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Rotating Skills Circle */}
      <div className="md:w-1/2 w-full p-6 flex items-center justify-center z-10 relative">
        <div className="relative w-[320px] h-[320px]">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              animationDuration: "60s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {skills.map((skill, i, arr) => {
              const angle = (2 * Math.PI * i) / arr.length;
              const radius = 120;
              const x = 160 + radius * Math.cos(angle) - 28;
              const y = 160 + radius * Math.sin(angle) - 28;
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`absolute flex items-center justify-center bg-gray-700 bg-opacity-40 rounded-full border border-cyan-400/30 shadow-lg ${skill.color}`}
                  style={{
                    left: x,
                    top: y,
                    width: "56px",
                    height: "56px",
                    fontSize: "1.5rem",
                  }}
                  title={skill.name}
                >
                  <Icon />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom flicker cursor animation */}
      <style jsx>{`
        @keyframes flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            opacity: 1;
            box-shadow: 0 0 4px #22d3ee, 0 0 12px #22d3ee, 0 0 18px #22d3ee,
              0 0 24px #67e8f9;
          }
          20%,
          22%,
          24%,
          55% {
            opacity: 0.3;
            box-shadow: none;
          }
        }
        .animate-flicker-cursor {
          animation: flicker 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
