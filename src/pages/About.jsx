const skills = ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "MongoDB", "MySQL"];

export default function About() {
  return (
    <section>
      <h1>About me</h1>
      <p>
        I’m a student learning web development. I like building small,
        practical projects and I’m working towards becoming a full-stack
        developer. Outside of code, I enjoy learning new things and
        solving problems.
      </p>
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
