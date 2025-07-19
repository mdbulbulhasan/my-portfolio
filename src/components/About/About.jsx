import React from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../../assets/DP.jpg";

const skills = [
  { name: "ReactJS", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "UI/UX", color: "#FF6B6B" },
  { name: "Next.js", color: "#000000" },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-center items-center px-2 md:px-6 py-8 md:py-16 overflow-hidden w-full"
    >
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="circuit-pattern">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="#67e8f9" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="#67e8f9"/>
              <circle cx="80" cy="80" r="2" fill="#67e8f9"/>
              <path d="M20 20l60 60" stroke="#67e8f9" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <motion.div
        className="md:w-1/2 w-full p-4 md:p-6 flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="relative holo-frame w-full max-w-xs md:max-w-md"
          style={{ y }}
          whileHover={{ rotateY: 5, rotateX: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={aboutImg}
            alt="Md Bulbul Hasan"
            className="rounded-full w-full h-auto max-w-xs md:max-w-md object-cover shadow-2xl holo-img"
            draggable={false}
            loading="lazy"
          />
          {/* Enhanced scanline shimmer */}
          <div className="holo-scanline absolute inset-0 rounded-full pointer-events-none" />
          {/* Glow border */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 shadow-holo-glow" />
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-1/2 w-full p-4 md:p-6 space-y-4"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glassmorphism-card p-4 md:p-8 rounded-2xl relative overflow-hidden w-full">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl animated-border"></div>
          
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            About <span className="about-highlight">Me</span>
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.5 },
              },
            }}
          >
            <motion.p
              className="text-base md:text-lg text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello, I'm <span className="about-highlight pulse">MD Bulbul Hasan</span>, a passionate <span className="about-highlight">MERN Stack Developer</span> focused on crafting responsive, scalable, and user-centric web applications.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              My mission is to turn complex problems into simple, beautiful, and intuitive designs and code that drive results. I continuously enhance my skills to deliver high-quality solutions that create real impact for businesses and users.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Currently, I am learning <span className="about-highlight">advanced React</span> and <span className="about-highlight">Next.js</span> to build robust applications, aiming to contribute effectively in a professional team as a <span className="about-highlight">Frontend or MERN Stack Developer</span>.
            </motion.p>
          </motion.div>

          {/* Floating skill orbs */}
          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.2 },
              },
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-orb"
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <span className="text-xs font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="btn-futuristic mt-6 w-fit inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              View My Projects
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
