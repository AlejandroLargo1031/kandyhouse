import { Routes, Route } from "react-router-dom";
import P_Inicio from "../pages/P_Inicio";
import AiFillHome from "../components/Sidebar";
import Mision from "../pages/Mision";

export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<P_Inicio />} />
      <Route path="/src/pages/Mision.jsx" element={<Mision />}></Route>
      <Route path="/" element={<AiFillHome />} />
    </Routes>
  );
}
