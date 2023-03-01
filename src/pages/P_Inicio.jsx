import React from "react";
import fondo from "../img/logo.PNG";
import {Link} from "react-router-dom";
export default function P_Inicio() {
  return (
    <>
      <div className="w-full max-h-full p-2 bg-rose-300">
        <div className="max-w-full max-h-full rounded-xl p-8 bg-white">
          <div className="max-w-full max-h-full rounded-xl p-8 bg-white flex justify-center">
            <img
              className="rounded-xl border-2 border-yellow-400"
              src={fondo}
            />
          </div>
          <div className="flex justify-center">
            <h2 className="w-80 text-center">
              En KANDY HOUSE, tenemos un servicio cada vez mas completos con el
              fin de satisfacer todas tus necesidades para tus eventos, contamos
              con los siguientes servicios:
            </h2>
          </div>
        </div>
        <Link to= "../pages/Servicios.jsx"></Link>
      </div>
    </>
  );
}
