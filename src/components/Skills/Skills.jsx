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
  { icon: <FaHtml5 className="text-orange-600" size={40} />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600" size={40} />, name: "CSS" },
  {
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaJsSquare className="text-yellow-400" size={40} />,
    name: "JavaScript",
  },
  { icon: <FaReact className="text-cyan-400" size={40} />, name: "ReactJS" },
  { icon: <FaNodeJs className="text-green-600" size={40} />, name: "NodeJS" },
  {
    icon: <SiExpress className="text-gray-500" size={40} />,
    name: "ExpressJS",
  },
  { icon: <SiMongodb className="text-green-700" size={40} />, name: "MongoDB" },
  { icon: <SiMysql className="text-blue-700" size={40} />, name: "MySQL" },
  {
    icon: <FaGithub className="text-gray-800 dark:text-white" size={40} />,
    name: "GitHub",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-base-100 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-base-200 rounded-lg p-4 shadow hover:scale-105 transition"
            >
              {skill.icon}
              <h3 className="mt-2 text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
