import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";


const skills = [
  { icon: <FaHtml5 />, name: "HTML", desc: "HTML: Markup Master" },
  { icon: <FaCss3Alt />, name: "CSS", desc: "CSS: Style Sorcerer" },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    desc: "Tailwind: Utility Pro",
  },
  { icon: <FaJsSquare />, name: "JavaScript", desc: "JavaScript: Code Wizard" },
  { icon: <FaReact />, name: "ReactJS", desc: "React: UI Alchemist" },
  { icon: <FaNodeJs />, name: "NodeJS", desc: "Node.js: Backend Builder" },
  { icon: <SiExpress />, name: "ExpressJS", desc: "Express: API Architect" },
  { icon: <SiMongodb />, name: "MongoDB", desc: "MongoDB: Data Dynamo" },
  { icon: <SiMysql />, name: "MySQL", desc: "MySQL: Query Quickdraw" },
  { icon: <FaGithub />, name: "GitHub", desc: "GitHub: Version Virtuoso" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[40vh] px-2 md:px-4 py-8 md:py-16 flex flex-col items-center justify-center w-full"
    >
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cyan-200">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group flex flex-col items-center justify-center rounded-xl p-3 md:p-6 glassmorphism-card text-cyan-200 hover:text-cyan-100 transition shadow-lg relative css-skill-animate"
              title={skill.name}
            >
              <span className="text-2xl md:text-4xl mb-2 drop-shadow">
                {skill.icon}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-wide text-center relative">
                {skill.name}
                <span className="card-underline" />
              </span>
              {/* Tooltip */}
              <span className="card-tooltip">{skill.desc}</span>
            </div>
          ))}
        </div>
      {/* CSS for optimized hover/active effects */}
      <style>{`
        .css-skill-animate {
          transition: transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1), color 0.18s;
        }
        .css-skill-animate:hover, .css-skill-animate:focus-visible {
          transform: scale(1.07);
          box-shadow: 0 0 24px 6px #67e8f9, 0 0 8px 2px #22d3ee;
          color: #a5f3fc;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Skills;
