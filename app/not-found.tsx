import { FadeIn } from "@/components/helpers/FadeIn";
import { createPageMetadata } from "@/lib/metadata";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Page not found",
  description: "The page you requested could not be found.",
});

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-5 pt-6 pb-12 sm:pt-12">
      <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
        Page not found
      </h1>
      <p className="text-lg font-light text-muted-foreground">
        This page may have moved or no longer exists.
      </p>
      <FadeIn yOffset={10} duration={0.4}>
        <Link
          href="/"
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> Back to Home
        </Link>
      </FadeIn>
    </section>
  );
}
