import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import ReactMarkdown from "react-markdown";
import SEO from "../components/utils/SEO";

export default function AboutPage() {
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

  // Enhanced structured data for about page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Sanket Banerjee",
      jobTitle: "Full-Stack Developer",
      description:
        "Learn more about Sanket Banerjee, a full-stack developer from Kolkata, India with experience in real-time systems, AI/ML, and cross-platform mobile development.",
      url: "https://sanketbanerjee.tech/about",
      image: "https://sanketbanerjee.tech/images/og.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: data.location?.city || "Kolkata",
        addressRegion: data.location?.state || "West Bengal",
        addressCountry: data.location?.country || "India",
      },
      email: data.social_medias?.email || "",
      alumniOf:
        data.education?.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.institution,
          description: edu.degree,
          startDate: edu.duration?.split(" - ")[0] || "",
          endDate: edu.duration?.split(" - ")[1] || "",
        })) || [],
      knowsLanguage:
        data.languages?.map((lang) => ({
          "@type": "Language",
          name: lang.language,
          proficiency: lang.proficiency,
        })) || [],
    },
  };

  return (
    <>
      <SEO
        title="About"
        description="Learn more about Sanket Banerjee, a passionate full-stack developer from Kolkata, India with expertise in real-time systems, AI/ML, cross-platform mobile development, and modern web technologies. Discover my educational background, technical skills, and professional journey."
        keywords="About Sanket Banerjee, Full Stack Developer Background, Software Engineer Experience, React Developer India, Node.js Expert, Flutter Developer, Educational Background, Technical Skills, Professional Journey"
        url="/about"
        type="profile"
        structuredData={structuredData}
      />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-6xl mx-auto px-6 py-8"
      >
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-4">
          About Me
        </motion.h1>
        <motion.article
          variants={itemVariants}
          className="
          prose
          prose-p: font-medium 
          prose-p:text-zinc-600 
          prose-headings:text-black
          prose-headings:font-bold
          prose-strong:text-black
          prose-a:text-black
          prose-li:text-zinc-600
          dark:prose-headings:text-white 
          dark:prose-p:text-zinc-400 
          dark:prose-a:text-zinc-100
          dark:prose-strong:text-zinc-100
          dark:prose-li:text-zinc-400
          dark:prose-hr:border-zinc-700
          "
          style={{ maxWidth: "100%" }}
        >
          <ReactMarkdown>{data.about}</ReactMarkdown>
        </motion.article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Education timeline */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-xl font-bold mb-8"
            >
              Education
            </motion.h2>
            <ul className="space-y-4" role="list">
              {data.education.map((edu, index) => (
                <motion.li
                  variants={itemVariants}
                  key={index}
                  className="border-l-2 pl-4 flex items-start gap-4"
                  role="listitem"
                >
                  <img
                    src={edu.image}
                    alt={`${edu.institution} logo`}
                    className="size-12 object-cover rounded-md mt-1.5 border-2 bg-white"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="font-medium">{edu.institution}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      <time>{edu.duration}</time>
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* languages known */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-xl font-bold mb-8"
            >
              Languages Known
            </motion.h2>
            <ul className="space-y-2" role="list">
              {data.languages.map((lang, index) => (
                <motion.li
                  variants={itemVariants}
                  key={index}
                  className="flex items-center gap-2"
                  role="listitem"
                >
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    ({lang.proficiency})
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm text-zinc-600 dark:text-zinc-400 font-medium"
        >
          Details Last Updated On:{" "}
          <time dateTime={data.last_updated}>
            {new Date(data.last_updated).toLocaleDateString("en-IN")}
          </time>
        </motion.p>
      </motion.section>
    </>
  );
}
