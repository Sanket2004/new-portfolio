import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { FiExternalLink } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* SEOs */}
      <Helmet>
        <title>Projects | Sanket Banerjee</title>
        <meta
          name="description"
          content="Explore projects by Sanket Banerjee including real-time apps, social platforms, password managers, and AI integrations using React, Flutter, and Firebase."
        />
        <meta name="author" content="Sanket Banerjee" />
        <meta property="og:title" content="Projects by Sanket Banerjee" />
        <meta
          property="og:description"
          content="Check out featured apps and tools built by Sanket using modern stacks like React, Flutter, Express, and MongoDB."
        />
        <meta
          property="og:image"
          content="https://sanketbanerjee.netlify.app/images/og.png"
        />
        <meta
          property="og:url"
          content="https://sanketbanerjee.netlify.app/projects"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* components */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-6xl mx-auto px-6 py-8"
      >
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-2">
          Projects
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-medium text-gray-700 mb-12"
        >
          Here are some of the projects I've worked on. Click on any project to
          learn more about it.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project cards */}
          {data.projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="border-2 relative overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="md:max-w-72 p-6">
                <h1 className="text-lg md:text-xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="font-medium text-gray-700 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => {
                    const colors = [
                      "bg-red-400/20",
                      "bg-blue-400/20",
                      "bg-green-400/20",
                      "bg-yellow-400/20",
                    ];
                    return (
                      <span
                        key={index}
                        className={`font-semibold ${
                          colors[index % colors.length]
                        } px-2 py-1 rounded-full text-xs border-2`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-0"
                >
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
                    View Project
                    <FiExternalLink />
                  </button>
                </a>
              </div>

              <div className="md:absolute float-end -bottom-4 -right-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-56 h-56 object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
