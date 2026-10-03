import { FadeIn } from "@/components/helpers/FadeIn";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BiLink } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";

import TechIcon from "@/lib/TechIcon";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found",
      description: "The requested project could not be found.",
    });
  }

  return createPageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${slug}`,
    type: "article",
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col pt-6 pb-8 sm:pt-12 sm:pb-24 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <Link
          href="/projects"
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> Back to Projects
        </Link>
      </FadeIn>
      <div className="flex flex-col gap-6">
        <FadeIn delay={0.1}>
          <h1 className="text-2xl font-light tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg font-light text-muted-foreground sm:text-xl">
            {project.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href={project.githubLink}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-dashed border-border px-4 py-2 text-sm text-foreground transition-colors bg-muted/20 hover:bg-muted/50"
            >
              <LuGithub className="w-4 h-4" />
              View Source
            </Link>

            {project.liveLink && (
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-85"
                href={project.liveLink}
              >
                <BiLink className="w-4 h-4" />
                Live Demo
              </Link>
            )}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Image
            className="rounded-lg border border-border border-dashed"
            src={project.imgSrc}
            alt={project.name}
            loading="lazy"
            width={800}
            height={400}
          />
        </FadeIn>
        <FadeIn delay={0.25}>
          <h2 className="mb-4 text-xl font-light tracking-tight sm:text-2xl">
            Technologies Used
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="bg-card ml-1 inline-flex items-center gap-1.5 rounded-md border border-dashed px-1 py-1.5 text-xs text-foreground sm:px-3.5 sm:text-sm"
              >
                <TechIcon item={tech} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <h2 className="mb-4 text-xl font-light tracking-tight sm:text-2xl">
            About the Project
          </h2>
          <p className="text-muted-foreground font-light">{project.about}</p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <h2 className="mb-4 text-xl font-light tracking-tight sm:text-2xl">
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light ">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </main>
  );
}
