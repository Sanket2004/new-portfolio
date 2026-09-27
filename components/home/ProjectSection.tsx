"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../projects/ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full space-y-6">
      <div className="flex gap-3">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">
          Projects
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <Link
          href={"/projects"}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-85"
        >
          View all Projects
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
