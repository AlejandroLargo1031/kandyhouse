import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import image from "../img/logo-sinfondo.png";

export default function Footer() {
  return (
    <footer className="bg-rose-700">
      <div className="container mx-auto lg:px-8 flex justify-around">
        <div className="flex flex-col md:flex-row items-center space-x-24">
          <div className="flex w-full object-scale-down content-center">
            <img src={image} alt="Logo de la empresa" className=" w-40" />
          </div>
          <div className="mt-8 md:mt-12 lg:mt-16 text-rose-300 font-bold text-sm md:text-base ">
            <h2 className="font-extrabold text-rose-300 text-center ">Contactos</h2>
            <div className=" space-y-4 p-4">
            <div className="flex space-x-2">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 fill-rose-300">
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>+57 (323) 470-1672</p>
            </div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 fill-rose-300">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <p>kanddyhouse@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 fill-rose-300">
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Cra 121a #47-108, Ciudad Pacifica</p>
            </div>
            </div>
          </div>
          <div className=" md:justify-end w-full md:w-2/3 lg:w-3/4">
            <h2 className="font-extrabold text-rose-300 text-center">Redes Sociales</h2>
            
            <div className="flex items-center space-x-6 justify-center p-4">
              <a
                href="https://wa.me/573234701672"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp className="fill-rose-300 text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/kanddyhouse/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="fill-rose-300 text-4xl" />
              </a>
              <a
                href="https://www.facebook.com/kanddyhouse"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook className="fill-rose-300 text-4xl" />
              </a>
              <a
                href="https://www.tiktok.com/@kandyhouse532?_t=8a35QUIfwjW&_r=1"
                target="_blank"
                rel="noopener noreferrer">
                <FaTiktok className="fill-rose-300 text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
