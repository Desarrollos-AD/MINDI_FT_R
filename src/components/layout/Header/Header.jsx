import Nav from "../../Nav/Nav";
import { useState, useEffect } from "react";
import logo from "../../../assets/mindi.png";
import logoMindi from "../../../assets/img/logo-mindi.png";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1025) {
        setMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header className="header">
        <div className="navbar">
          <div className="contenedor">
            <div className="header__wrapper">
              <a
                href="https://bato.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="header__logo"
              >
                <img loading="lazy" src={logo} alt="Logo Mindi" />
              </a>

              <div
                className={`header__navigation-wrapper ${menuOpen ? "open" : ""}`}
              >
                <Nav />
              </div>

              <div
                className={`header__burger ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>

        <div className="left"></div>

        <div className="right">
          <div className="contenedor">
            <div className=" right__img">
              <img src={logoMindi} alt="Logo mindi" />
            </div>
            <h1> MINDI Soluciones Empresariales</h1>
            <h4>
              Mantenimiento Soluciones técnicas integrales para industria,
              comercio y sector público.
            </h4>
            <div className="right__etiquetas">
              <p> Un solo proveedor.</p>
              <p> Una sola responsabilidad.</p>
              <p> Resultados medibles.</p>
            </div>
          </div>
        </div>
      </header>
      {/* 
      <section>
        <div className="contenedor">
          <div className="left__flotantes left__flotantes--item1">
            <p>Ingeniería</p>
          </div>
          <div className="left__flotantes left__flotantes--item2">
            <p>Arquitectura </p>
          </div>
          <div className="left__flotantes left__flotantes--item3">
            <p>Tecnología </p>
          </div>
          <div className="left__flotantes left__flotantes--item4">
            <p>Mantenimiento</p>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Header;
