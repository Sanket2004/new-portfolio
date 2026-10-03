import { FadeIn } from "@/components/helpers/FadeIn";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Explore selected full-stack, data engineering, and mobile projects by Sanket Banerjee.",
});

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <Link
          href={"/"}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> Back to Home
        </Link>
      </FadeIn>
      <FadeIn
        delay={0.1}
        yOffset={15}
        duration={0.5}
        className="flex flex-col gap-2"
      >
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
          All Projects
        </h1>
        <p className="text-muted-foreground font-light text-lg">
          A collection of my recent work, side projects, and experiments. Built
          from scratch with a focus on clean code and great user experiences.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
        {projects.map((project, idx) => (
          <FadeIn key={project.name} delay={0.15 + idx * 0.05} yOffset={20}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
