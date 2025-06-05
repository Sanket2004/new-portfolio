import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://formsubmit.co/ajax/${data.social_medias.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000); // Hide after 5s
      }
    } catch (err) {
      console.error("Form submission error", err);
    } finally {
      setIsLoading(false);
    }
  };

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
        <title>Contact | Sanket Banerjee</title>
        <meta
          name="description"
          content="Want to collaborate or have a chat? Reach out to Sanket Banerjee via email or connect on LinkedIn and GitHub."
        />
        <meta name="author" content="Sanket Banerjee" />
        <meta property="og:title" content="Contact Sanket Banerjee" />
        <meta
          property="og:description"
          content="Feel free to connect with Sanket on LinkedIn or GitHub, or drop an email for collaborations."
        />
        <meta
          property="og:image"
          content="https://sanketbanerjee.netlify.app/images/og.png"
        />
        <meta
          property="og:url"
          content="https://sanketbanerjee.netlify.app/contact"
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
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-4">
          Contact Me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-medium text-zinc-600 dark:text-zinc-400 mb-12"
        >
          If you have any questions or just want to say hi, feel free to reach
          out!
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          <form
            className="space-y-6 font-semibold max-w-xl w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full border-b-2 outline-0 ring-0"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="mt-1 block w-full border-b-2 outline-0 ring-0"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full border-b-2 outline-0 ring-0 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-black/10 dark:bg-white/10 border-2 text-black dark:text-white py-2.5 px-4 rounded-full hover:bg-black/15 dark:hover:bg-white/15 cursor-pointer font-semibold"
              style={isLoading ? { cursor: "not-allowed" } : {}}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {submitted && (
              <motion.p
                variants={itemVariants}
                className="text-green-600 font-semibold mt-4"
              >
                Thanks for reaching out, I'll get back to you soon!
              </motion.p>
            )}
          </form>

          <div className="col-span-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              Socials
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="font-medium text-zinc-600 dark:text-zinc-400 mb-8"
            >
              Feel free to reach out via email or connect with me on social
              media.
            </motion.p>
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="flex items-center gap-2 font-medium"
              >
                <FiMapPin />
                <span className="ml-2">
                  {data.location.city +
                    ", " +
                    data.location.state +
                    ", " +
                    data.location.country}
                </span>
              </motion.p>
              <motion.a
                variants={itemVariants}
                href={`mailto:${data.social_medias.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-4 font-medium group"
              >
                <FiMail />
                <span className="ml-2 group-hover:border-b">
                  {data.social_medias.email}
                </span>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href={data.social_medias.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-4 font-medium group"
              >
                <FiLinkedin />
                <span className="ml-2 group-hover:border-b">LinkedIn</span>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href={data.social_medias.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-4 font-medium group"
              >
                <FiGithub />
                <span className="ml-2 group-hover:border-b">GitHub</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
