import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Home() {
  usePageTitle("");

  return (
    <section className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:gap-12">
      <div className="min-w-0">
        <h1 className="max-w-[22ch] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Hi, I’m Jhian Gabriel. I build things for the web.
        </h1>
        <p className="body-text mt-4 text-lg">
          I’m a developer who enjoys turning ideas into simple, usable
          websites. Take a look at what I’ve made, or get in touch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/projects">See my projects</Link>
          <Link className="btn btn-ghost" to="/contact">Contact me</Link>
        </div>
      </div>

      <div className="relative size-48 shrink-0 overflow-hidden rounded-full border-2 border-cyan bg-panel shadow-[0_0_0_8px_rgb(0_212_255/0.08),0_0_60px_rgb(0_212_255/0.15)] sm:size-60 md:size-72">
        <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-cyan/10 font-mono text-7xl font-bold text-cyan">J</span>
        <img
          src="/images/profile.png"
          alt="Portrait of Jhian Gabriel"
          width="288"
          height="288"
          className="absolute inset-0 size-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
    </section>
  );
}
