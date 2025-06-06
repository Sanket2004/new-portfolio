import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { FiExternalLink } from "react-icons/fi";
import SEO from "../components/utils/SEO";

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

  // Enhanced structured data for projects page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Sanket Banerjee",
    description:
      "Explore projects by Sanket Banerjee including real-time apps, social platforms, password managers, and AI integrations",
    url: "https://sanket-new-portfolio.vercel.app/projects",
    author: {
      "@type": "Person",
      name: "Sanket Banerjee",
      jobTitle: "Full-Stack Developer",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement:
        data.projects?.map((project, index) => ({
          "@type": "SoftwareApplication",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: project.link,
          image: project.image,
          author: {
            "@type": "Person",
            name: "Sanket Banerjee",
          },
          programmingLanguage: project.technologies,
          applicationCategory: "WebApplication",
        })) || [],
    },
  };

  return (
    <>
      <SEO
        title="Projects"
        description="Explore innovative projects by Sanket Banerjee including real-time applications, social platforms, password managers, AI integrations, and more. Built using modern technologies like React, Flutter, Node.js, Express, MongoDB, and Firebase."
        keywords="Sanket Banerjee Projects, React Projects, Flutter Apps, Node.js Applications, Full Stack Projects, Web Development Portfolio, Mobile App Development, AI Integration Projects, Real-time Applications, Social Platform Development"
        url="/projects"
        structuredData={structuredData}
      />

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
          className="font-medium text-zinc-700 dark:text-zinc-400 mb-12"
        >
          Here are some of the projects I've worked on. Click on any project to
          learn more about it.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
          {/* Project cards */}
          {data.projects.map((project, idx) => (
            <motion.article
              key={idx}
              className="border-2 relative overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
              role="listitem"
            >
              <div className="md:max-w-72 p-6">
                <h2 className="text-lg md:text-xl font-bold mb-4">
                  {project.title}
                </h2>
                <p className="font-medium text-zinc-700 dark:text-zinc-400 mb-6">
                  {project.description}
                </p>
                <div
                  className="flex flex-wrap gap-2 mb-6"
                  role="list"
                  aria-label="Technologies used"
                >
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
                        role="listitem"
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
                  aria-label={`View ${project.title} project (opens in new tab)`}
                >
                  <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                    View Project
                    <FiExternalLink aria-hidden="true" />
                  </button>
                </a>
              </div>

              <div className="md:absolute float-end -bottom-4 -right-4">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-56 h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
