import { Routes, Route } from "react-router-dom";
import Terminos from "../pages/Terminos/Terminos";
import Inicio from "../pages/Inicio";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
}

export default AppRouter;