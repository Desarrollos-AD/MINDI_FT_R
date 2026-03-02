import "./Servicios.scss";
import arqui_1 from "../../assets/img/arquitectura_1.jpg";
import arqui_2 from "../../assets/img/arquitectura_2.webp";
import arqui_3 from "../../assets/img/arquitectura_3.jpg";
import inge_1 from "../../assets/img/ingenieria_1.jpeg";
import inge_2 from "../../assets/img/ingenieria_2.jpg";
import inge_3 from "../../assets/img/ingenieria_3.jpg";
import info_3 from "../../assets/img/info_3.avif";
import info_1 from "../../assets/img/info_1.jpg";
import info_2 from "../../assets/img/info_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import mante_3 from "../../assets/img/mante_3.jpg";
import mante_1 from "../../assets/img/mante_1.jpg";
import mante_2 from "../../assets/img/mante_2.jpg";

function Servicios() {
  return (
    <>
      <section class="servicios">
        <div className="titulo">
          <div className="contenedor">
            <h2>
              <span>Nuestros</span> <br />- Servicios
            </h2>
          </div>
        </div>

        <div className="servicios__cards">
          <div className="servicios__cards--card">
            <h4>01</h4>
            <h3>Arquitectura</h3>
          </div>
          <div className="servicios__cards--card">
            <h4>02</h4>
            <h3>Ingeniería</h3>
          </div>
          <div className="servicios__cards--card">
            <h4>03</h4>
            <h3>Tecnología</h3>
          </div>
          <div className="servicios__cards--card">
            <h4>04</h4>
            <h3>Mantenimiento</h3>
          </div>
        </div>

        <section class="slide servicio">
          <div className="contenedor">
            <h2 className="servicio__uno--titulo">
              <span>Servicios de</span> <br />- Arquitectura
            </h2>
            <div className="servicio__uno">
              <div className="servicio__uno--contenido">
                <h4>
                  Diseño, remodelación y adecuación de espacios industriales y
                  comerciales.
                </h4>
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Instalación y remodelación de edificaciones prefabricadas
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Edificios comerciales y oficinas
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Dibujo técnico
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Diseño y decoración de interiores
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Renovación estructural y acabados
                  </li>
                </ul>
                <h4>
                  Espacios funcionales que combinan eficiencia, estética y
                  durabilidad.
                </h4>
                <div className="cajas__decaraccion">
                  <div className="cajas__decaraccion--uno"></div>
                  <div className="cajas__decaraccion--dos"></div>
                  <div className="cajas__decaraccion--tres"></div>
                </div>
              </div>
              <div className="servicio__uno--img">
                <img
                  className="uno_img1"
                  src={arqui_1}
                  alt="Servicio Arquitectura"
                />
                <div className="uno__contenedor">
                  <img
                    className="uno_img3"
                    src={arqui_3}
                    alt="Servicio Arquitectura"
                  />
                  <img
                    className="uno_img2"
                    src={arqui_2}
                    alt="Servicio Arquitectura"
                  />
                  <div className="caja"></div>
                </div>
                <div className="caja2"></div>
              </div>
              <div className="caja"></div>
            </div>
          </div>
        </section>

        <section class="slide servicio">
          <div className="contenedor">
            <h2 className="servicio__dos--titulo">
              <span>Servicios de </span> <br />- Ingeniería
            </h2>
            <div className="servicio__dos">
              <div className="servicio__dos--contenido">
                <h4>
                  Soluciones técnicas especializadas para infraestructura
                  industrial y sistemas de control.
                </h4>
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Ingeniería de infraestructura y carreteras
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Inspección de instalaciones y equipos
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Ingeniería y diseño de sistemas de control de procesos
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Instalación y mantenimiento de motores
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Reparación de componentes de maquinaria
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Inspección y mantenimiento industrial
                  </li>
                </ul>
                <h4>
                  Enfoque técnico con estándares de seguridad y cumplimiento
                  normativo.
                </h4>
                <div className="servicio__dos--contenido--img">
                  <img src={inge_2} alt="Servicio Ingeniería" />
                  <img src={inge_3} alt="Servicio Ingeniería" />
                </div>
              </div>
              <div className="servicio__dos--img">
                <img src={inge_1} alt="Servicio Ingeniería" />
              </div>
            </div>
          </div>
        </section>

        <section class=" slide servicio ">
          <div className="contenedor ">
            <h2 className="servicio__tres--titulo">
              <span>Tecnologías de la</span> <br />- Información
            </h2>
            <div className="servicio__tres">
              <div className="servicio__tres--contenido">
                <h4>
                  Integración y soporte tecnológico para operación empresarial.
                </h4>
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Diseño e implementación de aplicaciones
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Integración de sistemas
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Administración de software y redes
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Programación de bases de datos (ERP)
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Soporte y mantenimiento de hardware
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Implementación de soluciones tecnológicas
                  </li>
                </ul>
                <h4>
                  Conectamos infraestructura física con sistemas digitales.
                </h4>
                <div className="servicio__tres--contenido--img">
                  <img
                    className="tres_img1"
                    src={info_2}
                    alt="Servicio Tecnologías de la información"
                  />
                  <img
                    className="tres_img2"
                    src={info_1}
                    alt="Servicio Tecnologías de la información"
                  />
                </div>
              </div>
              <div className="servicio__tres--img">
                <img
                  className="tres_img1"
                  src={info_3}
                  alt="Servicio Arquitectura"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="slide servicio ">
          <div className="contenedor servicio__cuatro">
            <h2 className="servicio__cuatro--titulo">
              <span>Servicios de </span> <br />- Construcción
            </h2>
            <div className="">
              <div className="servicio__cuatro--contenido">
                <h4>
                  Ejecución y supervisión de obra civil con control integral.
                </h4>
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Construcción de inmuebles comerciales, institucionales e
                    industriales
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Remodelación y adecuación de espacios
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Instalación de estructuras y sistemas constructivos
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Supervisión e inspección de obra
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faHelmetSafety} />
                    </span>
                    Coordinación integral de proyectos
                  </li>
                </ul>
                <h4>
                  Compromiso con estándares de seguridad y calidad constructiva.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section class="slide servicio">
          <div className="contenedor">
            <h2 className="servicio__cinco--titulo">
              <span>Mantenimiento</span> <br />- Integral
            </h2>
            <div className="servicio__cinco--contenido">
              <div className="servicio__cinco--left">
                <div className="left--info">
                  <div className="">
                    <h4>Mantenimiento de Inmuebles Públicos y Privados</h4>
                    <ul>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faHelmetSafety} />
                        </span>
                        Conservación de instalaciones eléctricas, hidráulicas y
                        sanitarias
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faHelmetSafety} />
                        </span>
                        Mantenimiento preventivo y correctivo
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faHelmetSafety} />
                        </span>
                        Pintura, acabados y renovación estructural
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faHelmetSafety} />
                        </span>
                        Inspección técnica especializada
                      </li>
                    </ul>
                  </div>
                  <div className="servicio_cinco--contenido--img">
                    <img
                      src={mante_3}
                      alt="Servicio de Mantenimiento Integral"
                    />
                  </div>
                </div>
              </div>
              <div className="servicio__cinco--right">
                <div className="servicio__cinco">
                  <div className="right--info">
                    <div className="servicio__cinco--contenido--img">
                      <img
                        src={mante_1}
                        alt="Servicio de Mantenimiento Integral"
                      />
                      <img
                        src={mante_2}
                        alt="Servicio de Mantenimiento Integral"
                      />
                    </div>
                    <div className="">
                      <h4>Mantenimiento Automotriz y Transporte</h4>
                      <ul>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                          </span>
                          Reparación y mantenimiento automotor
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                          </span>
                          Mantenimiento de camiones ligeros y pesados
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                          </span>
                          Servicio de transmisiones
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                          </span>
                          Pintura y hojalatería
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                          </span>
                          Inspección, empaque y logística de carga
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Servicios;
