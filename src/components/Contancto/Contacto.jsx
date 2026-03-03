import "./Contacto.scss";
import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.tarjet.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!form.email.include("@")) {
      setError("Email inválido");
      return;
    }

    setError("");
    setEnviado(true);

    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contenedor">
        <h2 className="contacto__titulo">Contáctenos</h2>

        <div className="informacion">
          <div className="informacion__contenido">
            <h4>Hablemos de tu proyecto</h4>
            <p>Cada proyecto comienza con una conversación clara.</p>
            <p>
              Cuéntanos tus necesidades y diseñemos juntos una solución
              integral, eficiente y alineada a tus objetivos operativos.
            </p>
            <p>
              Nuestro equipo está listo para brindarte asesoría técnica,
              seguimiento puntual y una propuesta a la medida.
            </p>
            {enviado && (
              <p className="success">Mensaje enviado correctamente</p>
            )}
            {error && <p className="error">{error}</p>}
          </div>
          <form
            className="informacion__formulario"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form">
              <div className="form__group">
                <div className="form__group--item">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form__group--item">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form__group--textArea">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje..."
                  rows="5"
                />
              </div>

              <button type="submit" className="btn__secundario">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.3949562751823!2d-96.13189145255286!3d19.198369959871254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c346bf5035aa5b%3A0x44168a7148a2da30!2sMXGA%20Veracruz!5e0!3m2!1ses-419!2smx!4v1772470637290!5m2!1ses-419!2smx"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;
