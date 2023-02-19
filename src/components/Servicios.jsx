
import Decoracion from '../img/collage_decora.jpeg';
import Juegos from '../img/collage_juegos.jpeg';
import Mobiliario from '../img/collage_mobiliario.jpeg';
import Comida from '../img/collage_comidas.jpeg';

export default function Servicios() {
    return (
    <>
    <div class="flex min-h-screen items-center justify-center bg-rose-200">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img src={Decoracion} class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" alt=""  />
                </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            </div>
            <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h2 class="font-dmserif text-3xl font-bold text-white">Servicio de Decoracion con tematica para cualquier tipo de evento</h2>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Mas Informacion</button>
            </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img src={Comida} class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 class="font-dmserif text-3xl font-bold text-white">Servicio de Alimentacion, Bouquets y Detalle Sorpresa </h2>
                    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Mas Informacion</button>
                </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img src={Juegos} class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 class="font-dmserif text-3xl font-bold text-white">Alquiler de Juegos Infantiles</h2>
                    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Mas Informacion</button>
                </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img src={Mobiliario} class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 class="font-dmserif text-3xl font-bold text-white">Alquiler de Mobiliarios, Mesas tablon, manteleria, sillas, carpas</h2>
                    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://wa.me/573234701672" class="text-blue-500">Mas Informacion</a></button>
                </div>
            </div>
        </div>
    </div>

    </>
    )
}