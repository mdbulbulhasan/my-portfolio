import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Programming Hero",
    role: "MERN Stack Learner",
    duration: "Jan 2025 - Present",
    details: [
      "Learning advanced React, Node.js, and MongoDB.",
      "Building full-stack projects with real-world use cases.",
      "Practicing daily modules with strict deadlines to build consistency.",
    ],
  },
  {
    company: "Justcode",
    role: "Frontend Intern",
    duration: "July 2024 - Sep 2024",
    details: [
      "Developed responsive landing pages using HTML, CSS, JS.",
      "Worked closely with UI/UX designers to implement pixel-perfect designs.",
      "Improved web accessibility and performance optimization skills.",
    ],
  },
  {
    company: "CodeAlpha",
    role: "Frontend Developer (Volunteer)",
    duration: "Mar 2024 - Jun 2024",
    details: [
      "Built and maintained frontend features for client projects.",
      "Integrated REST APIs with dynamic UI components.",
      "Collaborated in an agile team environment using GitHub.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-base-200 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-base-100 rounded-lg p-6 shadow">
              <div className="flex items-center space-x-4 mb-2">
                <FaBriefcase className="text-primary" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.company} | {exp.duration}
                  </p>
                </div>
              </div>
              <ul className="list-disc ml-8 text-lg space-y-1">
                {exp.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
