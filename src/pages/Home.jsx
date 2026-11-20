import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m Jhian Gabriel. I build things for the web.</h1>
        <p className="lead">
          I’m a developer who enjoys turning ideas into simple, usable
          websites. Take a look at what I’ve made, or get in touch.
        </p>
        <p className="actions">
          <Link className="button" to="/projects">See my projects</Link>
          <Link className="button ghost" to="/contact">Contact me</Link>
        </p>
      </div>


      <div className="avatar">
        <span className="avatar-fallback" aria-hidden="true">J</span>
        <img
          src="/images/profile.png"
          alt="Portrait of Jhian Gabriel"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
    </section>
  );
}
