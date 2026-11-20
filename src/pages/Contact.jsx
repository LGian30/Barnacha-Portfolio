import usePageTitle from "../hooks/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <section>
      <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-prose text-muted">Want to work together or just say hello? Reach me here:</p>
      <ul className="mt-6 max-w-xl space-y-3">
        <li className="rounded-xl border border-line bg-panel px-4 py-3 text-muted">
          Email:{" "}
          <a className="break-words text-cyan underline" href="mailto:jhiangabriel@gmail.com">jhiangabriel@gmail.com</a>
        </li>
        <li className="rounded-xl border border-line bg-panel px-4 py-3 text-muted">
          GitHub:{" "}
          <a className="break-words text-cyan underline" href="https://github.com/LGian30">github.com/LGian30</a>
        </li>
      </ul>
    </section>
  );
}
