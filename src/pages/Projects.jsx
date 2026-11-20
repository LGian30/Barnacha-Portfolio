import usePageTitle from "../hooks/usePageTitle.js";

const projects = [
  {
    title: "PROFIT Fitness Tracker",
    description: "Tracks workouts and generates AI-powered training plans.",
    image: "/images/project1.png",
    alt: "PROFIT dashboard showing an AI-generated sports performance workout plan with exercises, sets and reps",
    link: "https://github.com/your-username/profit",
  },
];

export default function Projects() {
  usePageTitle("Projects");

  return (
    <section>
      <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="min-w-0 rounded-2xl border border-line border-t-2 border-t-cyan bg-panel p-4">
            <img
              src={p.image}
              alt={p.alt}
              width="500"
              height="300"
              loading="lazy"
              className="aspect-[5/3] w-full rounded-lg border border-line object-cover object-left-top"
            />
            <h2 className="mt-3 text-lg font-semibold">{p.title}</h2>
            <p className="mt-1 text-muted">{p.description}</p>
            <a href={p.link} className="mt-3 inline-block font-mono text-sm font-semibold text-cyan underline">
              View project<span className="sr-only">: {p.title}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
