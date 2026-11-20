const project = {
  title: "PROFIT Fitness Tracker",
  description: "Tracks workouts and generates AI-powered training plans.",
  image: "/images/project1.png",
  link: "https://github.com/LGian30/profit",
};

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        <article className="card">
          <img src={project.image} alt={`Screenshot of ${project.title}`} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link}>View project</a>
        </article>
      </div>
    </section>
  );
}
