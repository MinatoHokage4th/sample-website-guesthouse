import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    //console.log("Navbar rendered, current path:", location.pathname);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/rooms", label: "Kamar" },
    { path: "/fasilitas", label: "Fasilitas" },
    { path: "/testimoni", label: "Testimoni" },
    // { path: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className={`navbar ${isOpen ? "mobile-open" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h2>
              Marviano <span>ExclusiveKost</span>
            </h2>
          </Link>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => {
            setIsOpen(!isOpen);
            //console.log("Hamburger toggled:", !isOpen);
          }}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Overlay untuk mobile */}
      <div
        className={`nav-overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
}
