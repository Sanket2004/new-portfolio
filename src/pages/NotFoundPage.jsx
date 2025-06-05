import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="container max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-6">
        The page you are looking for does not exist, or has been moved.
      </p>
      <Link to="/" className="text-black dark:text-white font-medium border-b-2">
        Back to home
      </Link>
    </section>
  );
}
