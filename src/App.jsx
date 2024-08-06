import { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importar estilos de Leaflet
import L from "leaflet"; // Importar Leaflet para solucionar problema de iconos


function App() {
  const [menu, setMenu] = useState(false);
  const submitShowMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div>
        <header>
           <div className="fixed text-[#BFEA7C] h-[64px] bg-[#416D19] flex justify-between w-full items-center px-4 text-normal font-semibold">
          <ul className="gap-3 ">
            <li className="text-xl cursor-pointer">BioCundi</li>
          </ul>
          <ul className="cursor-pointer sm:flex hidden sm:gap-3">
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#sobrenosotros">Sobre nosotros</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#senderos">Senderos</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="">Experiencias</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="">Paisajes</a>
            </li>
          </ul>
          <button onClick={() => submitShowMenu()} className="sm:hidden">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/menu--v3.png"
              alt="menu--v3"
            />
          </button>
          <section
            className={`fixed flex justify-center items-center transition-opacity    ${
              menu
                ? "opacity-100 visible z-20 durarion-200"
                : "opacity-0 invisible duration-200 "
            }`}
          >
            <div className="h-[200px] w-screen fixed top-[60px] bottom-0 right-0 left-0 bg-gradient-to-b from-[#416D19] to-[#9BCF53]">
              <ul className="grid ml-2 font-semibold  my-4 gap-10 text-[#FFF67E]">
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#sobrenosotros">Sobre nosotros</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#senderos">Senderos</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="">Experiencias</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        </header>
        
        <section className=''>
          <div className='border-white border-2'>
            <h1 className='text-[#FFF67E] text-5xl pt-10 pr-4'>Senderos y Biodiversidad
              CundiBoyacense</h1>
          </div>
        </section>

      </div>

    </>
  )
}

export default App
