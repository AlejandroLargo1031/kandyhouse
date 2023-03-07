import React from "react";
import logo from "../img/logo-sinfondo.png";
function Mision() {
  return (
    <>
      <div className="h-screen w-full place-items-center p-5 bg-rose-300">
        <div className="container mx-auto justify-center bg-white p-8 rounded-xl w-auto">
          <h1 className="text-4xl text-center font-serif italic ">Mision</h1>
          <div>
            <h1 className=" text-center text-3xl leading-7 font-serif italic w-full">
              
                Ofreciendo cada vez un servicio mas completo para nuestros
                clientes, satisfaciendo todas sus necesidades en el area,
                teniendo siempre como base principal la guia divina de nuestro
                Dios quien nos otorga valores y virtudes tales como la
                paciencia, la dedicacion, la responsabilidad, la empatia, la
                honestidad y el amor, con las cuales podremos garantizar un
                exelente servicio y una complera satisfaccion de nuestros
                clientes.
            </h1>
            <div className="flex p-5 justify-center"><img src={logo} className= "w-52"/></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mision;
