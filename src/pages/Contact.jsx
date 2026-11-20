import usePageTitle from "../hooks/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <section className="page">
      <div className="space-y-3">
        <h1 className="page-title">Contact</h1>
        <p className="body-text">Want to work together or just say hello? Reach me here:</p>
      </div>
      <ul className="max-w-xl space-y-3">
        <li className="card text-muted">
          Email:{" "}
          <a className="link break-words" href="mailto:jhiangabriel@gmail.com">jhiangabriel@gmail.com</a>
        </li>
        <li className="card text-muted">
          GitHub:{" "}
          <a className="link break-words" href="https://github.com/LGian30">github.com/LGian30</a>
        </li>
      </ul>
    </section>
  );
}
