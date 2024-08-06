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

        <section className="bg-[url('/bird.svg')] h-[500px] min-w-screen bg-center bg-cover pt-10">
          <div className="pt-7">
            <h1 className='font-["Julius Sans One"] font-light  text-[#FFF67E] sm:text-4xl whitespace-break-spaces text-xl w-[250px] pl-6]'>
              Senderos y Biodiversidad CundiBoyacense
            </h1>
          </div>
          <div id="sobrenosotros" className="h-[600px]"></div>
        </section>

        <section>
          <article className="text-white bg-gray-600 ">
            <div className="gap-3 p-6 sm:flex">
              <div className=" sm:grid sm:mt-9 ">
                <h2 className="text-2xl text-[#FFF67E] sm:h-[50px]">
                  Quienes somos
                </h2>
                <div className="sm:w-[400px]">
                  <p className="font-light text-[#BFEA7C] ">
                    Descubre la riqueza única de la biodiversidad en Cundinamarca
                    y Boyacá. Esta región alberga especies únicas en el mundo y
                    varias endémicas, convirtiéndose en un tesoro natural
                    invaluable. Acompáñanos en un viaje por senderos accesibles
                    para conocer de cerca la flora, fauna y ecosistemas que hacen
                    de este lugar un paraíso biodiverso. ¡Explora, aprende y
                    celebra la naturaleza con nosotros!
                  </p>
                </div>
              </div>

              <div id="senderos" className="p-6">
                <img className="sm:h-[auto] w-[auto]" src="/imagen1.jpg" alt="" />
              </div>
            </div>
          </article>
        </section>
        
        <section className="">
            <div className=" h-[420px] grid gap-5 pl-2 bg-[#D8F8A7]">
              <h2 className="text-[#416D19] text-xl pt-5 font pl-3 md:text-5xl md:mt-6">
                Riqueza Verde
              </h2>
              <p className="text-[#243A10] md:p-4 md:text-xl">
                Descubre la biodiversidad única de Cundinamarca y Boyacá. Estas
                regiones colombianas, con sus páramos y bosques andinos,
                albergan especies endémicas como el frailejón y el reyezuelo de
                frente roja. Su flora y fauna no solo enriquecen nuestro
                entorno, sino que también mantienen el equilibrio ecológico.
                Proteger estas especies es crucial para conservar nuestro
                patrimonio natural y asegurar que las futuras generaciones
                disfruten de esta belleza. Únete a nosotros para celebrar y
                preservar la biodiversidad de Cundinamarca y Boyacá.
              </p>
            </div>
          </section>

          
      </div>

    </>
  )
}

export default App
