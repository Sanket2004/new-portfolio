import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: data.social_medias.linkedin },
    { name: "GitHub", href: data.social_medias.github },
    { name: "Email", href: `mailto:${data.social_medias.email}` },
  ];

  // Animation variants
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

  const childVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="overflow-hidden">
      <motion.footer
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pb-18 max-w-7xl mx-auto"
      >
        <motion.hr variants={childVariants} className="my-4 border m-6" />

        <div className="container mx-auto max-w-6xl p-6 flex flex-row justify-between items-start md:items-center gap-8">
          <motion.div variants={childVariants} className="left">
            <h1 className="text-xl font-bold mb-4">{data.name}</h1>
            <ul className="flex flex-col gap-4 mt-2 font-medium">
              {links.map((link) => (
                <motion.li key={link.name} variants={childVariants}>
                  <Link to={link.href} className="hover:border-b-2">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={childVariants} className="right pt-10">
            {/* <h1 className="text-xl font-bold mb-4">Follow Me</h1> */}
            <ul className="flex flex-col gap-4 mt-2 font-medium">
              {socialLinks.map((social) => (
                <motion.li key={social.name} variants={childVariants}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-b-2"
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={childVariants}
          className="text-center text-zinc-600 dark:text-zinc-400 mt-6 font-medium px-6 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} {data.name}. Hire me before I get
            too famous!
          </p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
