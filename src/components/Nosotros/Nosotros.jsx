import "./Nosotros.scss";
import Galeria from "../Galeria/Galeria";
import o1 from "../../assets/img/o1.png";
// import o4 from "../../assets/img/o4.png";

function Nosotros() {
  return (
    <section>
      <div className="subtitulo">
        <div className="contenedor">
          <h2>
            <span>Sobre</span> <br />- Nosotros
          </h2>
        </div>
      </div>

      <Galeria />
      <Galeria />

      <div className="acerca">
        <div className="contenedor">
          <div className="acerca__contenido">
            <div className="acerca__contenido--left">
              <h3>Quiénes Somos</h3>

              <p>
                Somos una empresa mexicana multidisciplinaria especializada en
                integrar ingeniería, arquitectura, tecnologías de la información
                y mantenimiento de equipo de transporte. Trabajamos con una
                visión integral: reducir fricción operativa, tiempos muertos y
                costos de coordinación mediante una gestión centralizada y
                trazable. Acompañamos a nuestros clientes en todo el ciclo de
                vida del proyecto:
              </p>
              <p>
                Diagnóstico · Diseño · Instalación · Integración · Mantenimiento
                · Soporte
              </p>
            </div>
            <div className="acerca__contenido--right">
              <img src={o1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
