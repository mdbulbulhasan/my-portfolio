import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
  FaClock,
  FaCode,
  FaTrophy,
  FaGlobe,
  FaCodeBranch,
} from "react-icons/fa";
import bazaroid from "../../assets/bazaroid.png";
import bookshelf from "../../assets/Bookshelf.PNG";
import bashabondhu from "../../assets/BashaBondhu.PNG";
import payNex from "../../assets/payNex.PNG";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

// Update techStacks to include usage and tooltip for each tech
const techStacks = {
  MERN: [
    { icon: <SiMongodb key="mongo" />, usage: 0.7, tooltip: "Database" },
    {
      icon: <SiExpress key="express" />,
      usage: 0.6,
      tooltip: "Backend Framework",
    },
    { icon: <SiReact key="react" />, usage: 0.95, tooltip: "Main Framework" },
    { icon: <SiNodedotjs key="node" />, usage: 0.8, tooltip: "Server Runtime" },
  ],
  Firebase: [
    {
      icon: <SiFirebase key="firebase" />,
      usage: 0.85,
      tooltip: "Auth & Hosting",
    },
    { icon: <SiReact key="react" />, usage: 0.95, tooltip: "Main Framework" },
  ],
};

// Remove the projectImpacts array and all overlay info

const getTechStack = (title) => {
  if (title.toLowerCase().includes("bazaroid")) return techStacks.MERN;
  if (title === "Bookshelf") return techStacks.MERN;
  if (title === "Roommate Finder Web Application") return techStacks.Firebase;
  return [];
};

// 1. Use concise, punchy project descriptions
const getShortDesc = (desc) => {
  // Use the first sentence or up to 90 chars, whichever is shorter
  const firstSentence = desc.split(". ")[0] + (desc.includes(".") ? "." : "");
  return firstSentence.length <= 90 ? firstSentence : desc.slice(0, 90) + "...";
};

const projects = [
  {
    title: "Bazaroid – Daily Price Tracker for Local Markets",
    image: bazaroid,
    liveLink: "https://bazaroid.web.app/",
    githubLinks: [
      {
        label: "Client",
        url: "https://bazaroid.web.app/",
      },
      {
        label: "Server",
        url: "https://bazaroid.web.app/",
      },
    ],
    features: [
      "Role-Based Dashboards – Admin, Vendor, User",
      "Dynamic Product Listings with filter, sort, and Recharts comparison",
      "Secure JWT Authentication with Google login",
      "Responsive UI with Framer Motion animations",
    ],
    description:
      "Bazaroid is a full-stack web application to track daily prices of essential products in Bangladeshi local markets. It lets users view and compare prices, vendors submit daily updates, and admins manage approvals to ensure reliable data for everyone.",
  },
  {
    title: "Bookshelf",
    image: bookshelf,
    liveLink: "https://bookshelf-793eb.web.app/",
    githubLinks: [
      {
        label: "Client",
        url: "https://github.com/mdbulbulhasan/virtual-bookshelf-client",
      },
      {
        label: "Server",
        url: "https://github.com/mdbulbulhasan/virtual-bookshelf-server",
      },
    ],
    features: [
      "User authentication with Firebase & JWT",
      "Add, update, and delete books with secure routes",
      "Upvote, review, and category filter features",
    ],
    description:
      "A full-stack MERN application to manage books, allowing users to create virtual shelves with authentication and dynamic reviews.",
  },
  {
    title: "Roommate Finder Web Application",
    image: bashabondhu,
    liveLink: "https://roommate-finder-app-2a818.web.app/",
    githubLinks: [
      {
        label: "Client",
        url: "https://github.com/mdbulbulhasan/roommate-finder-client",
      },
      {
        label: "Server",
        url: "https://github.com/mdbulbulhasan/roommate-finder-server",
      },
    ],
    features: [
      "Find and connect with roommates based on preferences",
      "Secure authentication and profile management",
      "Responsive design with dynamic data integration",
    ],
    description:
      "A web application to search and connect with potential roommates by filtering based on user preferences and viewing detailed profiles.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-2 md:px-4 py-8 md:py-16 flex flex-col items-center justify-center w-full"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cyan-200">
          My Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {projects.map((project, index) => {
            const techStack = getTechStack(project.title);
            const shortDesc = getShortDesc(project.description);
            const isPayNex = project.title === "PayNex Billing App";
            return (
              <motion.article
                key={index}
                className="project-card group glassmorphism-card rounded-2xl shadow-lg transition flex flex-col relative overflow-hidden focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer w-full"
                tabIndex={0}
                aria-label={`Project: ${project.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  className="w-full h-32 md:h-40 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between p-3 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-cyan-100 mb-2 relative project-title-underline">
                    {project.title}
                    <span className="card-underline"></span>
                  </h3>
                  {/* Highlightable short description */}
                  <div className="project-short-desc mb-2 poppins text-xs md:text-base">
                    {shortDesc}
                  </div>
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-chip tech-chip-glow heatmap-chip group relative"
                        aria-label={tech.tooltip}
                        style={{
                          boxShadow: `0 0 16px 4px rgba(103,232,249,${
                            tech.usage || 0.2
                          })`,
                        }}
                      >
                        {tech.icon}
                      </span>
                    ))}
                  </div>
                  {/* Main Features section */}
                  <div className="mb-3 features-glass-bg">
                    <div className="text-cyan-300 font-semibold text-xs mb-1 tracking-wide uppercase">
                      Main Features
                    </div>
                    <ul className="list-disc ml-4 text-xs text-cyan-50 space-y-1">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Change the button container div to always use flex-row and no flex-wrap */}
                  <div className="flex flex-row gap-2 md:gap-4 mt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project flex items-center gap-2 live-pulse"
                      tabIndex={0}
                      aria-label={`View live project: ${project.title}`}
                    >
                      {isPayNex ? (
                        <span>Live</span>
                      ) : (
                        <>
                          <span>Live</span> <FaExternalLinkAlt />
                        </>
                      )}
                    </a>
                    {project.githubLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project flex items-center gap-2"
                        tabIndex={0}
                        aria-label={`View ${link.label} source code for ${project.title}`}
                      >
                        {isPayNex ? (
                          <span>{link.label}</span>
                        ) : (
                          <>
                            <span>{link.label}</span> <FaGithub />
                          </>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
