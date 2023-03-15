import { Routes, Route } from "react-router-dom";
import P_Inicio from "../pages/P_Inicio";
import AiFillHome from "../components/Sidebar";
import Mision from "../pages/Mision";
import Vision from "../pages/Vision";
import Servicios from "../pages/Servicios.jsx";
export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<P_Inicio /> } />
      <Route path="/src/pages/Servicios.jsx" element={<Servicios />} />
      <Route path="/src/pages/Mision.jsx" element={<Mision />}></Route>
      <Route path="/src/pages/Vision.jsx" element={<Vision />}></Route>
      <Route path="/" element={<AiFillHome />} />
    </Routes>
  );
}
