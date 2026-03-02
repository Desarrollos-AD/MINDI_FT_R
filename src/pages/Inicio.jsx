import Header from "../components/layout/Header/Header";
import Nosotros from "../components/Nosotros/Nosotros";
import Servicios from "../components/Servicios/Servicios";
import Contacto from "../components/Contancto/Contacto";
import Footer from "../components/layout/Footer/Footer";
import "./Inicio.scss";
function Inicio() {
  return (
    <>
      <main>
        <Header />
        <Nosotros />
        <Servicios />
        <Contacto/>
        <Footer/>
      </main>
    </>
  );
}
export default Inicio;
