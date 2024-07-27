import './App.css'

function App() {

  return (
    <>
      <div>
        <header>
          <div className='border-white-700 border-2 text-[#BFEA7C] h-[64px] bg-[#416D19] flex justify-between items-center px-4 text-normal font-semibold '>
            <ul className='flex gap-3 border-white-700 border-2'>
              <li className='text-xl cursor-pointer'>BioCundi</li>
            </ul>
            <ul className='flex gap-3 border-white-700 border-2 cursor-pointer'>
              <li><i className='bx bxs-map'></i> Senderos</li>
              <li><i className='bx bx-phone'></i> Mapas</li>
              <li><i className='bx bx-phone'></i> Animales</li>
              <li><i className='bx bx-phone'></i> Paisajes</li>
            </ul>
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
