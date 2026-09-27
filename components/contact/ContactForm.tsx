"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState, type FormEvent } from "react";
import Button from "../ui/Button";

const messageLimit = 1200;

type SubmissionState =
  | "idle"
  | "sending"
  | "success"
  | "error"
  | "copied"
  | "copy-error";

export default function ContactForm({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  function resetFeedback() {
    if (submissionState !== "sending") {
      setSubmissionState("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const topic = String(formData.get("topic") ?? "General inquiry");

    formData.set("_subject", `${topic} from ${name}`);
    setSubmissionState("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = (await response.json()) as {
        success?: boolean | string;
      };
      const succeeded = result.success === true || result.success === "true";

      if (!response.ok || !succeeded) {
        throw new Error("FormSubmit did not accept the inquiry.");
      }

      form.reset();
      setMessage("");
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setSubmissionState("copied");
    } catch {
      setSubmissionState("copy-error");
    }
  }

  const isSending = submissionState === "sending";
  const feedbackClassName =
    submissionState === "success"
      ? "text-emerald-700 dark:text-emerald-400"
      : submissionState === "error"
        ? "text-destructive"
        : "text-muted-foreground";

  return (
    <div className="mt-2 border-t border-dashed border-border/70 pt-6">
      <form
        action={`https://formsubmit.co/${email}`}
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="New portfolio inquiry" />
        <input type="hidden" name="_template" value="table" />

        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-light tracking-tight">Send a message</h2>
          <Button
            type="button"
            onClick={copyEmail}
            variant="ghost"
            size="sm"
            leftIcon={<Copy size={14} aria-hidden="true" />}
            className="shrink-0 px-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground"
            aria-label="Copy email address"
            disabled={isSending}
          >
            Copy email
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-y-1.5 text-sm">
            <span className="text-muted-foreground">Your name</span>
            <input
              autoComplete="name"
              className="h-11 w-full rounded-md border border-border bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 ring-0 focus:border-primary"
              name="name"
              placeholder="Jane Smith"
              required
              onChange={resetFeedback}
            />
          </label>
          <label className="flex flex-col gap-y-1.5 text-sm">
            <span className="text-muted-foreground">Email address</span>
            <input
              autoComplete="email"
              className="h-11 w-full rounded-md border border-border bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 ring-0 focus:border-primary"
              name="email"
              placeholder="jane@example.com"
              required
              type="email"
              onChange={resetFeedback}
            />
          </label>
        </div>

        <label className="flex flex-col gap-y-1.5 text-sm">
          <span className="text-muted-foreground">What&apos;s this about?</span>
          <select
            className="h-11 w-full rounded-md border border-border bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 ring-0 focus:border-primary appearance-none"
            defaultValue="Project inquiry"
            name="topic"
            onChange={resetFeedback}
          >
            <option>Project inquiry</option>
            <option>Collaboration</option>
            <option>Career opportunity</option>
            <option>Just saying hello</option>
          </select>
        </label>

        <label className="flex flex-col gap-y-1.5 text-sm">
          <span className="text-muted-foreground">Your message</span>
          <textarea
            className="min-h-36 w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 ring-0 focus:border-primary"
            maxLength={messageLimit}
            name="message"
            onChange={(event) => {
              setMessage(event.target.value);
              resetFeedback();
            }}
            placeholder="A little context helps me get back to you with a useful reply..."
            required
            rows={5}
          />
          <span
            className="block text-right text-xs text-muted-foreground"
            aria-live="polite"
          >
            {message.length}/{messageLimit}
          </span>
        </label>

        <div className="space-y-3 pt-1">
          <Button
            type="submit"
            loading={isSending}
            loadingText="Sending..."
            rightIcon={<ArrowUpRight size={16} aria-hidden="true" />}
          >
            Send inquiry
          </Button>
          <p
            className={`min-h-10 text-sm leading-relaxed ${feedbackClassName}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {submissionState === "success" ? (
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} aria-hidden="true" />
                Message sent. Thanks for reaching out; I&apos;ll be in touch.
              </span>
            ) : submissionState === "error" ? (
              "Your message could not be sent. Please try again or email me directly."
            ) : submissionState === "copied" ? (
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} aria-hidden="true" />
                Email address copied.
              </span>
            ) : submissionState === "copy-error" ? (
              "Copy is unavailable here. Email me directly instead."
            ) : null}
          </p>
        </div>
      </form>
    </div>
  );
}
