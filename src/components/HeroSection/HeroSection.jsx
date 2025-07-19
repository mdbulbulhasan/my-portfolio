import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/frontend.json";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiReact, SiNodedotjs } from "react-icons/si";

// Starfield component for animated background
function Starfield({ numStars = 90, width = 440, height = 440 }) {
  const canvasRef = useRef(null);
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.12 + 0.04,
      alpha: Math.random() * 0.5 + 0.5,
      twinkle: Math.random() * 0.05 + 0.01
    }));
    let frame;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let s of stars) {
        ctx.save();
        ctx.globalAlpha = s.alpha + Math.sin(Date.now() * s.twinkle) * 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#a5f3fc';
        ctx.shadowColor = '#67e8f9';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        s.x += s.speed;
        if (s.x > width) s.x = 0;
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [numStars, width, height]);
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ position: 'absolute', left: 0, top: 0, width, height, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [orbitAngle, setOrbitAngle] = useState(0);

  // Animate orbit
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prev) => prev + 0.5);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Parallax soft glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlowPos({ x, y });
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Skills icons for orbit (remove Google Translate)
  const orbitSkills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiExpress />, name: "ExpressJS" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  // Orbit parameters
  const orbitRadii = [120, 180]; // px, two rings (larger)
  const containerSize = 440; // px (larger container)
  const center = containerSize / 2;

  // Split skills into two rings
  const skillsPerRing = Math.ceil(orbitSkills.length / 2);
  const ringSkills = [
    orbitSkills.slice(0, skillsPerRing),
    orbitSkills.slice(skillsPerRing)
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col md:flex-row justify-center items-center min-h-[80vh] py-8 px-2 md:px-6 overflow-hidden"
    >
      {/* Parallax Glow (soft, animated) */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(103,232,249,0.10) 0%, rgba(34,211,238,0.08) 30%, transparent 70%)`,
          transition: "background 0.2s",
        }}
      ></div>
      <motion.div
        className="md:w-1/2 p-6 flex justify-center z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="glassmorphism-card w-full max-w-xl p-4 md:p-8 space-y-6"
          whileHover={{
            scale: 1.025,
            boxShadow:
              "0 8px 48px 0 rgba(103,232,249,0.18), 0 0 0 4px rgba(34,211,238,0.12)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-cyan-100 hero-glow-soft relative inline-block"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            Hi, I'm <span className="hero-underline">MD Bulbul Hasan</span>
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Frontend Based | MERN Stack Developer"],
              autoStart: true,
              loop: true,
            }}
            wrapperClassName="typewriter-text typewriter-accent"
          />
          <p className="text-lg text-gray-200">
            Building performant, scalable, and elegant web applications to turn
            ideas into impactful digital solutions.
          </p>
          <div className="space-x-4 flex">
            <motion.a
              href="https://drive.google.com/file/d/1nlC5IwyiGZqgLNaiKmSvz3WXDelxNu7z/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-futuristic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <FaDownload className="mr-2" /> Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-futuristic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="md:w-1/2 w-full p-6 flex flex-col items-center justify-center z-10 relative"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Solar System Animation with Two Orbit Rings (Larger) */}
        <div
          className="solar-orbit-container flex items-center justify-center"
          style={{
            position: "relative",
            width: containerSize,
            height: containerSize,
          }}
        >
          {/* Animated starfield background */}
          <Starfield
            width={containerSize}
            height={containerSize}
            numStars={90}
          />
          {/* Visible, softly glowing orbit paths for each ring */}
          <svg
            width={containerSize}
            height={containerSize}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <defs>
              <filter
                id="orbit-blur"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
            <ellipse
              cx={center}
              cy={center}
              rx={orbitRadii[0]}
              ry={orbitRadii[0]}
              fill="none"
              stroke="#67e8f9"
              strokeWidth="2.5"
              opacity="0.38"
              filter="url(#orbit-blur)"
            />
            <ellipse
              cx={center}
              cy={center}
              rx={orbitRadii[1]}
              ry={orbitRadii[1]}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
              opacity="0.32"
              filter="url(#orbit-blur)"
            />
          </svg>
          {/* Holographic shimmer overlay */}
          <div
            className="holo-shimmer-overlay"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: containerSize,
              height: containerSize,
              zIndex: 3,
              pointerEvents: "none",
              borderRadius: "50%",
              overflow: "hidden",
              mixBlendMode: "lighten",
            }}
          >
            <svg
              width={containerSize}
              height={containerSize}
              style={{ position: "absolute", left: 0, top: 0 }}
            >
              <defs>
                <linearGradient
                  id="holo-shimmer-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ellipse
                cx="160"
                cy="160"
                rx="150"
                ry="150"
                fill="url(#holo-shimmer-gradient)"
              />
              <rect
                x="0"
                y="0"
                width="320"
                height="320"
                fill="url(#holo-shimmer-gradient)"
                opacity="0.18"
              >
                <animate
                  attributeName="x"
                  from="-320"
                  to="320"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
            <div
              className="holo-shimmer-anim"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, rgba(103,232,249,0.08) 0%, rgba(162,89,247,0.10) 50%, rgba(34,211,238,0.08) 100%)",
                opacity: 0.7,
                mixBlendMode: "lighten",
                pointerEvents: "none",
                animation: "holo-shimmer-move 3.5s linear infinite",
              }}
            ></div>
          </div>
          {/* Faint SVG orbit rings - now with animated neon gradients and glow */}
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            width="320"
            height="320"
            viewBox="0 0 320 320"
          >
            <defs>
              <radialGradient id="orbitGlow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="orbitGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a259f7" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#67e8f9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a259f7" stopOpacity="0" />
              </radialGradient>
              <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <ellipse
              cx="160"
              cy="160"
              rx="90"
              ry="90"
              fill="none"
              stroke="url(#orbitGlow1)"
              strokeWidth="3"
              opacity="0.7"
              filter="url(#glow)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 160 160"
                to="360 160 160"
                dur="8s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="160"
              cy="160"
              rx="130"
              ry="130"
              fill="none"
              stroke="url(#orbitGlow2)"
              strokeWidth="3.5"
              opacity="0.7"
              filter="url(#glow)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 160 160"
                to="0 160 160"
                dur="13s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
          {/* Central glowing sun (initials) */}
          <div
            className="flex items-center justify-center"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 4,
            }}
          >
            <span
              className="solar-center-text font-bold text-center"
              style={{
                fontSize: "1.1rem",
                letterSpacing: "0.04em",
                color: "#67e8f9",
                textShadow: "none",
                lineHeight: 1,
                whiteSpace: "nowrap",
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
              }}
            >
              Md Bulbul Hasan
            </span>
          </div>
          {/* Orbiting skills icons for each ring */}
          {ringSkills.map((skills, ringIdx) =>
            skills.map((skill, i) => {
              const angle =
                ((360 / skills.length) * i +
                  orbitAngle * (ringIdx === 0 ? 1 : -0.7)) *
                (Math.PI / 180);
              const r = orbitRadii[ringIdx];
              const x = center + r * Math.cos(angle) - 24;
              const y = center + r * Math.sin(angle) - 24;
              // Comet tail angle (opposite to movement)
              const tailAngle = angle + Math.PI;
              return (
                <span
                  key={skill.name + ringIdx}
                  className="solar-orbit-icon group futuristic-skill-icon"
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(17,24,39,0.18)",
                    borderRadius: "50%",
                    fontSize: "2rem",
                    color: "#67e8f9",
                    filter: "none",
                    boxShadow: "none",
                    transition:
                      "color 0.2s, transform 0.18s cubic-bezier(.4,2,.6,1)",
                    pointerEvents: "auto",
                  }}
                  tabIndex={0}
                  aria-label={skill.name}
                >
                  {/* Comet tail */}
                  <svg
                    width="38"
                    height="38"
                    style={{
                      position: "absolute",
                      left: 5,
                      top: 5,
                      zIndex: 0,
                      pointerEvents: "none",
                      transform: `rotate(${tailAngle}rad)`,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="tail-gradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#67e8f9"
                          stopOpacity="0.7"
                        />
                        <stop
                          offset="100%"
                          stopColor="#67e8f9"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <ellipse
                      cx="10"
                      cy="19"
                      rx="10"
                      ry="2.2"
                      fill="url(#tail-gradient)"
                    />
                  </svg>
                  <span
                    style={{
                      transform:
                        "rotate(" +
                        -orbitAngle * (ringIdx === 0 ? 1 : -0.7) +
                        "deg)",
                      zIndex: 1,
                    }}
                  >
                    {skill.icon}
                  </span>
                  <span className="solar-orbit-tooltip group-hover:opacity-100 group-focus:opacity-100">
                    {skill.name}
                  </span>
                </span>
              );
            })
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

/* Add to the bottom of the file for skill icon hover pop/ripple */
if (typeof document !== 'undefined' && !document.getElementById('futuristic-skill-icon-keyframes')) {
  const style = document.createElement('style');
  style.id = 'futuristic-skill-icon-keyframes';
  style.innerHTML = `
    .futuristic-skill-icon {
      position: relative;
      overflow: visible;
    }
    .futuristic-skill-icon:hover, .futuristic-skill-icon:focus {
      filter: drop-shadow(0 0 24px #67e8f9) drop-shadow(0 0 48px #22d3ee) brightness(1.2);
      transform: scale(1.18);
      z-index: 2;
    }
    .futuristic-skill-icon:active::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, #67e8f9aa 0%, transparent 80%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.5;
      pointer-events: none;
      animation: ripple-pop 0.4s cubic-bezier(.4,2,.6,1);
    }
    @keyframes ripple-pop {
      0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.7); }
      100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
    }
  `;
  document.head.appendChild(style);
}

/* Add to the bottom of the file for shimmer animation */
if (typeof document !== 'undefined' && !document.getElementById('holo-shimmer-keyframes')) {
  const style = document.createElement('style');
  style.id = 'holo-shimmer-keyframes';
  style.innerHTML = `
    @keyframes holo-shimmer-move {
      0% { opacity: 0.7; background-position: -320px 0; }
      100% { opacity: 0.7; background-position: 320px 0; }
    }
    .holo-shimmer-overlay {
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}
