import Header from "../components/layout/Header/Header";
import Nosotros from "../components/Nosotros/Nosotros";
import Servicios from "../components/Servicios/Servicios";
import "./Inicio.scss";
function Inicio() {
  return (
    <>
      <main>
        <Header />
        <Servicios />
        <Nosotros />
      </main>
    </>
  );
}
export default Inicio;
