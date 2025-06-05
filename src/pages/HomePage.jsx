import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
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

  const iconMap = {
    ...FaIcons,
    ...SiIcons,
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{`Sanket Banerjee | Full-Stack Developer`}</title>
        <meta
          name="description"
          content="Sanket Banerjee is a passionate Full-Stack Developer from India specializing in scalable web and mobile applications with React, Node.js, and Flutter."
        />
        <meta
          name="keywords"
          content="Sanket Banerjee, Full-Stack Developer, React, Node.js, Flutter, MongoDB, Software Engineer, Portfolio"
        />
        <meta name="author" content="Sanket Banerjee" />
        <meta
          property="og:title"
          content="Sanket Banerjee | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Building modern, scalable, and user-centric web and mobile applications."
        />
        <meta
          property="og:image"
          content="https://sanketbanerjee.netlify.app/images/og.png"
        />
        <meta property="og:url" content="https://sanketbanerjee.netlify.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* components */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-6xl mx-auto px-6"
      >
        {/* landing section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 min-h-[70vh] md:min-h-[90vh] items-center justify-center md:justify-between">
          {/* mobile profile image */}
          <motion.div
            variants={itemVariants}
            className="md:hidden mx-auto relative border-3 rounded-full w-64 h-64 md:w-72 md:h-72 overflow-hidden"
          >
            <img
              src={data.profileImage}
              alt="Profile"
              className="object-cover"
            />
          </motion.div>
          {/* end of mobile profile image */}

          {/* text */}
          <div className="max-w-md mx-auto md:mx-0">
            {/* heading */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold leading-relaxed text-center md:text-left"
            >
              I'm a{" "}
              <span className="bg-pink-400/20 px-2">software developer</span>
              {", "}
              who builds impressive and user friendly{" "}
              <span className="bg-green-400/20 px-2">applications</span> that
              users love.
            </motion.h1>
            {/* end of heading */}

            {/* description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-700 mt-4 text-center md:text-left font-medium"
            >
              Check out what{" "}
              <a href={data.social_medias.github} className="border-b-2">
                I've been working on
              </a>
              , find me on{" "}
              <a href={data.social_medias.linkedin} className="border-b-2">
                LinkedIn
              </a>
              , or just{" "}
              <a
                href={`mailto:${data.social_medias.email}`}
                className="border-b-2"
              >
                send me an email
              </a>{" "}
              saying hi.
            </motion.p>
            {/* end of description */}
          </div>
          {/* end of text */}

          {/* desktop profile image */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block ml-auto relative overflow-hidden w-64 h-64 md:w-72 md:h-72 border-3 rounded-full"
          >
            <img
              src={data.profileImage}
              alt="Profile"
              className=" object-cover shadow-lg"
            />
          </motion.div>
          {/* end of desktop profile image */}
        </section>
        {/* end of landing section */}

        {/* skills section */}
        <section className="py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-center mb-2"
            >
              My Skills
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-center font-medium mb-12"
            >
              Here are some of the technologies and tools I work with
            </motion.p>
            <div className="grid grid-cols-3 gap-6">
              {data.skills.map((skill, idx) => {
                const Icon = iconMap[skill.icon];
                const colors = [
                  "bg-red-400/10",
                  "bg-blue-400/10",
                  "bg-green-400/10",
                  "bg-yellow-400/10",
                  "bg-purple-400/10",
                  "bg-pink-400/10",
                  "bg-amber-400/10",
                  "bg-teal-400/10",
                ];

                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className={`p-3 rounded-lg border-2 inline-flex gap-4 items-center justify-center md:justify-start cursor-pointer ${
                      colors[idx % colors.length]
                    }`}
                  >
                    {Icon && <Icon className="text-4xl" />}
                    <h3 className="text-lg font-semibold hidden md:block">
                      {skill.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
        {/* end of skills section */}
      </motion.div>
    </>
  );
}
