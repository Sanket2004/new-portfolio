"use client";

import { aboutData } from "@/data/about";
import { skills } from "@/data/tech";
import { getIcon } from "@/lib/get-icon";
import { containerVariants, itemVariants } from "@/lib/motionVariants";
import TechIcon from "@/lib/TechIcon";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Data Engineer", "Full Stack Developer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 pt-18 pb-12 sm:gap-10 sm:pt-14 sm:pb-16"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <div className="relative size-[68px] shrink-0 sm:size-20">
          <div
            className="absolute inset-0 translate-x-1 translate-y-1 rounded-full border border-muted-foreground/50 border-dashed"
            aria-hidden="true"
          />
          <Image
            src="/images/sanket.png"
            alt="Sanket Banerjee"
            loading="eager"
            width={96}
            height={96}
            sizes="80px"
            className="relative size-full rounded-full border-2 border-background object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-base font-medium">{aboutData.name}</p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={14} aria-hidden="true" />
            {aboutData.location}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-6">
        <div className="space-y-4">
          <h1 className="max-w-xl text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl">
            I build reliable systems and{" "}
            <span className="font-light text-muted-foreground/50">
              thoughtful products.
            </span>
          </h1>
          <p className="max-w-xl text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Working across data engineering, backend systems, and the modern web
            to turn complex requirements into clear, useful experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span className="mr-1">Focused on</span>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={roles[roleIndex]}
              className="font-medium text-foreground"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-85"
          >
            Explore projects <ArrowDownRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-dashed border-border px-4 py-2 text-sm text-foreground transition-colors bg-muted/20 hover:bg-muted/50"
          >
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>



        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-dashed border-border/70 pt-4">
          <span className="text-xs uppercase text-muted-foreground">
            Everyday tools
          </span>
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 text-xs text-foreground"
            >
              <TechIcon item={skill} className="size-4" />
              {skill.name}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
