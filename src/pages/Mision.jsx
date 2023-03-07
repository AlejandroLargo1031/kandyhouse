import React from "react";
import logo from "../img/logo-sinfondo.png";
function Mision() {
    return (
    <>
    
    <div className=" place-items-center p-5 bg-rose-300 grid ">
    <div className= "justify-center bg-white h-50 p-5 rounded-xl">
        <h1 className="text-4xl text-center font-serif italic ">
           Mision 
            
            
            
        </h1>

         <h1 className=" text-center ">
         <p className="text-3xl leading-8 font-serif italic "> Ofreciendo cada vez un servicio mas completo para nuestros clientes, 
          satisfaciendo todas sus necesidades en el area, teniendo siempre como  base principal la guia divina de nuestro Dios quien nos otorga valores y virtudes tales como la paciencia, 
            la dedicacion, la   responsabilidad, la empatia, la honestidad y el amor, con las cuales podremos garantizar un exelente servicio y una complera satisfaccion de nuestros clientes.</p>
         </h1>
         <div className="bg-white flex justify-center">
            <img
              className="rounded-xl object-center"
              src={logo}
            />
          </div>
         
         </div> 
        
    </div>
    </>
    )
}
export default Mision