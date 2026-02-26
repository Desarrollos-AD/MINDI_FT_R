import "./Nav.scss";
import { useState, useEffect } from "react";

function Nav() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (index) => {
    if (window.innerWidth > 1025) return;

    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1025) {
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="header__navigation">
      <ul className="navbar__list">
        <li
          className={`navbar__list-item ${activeSubmenu === 0 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(0)}
        >
          <a href="#!">Inicio</a>
        </li>

        <li
          className={`navbar__list-item ${activeSubmenu === 1 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(1)}
        >
          <a href="#!">Servicios</a>
        </li>

        <li
          className={`navbar__list-item ${activeSubmenu === 2 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(2)}
        >
          <a href="#!">Sobre Nosotros</a>
        </li>

        <li
          className={`navbar__button navbar__list-item ${activeSubmenu === 3 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(3)}
        >
          <a href="#!">
            Contacto <ArrowIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M0.5 6.99996H15.5M15.5 6.99996L9.66667 1.16663M15.5 6.99996L9.66667 12.8333"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Nav;
