import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="py-8 text-center md:py-16">
      <p aria-hidden="true" className="font-mono text-7xl font-bold text-cyan sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-prose text-muted">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link className="btn btn-primary" to="/">Go to home</Link>
        <Link className="btn btn-ghost" to="/projects">See my projects</Link>
      </div>
    </section>
  );
}
