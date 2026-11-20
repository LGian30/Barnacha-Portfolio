import usePageTitle from "../hooks/usePageTitle.js";

// Full class names are written out so Tailwind can find them.
const groups = [
  { title: "Front end", tag: "bg-cyan/12 text-cyan", items: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Databases", tag: "bg-purple/15 text-purple", items: ["MongoDB", "MySQL"] },
  { title: "Tools", tag: "bg-green/12 text-green", items: ["Git & GitHub"] },
];

export default function About() {
  usePageTitle("About");

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl">About me</h1>
      </div>

      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">Background</h2>
        <div className="mt-3 max-w-prose space-y-4 text-muted">
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

      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className={`rounded-full px-3 py-1 font-mono text-sm font-semibold ${g.tag}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
