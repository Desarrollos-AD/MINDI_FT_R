import "./Nosotros.scss";
import Galeria from "../Galeria/Galeria1";
import Galeria2 from "../Galeria/Galeria2";
import o1 from "../../assets/img/o1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import trabajador from "../../assets/img/trabajador.png";
import valores from "../../assets/img/valores.avif";

// import o4 from "../../assets/img/o4.png";

function Nosotros() {
  return (
    <section>
      <div className="titulo">
        <div className="contenedor">
          <h2>
            <span>Sobre</span> <br />- Nosotros
          </h2>
        </div>
      </div>

      <Galeria2 />
      <Galeria />

      <div className="acerca">
        <div className="contenedor">
          <div className="acerca__contenido">
            <div className="acerca__contenido--left">
              <div className="subtitulo">
                <h3>¿Quiénes Somos?</h3>
              </div>
              <p>
                Somos una empresa mexicana multidisciplinaria especializada en
                integrar ingeniería, arquitectura, tecnologías de la información
                y mantenimiento de equipo de transporte.
              </p>
              <ul>
                <FontAwesomeIcon icon={faCircleCheck} />
                <li>Trabajamos con una visión integral:</li>
              </ul>
              <p>
                Reducir fricción operativa, tiempos muertos y costos de
                coordinación mediante una gestión centralizada y trazable.
              </p>
              <ul>
                <FontAwesomeIcon icon={faCircleCheck} />
                <li>
                  Acompañamos a nuestros clientes en todo el ciclo de vida del
                  proyecto:
                </li>
              </ul>
            </div>

            <div className="acerca__contenido--right">
              <img src={o1} alt="Imagen Edificio" />
            </div>
          </div>
        </div>

        <div className="separador__flecha">
          <p>Diagnóstico</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>Diseño</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>Instalación</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>Integración</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>Mantenimiento</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>Soporte</p>
        </div>

        <div className="contenedor">
          <div className="valor">
            <div className="valor__contenido">
              <div className="subtitulo">
                <h3>Propuesta de Valor</h3>
              </div>
              <div className="valor__contenido--texto">
                <p>
                  Un solo proveedor para resolver necesidades técnicas diversas.
                  Desde infraestructura física hasta integración tecnológica y
                  mantenimiento especializado automotriz asi como inmobiliario.
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Coordinación simplificada
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Cumplimiento normativo
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Trazabilidad en cada etapa
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} /> Garantía en cada
                    entrega
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} /> Tiempos de
                    respuesta confiables
                  </li>
                </ul>
              </div>
            </div>
            <div className="valor__img">
              <img src={trabajador} alt="Trabajador" />
            </div>
          </div>
        </div>

        <div className="empresarial">
          <div className="contenedor valores">
            <div className="contenedor">
              <h4>Nuestros Valores</h4>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Integridad
                </h5>
                <p>Actuamos con transparencia y ética profesional.</p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Calidad
                </h5>
                <p>
                  Entregamos resultados que cumplen y superan estándares
                  técnicos.
                </p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Seguridad
                </h5>
                <p>
                  Priorizamos la protección de personas, instalaciones y
                  procesos.
                </p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Orientación al cliente
                </h5>
                <p>Escuchamos, entendemos y resolvemos.</p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Innovación práctica
                </h5>
                <p>Soluciones eficientes aplicadas a la realidad operativa.</p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Eficiencia operativa
                </h5>
                <p>Optimización de recursos, tiempos y procesos.</p>
              </div>
              <div className="">
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  Trabajo en equipo
                </h5>
                <p>Coordinación multidisciplinaria para resultados sólidos.</p>
              </div>
            </div>
          </div>
          <div className="contenedor">
            <div className="mision">
              <div className="contenedor">
                <h4>Misión</h4>
                <p>
                  Impulsar la continuidad operativa y el crecimiento de nuestros
                  clientes mediante soluciones integrales de ingeniería,
                  arquitectura y tecnologías, entregadas con calidad, seguridad
                  y tiempos de respuesta confiables.
                </p>
              </div>
            </div>
            <div className="vision">
              <div className="contenedor">
                <h4>Visión</h4>
                <p>
                  Ser el aliado técnico de referencia en la región para
                  proyectos integrales que combinen infraestructura física y
                  sistemas tecnológicos, reconocidos por nuestra capacidad de
                  integrar diseño, instalación y mantenimiento bajo una sola
                  responsabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
