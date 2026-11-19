import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="brand">Jhian Gabriel Barnacha</NavLink>
      <nav aria-label="Main">
        <ul className="nav">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
