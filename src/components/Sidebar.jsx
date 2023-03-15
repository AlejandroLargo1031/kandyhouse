import { Link } from "react-router-dom";
import {
  AiFillPlayCircle,
  AiFillMediumCircle,
  AiFillHome,
  AiFillEye,
} from "react-icons/ai";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          open ? "w-60" : "w-20"
        } h-screen border-r-4 duration-300 p-5 pt-8 border-white bg-rose-300 relative`}
      >
        <AiFillPlayCircle
          color="white"
          className={`absolute transition hover:-translate-y-1 delay-300 duration-300 ease-in-out cursor-pointer color-white rounded-full right-4 top-15 w-9 h-9 border-2 border-yellow-400 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        ></AiFillPlayCircle>
        <div className="flex gap-x-6 items-center">
          <Link to="/">
            <AiFillHome
              color="white"
              className={`cursor-pointer w-6 h-6 ${!open && "scale-0"}`}
            ></AiFillHome>
          </Link>
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Kandy House
          </h1>
        </div>
        <div>
          <ul className="pt-6">
            <li
              className={`text-white text-sm grid-cols-1 items-center gap-x-4 cursor-pointer `}
            >
              <Link to="/src/pages/Mision.jsx">
                <div className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md">
                  <AiFillMediumCircle
                    color="white"
                    className={`cursor-pointer w-6 h-6 `}
                  ></AiFillMediumCircle>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Mision
                  </span>
                </div>
              </Link>
              <Link to="/src/pages/Vision.jsx">
              <div className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md">
                <AiFillEye
                  color="white"
                  className={`cursor-pointer w-6 h-6 `}
                ></AiFillEye>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Vision

                </span>
              </div>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;