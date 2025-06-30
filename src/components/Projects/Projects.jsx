import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import bookshelf from "../../assets/Bookshelf.PNG";
import bashabondhu from "../../assets/BashaBondhu.PNG";
import payNex from "../../assets/payNex.PNG";

const projects = [
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
  {
    title: "PayNex Billing App",
    image: payNex,
    liveLink: "https://bill-management-webapp.web.app/",
    githubLinks: [
      {
        label: "Client",
        url: "https://github.com/mdbulbulhasan/payNex-client",
      },
    ],
    features: [
      "User authentication with Firebase",
      "Add, update, and delete utility bills securely",
      "Responsive dashboard with intuitive UI",
      "Protected routes using JWT token",
    ],
    description:
      "PayNex is a full-stack MERN billing management application that allows users to manage their utility bills efficiently. It includes authentication, CRUD operations for bills, and a clean responsive dashboard for seamless user experience.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-base-200 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-base-100 rounded-lg shadow-2xl overflow-hidden"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <ul className="list-disc ml-5 text-lg">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <p className="text-lg">{project.description}</p>
                <div className="flex space-x-4 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm flex items-center gap-2"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  {project.githubLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm flex items-center gap-2"
                    >
                      {link.label} <FaGithub />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
