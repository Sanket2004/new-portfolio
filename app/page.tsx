import { FadeIn } from "@/components/helpers/FadeIn";
import GitHubStats from "@/components/home/GitHubStats";
import Hero from "@/components/home/Hero";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import SpotifyNowPlaying from "@/components/home/SpotifyNowPlaying";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Data Engineer & Full Stack Developer",
  absoluteTitle: true,
  description:
    "I'm Sanket Banerjee, a data engineer and full-stack developer in Kolkata, building reliable data systems, backend platforms, and thoughtful web experiences.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <SkillSection />
      </FadeIn>
      <FadeIn>
        <GitHubStats />
      </FadeIn>
      <FadeIn>
        <ProjectSection />
      </FadeIn>
      <FadeIn>
        <SpotifyNowPlaying />
      </FadeIn>
    </>
  );
}
