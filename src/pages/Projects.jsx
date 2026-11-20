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
    <section className="page">
      <h1 className="page-title">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card border-t-2 border-t-cyan">
            <img
              src={p.image}
              alt={p.alt}
              width="500"
              height="300"
              loading="lazy"
              className="aspect-[5/3] w-full rounded-lg border border-line object-cover object-left-top"
            />
            <h2 className="card-title mt-3">{p.title}</h2>
            <p className="mt-1 text-muted">{p.description}</p>
            <a href={p.link} className="link mt-3 inline-block font-mono text-sm font-semibold">
              View project<span className="sr-only">: {p.title}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
