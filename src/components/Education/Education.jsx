import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "BSc in Information & Communication Engineering",
    institution:
      "Bangladesh Army University of Engineering & Technology (BAUET)",
    duration: "Mar 2019 - Sep 2023",
    achievements: [
      "CGPA: 3.25 out of 4.00",
      "Completed final year thesis on Alzheimer's Disease detection using transfer learning with EfficientNetB0 CNN model.",
      "Active member of Programming & Robotics Club.",
    ],
  },
];


const Education = () => {
  return (
    <section id="education" className="bg-base-100 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-base-200 rounded-lg p-6 shadow">
              <div className="flex items-center space-x-4 mb-2">
                <FaGraduationCap className="text-primary" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {edu.institution} | {edu.duration}
                  </p>
                </div>
              </div>
              <ul className="list-disc ml-8 text-lg space-y-1">
                {edu.achievements.map((item, idx) => (
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

export default Education;
