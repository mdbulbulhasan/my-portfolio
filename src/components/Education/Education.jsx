import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BSc in Information & Communication Engineering",
    institution:
      "Bangladesh Army University of Engineering & Technology (BAUET)",
    duration: "Mar 2019 - Sep 2023",
    achievements: [
      "CGPA: 3.25 out of 4.00",
      "Final thesis on Alzheimer's Disease detection using EfficientNetB0 CNN.",
      "Active member of Programming & Robotics Club.",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="px-2 md:px-4 py-12 md:py-16 flex flex-col items-center justify-center w-full"
    >
      <div className="max-w-3xl w-full mx-auto relative">
        {/* Timeline vertical line */}
        <div className="absolute left-3 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/30 to-transparent rounded-full z-0" />

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cyan-200">
          Education
        </h2>

        <div className="space-y-8 md:space-y-10 relative z-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-4 md:p-8 shadow-lg border border-cyan-400/20 transition flex flex-col md:flex-row relative"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 24px 6px rgba(103,232,249,0.8), 0 0 8px 2px rgba(34,211,238,0.7)",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 md:-left-8 top-8 z-10">
                <div
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400/80 border-2 border-cyan-200 shadow-lg ${
                    index === 0 ? "animate-ping" : ""
                  }`}
                ></div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-3">
                  <FaGraduationCap
                    className="text-cyan-300 group-hover:text-cyan-400 transition"
                    size={24}
                  />

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-cyan-100 flex items-center gap-2">
                      {edu.degree}

                      {edu.achievements.length > 1 && (
                        <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:translate-y-0 translate-y-2">
                          <FaCertificate
                            className="text-yellow-300 animate-spin-slow"
                            size={18}
                          />
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-400 text-xs md:text-sm mt-1">
                      {edu.institution}
                      <span className="mx-2 text-cyan-700">|</span>
                      {edu.duration}
                    </p>
                  </div>

                  <span className="bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md mt-2 md:mt-0">
                    Robotics Club
                  </span>
                </div>

                <ul className="list-disc ml-6 md:ml-8 text-sm md:text-base space-y-1 text-cyan-50">
                  {edu.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
