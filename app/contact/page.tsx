import ContactForm from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/helpers/FadeIn";
import { aboutData } from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sanket Banerjee about project work, collaboration, engineering opportunities, or a quick hello.",
});

const socialLabels: Record<string, string> = {
  email: "Email",
  github: "GitHub",
  linkedin: "LinkedIn",
  x: "X",
};

export default function ContactPage() {
  const email = aboutData.socialLinks[0].email.replace("mailto:", "");

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col space-y-6 pt-6 pb-8 sm:pt-12 sm:pb-12">
      <FadeIn yOffset={10} duration={0.4}>
        <Link
          href="/"
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
          Get in touch
        </h1>
        <p className="max-w-2xl text-lg font-light text-muted-foreground">
          I&apos;m {aboutData.name}, a {aboutData.role} based in{" "}
          {aboutData.location}. I enjoy building dependable systems and
          thoughtful web experiences. Have something in mind? I&apos;d be glad
          to hear from you.
        </p>
      </FadeIn>

      <FadeIn
        delay={0.15}
        yOffset={12}
        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
      >
        <span className="text-xs text-muted-foreground">ELSEWHERE</span>
        {aboutData.socialLinks.map((link, index) => {
          const [platform, href] = Object.entries(link)[0];
          const label = socialLabels[platform] ?? platform;
          const isEmail = href.startsWith("mailto:");

          return (
            <span key={platform} className="inline-flex items-center gap-4">
              {index > 0 && (
                <span className="h-3 w-px bg-border" aria-hidden="true" />
              )}
              <a
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={
                  isEmail ? "Email Sanket" : `Open Sanket's ${label} profile`
                }
                className="group inline-flex items-center gap-1 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {label}
                <ArrowUpRight
                  size={12}
                  className="opacity-50 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </span>
          );
        })}
      </FadeIn>

      <FadeIn delay={0.2} yOffset={20} className="mt-2 max-w-2xl">
        <ContactForm email={email} />
      </FadeIn>
    </section>
  );
}
