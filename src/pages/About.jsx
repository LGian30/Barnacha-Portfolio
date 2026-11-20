import usePageTitle from "../hooks/usePageTitle.js";

// Full class names are written out so Tailwind can find them.
const groups = [
  { title: "Front end", tone: "bg-cyan/12 text-cyan", items: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Databases", tone: "bg-purple/15 text-purple", items: ["MongoDB", "MySQL"] },
  { title: "Tools", tone: "bg-green/12 text-green", items: ["Git & GitHub"] },
];

export default function About() {
  usePageTitle("About");

  return (
    <section className="page">
      <h1 className="page-title">About me</h1>

      <div className="space-y-3">
        <h2 className="section-title">Background</h2>
        <div className="body-text space-y-4">
          <p>
            I’m a student learning web development. I like building small,
            practical projects and I’m working towards becoming a full-stack
            developer.
          </p>
          <p>
            My latest project is PROFIT, a fitness tracker that logs workouts
            and uses AI to suggest training plans. It’s where I put my React
            and database skills to work. Outside of code, I enjoy learning new
            things and solving problems.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="space-y-2">
              <h3 className="card-title">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className={`tag ${g.tone}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
