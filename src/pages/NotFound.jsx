import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="page py-4 text-center md:py-10">
      <p aria-hidden="true" className="font-mono text-7xl font-bold text-cyan sm:text-8xl">404</p>
      <div className="space-y-3">
        <h1 className="page-title">Page not found</h1>
        <p className="body-text mx-auto">The page you’re looking for doesn’t exist or may have moved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="btn btn-primary" to="/">Go to home</Link>
        <Link className="btn btn-ghost" to="/projects">See my projects</Link>
      </div>
    </section>
  );
}
