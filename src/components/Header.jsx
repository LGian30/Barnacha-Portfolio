import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  // Close the phone menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the menu and returns focus to the button
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 px-4 py-3 md:py-4">
        <Link to="/" className="min-w-0 font-mono text-base font-bold tracking-wide text-cyan sm:text-lg">
          Jhian Gabriel Barnacha
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-line text-ink hover:bg-panel2 md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav aria-label="Main" className="w-full md:w-auto">
          <ul id="main-nav" className={`${open ? "flex" : "hidden"} flex-col gap-1 pt-3 md:flex md:flex-row md:pt-0`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `block rounded-lg border px-4 py-2.5 transition-colors ${
                      isActive
                        ? "border-cyan bg-cyan/10 text-cyan"
                        : "border-transparent text-muted hover:bg-panel2 hover:text-ink"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
