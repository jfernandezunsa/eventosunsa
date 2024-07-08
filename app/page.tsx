
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const App = () => {
  return (
    <>
      {/* incio header  */}
      <div className="fixed w-full top-0 left-0 z-40">
        <header className="bg-[#051F43] hidden sm:block p-3">
          <div className="text-white text-sm tracking-tight flex place-content-between items-center sm:max-w-[1200px] sm:m-auto">
            <p className="flex gap-1"><Mail size={20} /> fad_upg@unsa.edu.pe</p>
            <p className="flex gap-1">
              <Phone size={20} /> +01 959644577
              <MapPin size={20} />Campus Ingenierias Av. Venezuela s/n - Arequipa</p>
          </div>
        </header>

        <nav className="flex place-content-between items-center lg:max-w-[1200px] m-auto bg-white p-6 border-b-2 border-[#051F43] shadow-lg">
          <div className="flex items-center gap-3">
            <img src="logo-unsa.svg" alt="" className="h-14" />
            <div className="font-montserrat font-extrabold text-[19px] leading-5 tracking-tight text-balance max-w-[450px] hidden sm:block">
              <h2 className="text-sm text-gray-600">Facultad de Administración</h2>
              <h6>Unidad de Posgrado</h6>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="hidden lg:flex gap-5">
              <li><a href="#">Text 1</a></li>
              <li><a href="#">Text 2</a></li>
              <li><a href="#">Text 3</a></li>
              <li><a href="#">Text 4</a></li>
            </ul>
            <span className="material-symbols-outlined lg:hidden">menu</span>
          </div>
        </nav>
      </div>
      {/* fin header  */}

      {/* <!-- Inicio Hero   --> */}

      <section className="bg-[#051F43] h-[70vh] bg-center bg-cover mt-[106px] sm:mt-[152px]" style="background-image:url(./public/administracion-unsa.webp)">

        <div className="h-[70vh] sm:h-[70vh] bg-cover w-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#051f4380] from-0% to-[#051F43] to-70% flex items-center place-content-center">
          <div className="
      text-white 
      font-montserrat 
      mx-10 
      sm:mx-14 
      sm:max-w-[500px] 
      md:max-w-[500px] 
      lg:max-w-[900px] 
      flex 
      flex-col 
      gap-4 
      sm:gap-6 
      md:gap-10">
            <h6 className="font-light lg:font-bold text-2xl leading-7 md:text-3xl lg:text-4xl sm:text-center">Congreso
              Internacional</h6>
            <h5 className="font-bold lg:font-extrabold text-3xl md:text-4xl lg:text-5xl leading-9 lg:leading-tight sm:text-center text-balance">
              II Encuentro de Economía Solidaria e Innovación Socio Ecológica</h5>
            <div className="sm:flex place-content-between lg:mx-20">
              <p className="text-primary-light">07 - 08 Octubre 2024 Arequipa, Perú</p>
              <a href="#" className="p-4 bg-[#D90B4f] sm:mt-0  mt-4 inline-block">Registrate</a>
            </div>
          </div>
      </section>
      <main>
        {/* <!-- Fin Hero   --> */}

      </>
      )
}

      export default App
