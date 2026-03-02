import "./Footer.scss";
import logo from "../../../assets/mindi.png";
import { useState, useEffect } from "react";

function Footer() {
  const anio = new Date().getFullYear();

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
    <>
      <footer>
        <div className="contenedor">
          <div className="footer">
            <div className="footer__right">
              <img src={logo} alt="Logo Mindi" />
            </div>
            <div className="footer__left">
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
                    <a href="#!">Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="pie">
            <p>© {anio} Logística. Todos los derechos reservados.</p>
            <a href="../../../../public/Aviso de privacidad - MINDI.pdf">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
