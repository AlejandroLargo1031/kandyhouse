import React from "react";
import logo from "../img/logo-sinfondo.png";
export default function Vision() {
  return (
    <>

    
    <div className=" place-items-center p-5 bg-rose-300 grid ">
    <div className= "justify-center bg-white h-50 p-5 rounded-xl">
        <h1 className="text-4xl text-center font-serif italic ">
           Visión 
            
            
            
        </h1>

         <h1 className=" text-center ">
         <p className="text-3xl leading-8 font-serif italic "> Nos vemos posicionados en el mercado como la casa de eventos más completa a nivel local y nacional.
         Generando empleo a muchas familias y siendo los preferidos de millones de personas, por nuestra calidad de servicio.</p>
         </h1>
         <div className="bg-white flex justify-center">
            <img
              className="rounded-xl object-center"
              src={logo}
            />
          </div>
         
         </div> 
        
    </div>

    
  
      <div className="h-screen w-full place-items-center p-5 bg-rose-300 grid ">
        <div className="justify-center bg-white h-3/6 p-8 rounded-xl">
          <h1 className="text-4xl text-center">Vision</h1>

          <h1 className="text-center">
            <p className="text-3xl leading-8  ">
              {" "}
              Nos vemos posicionados en el mercado como la casa de eventos mas
              completa a nivel local y nacional. nos vemos generando empleo a
              muchas familias y siendo los preferidos de millones, por nuestra
              calidad de servicio.
            </p>
          </h1>
        </div>
      </div>

    </>
  );
}
