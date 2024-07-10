

import EjesTematicos from '@/components/custom/ejesTematicos'
import Iconos from '@/components/custom/iconos'
import PonentesBloque from '@/components/custom/ponentesBloque'
import TitleSection from '@/components/custom/titleSection'
import { Brain, CircleArrowRight, Clock4, Diameter, Mail, MapPin, Phone, PhoneCall } from 'lucide-react'
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
      {/* Inicio Hero */}
      <section className="bg-[#051F43] h-[70vh] mt-[106px] sm:mt-[148px] relative">
        <div className="w-full h-[70vh] [&>*]:object-cover [&>*]:w-full [&>*]:h-full absolute">
          <img src="administracion-unsa.webp" alt="" className="h-14" />
        </div>
        <div className="h-[70vh] sm:h-[70vh] bg-cover w-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#051f4380] from-0% to-[#051F43] to-70% flex items-center place-content-center absolute z-20">
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
              <p className="text-primary-light text-balance max-w-[250px]">07 - 08 Octubre 2024 Arequipa, Perú</p>
              <a href="#" className="p-4 bg-[#D90B4f] sm:mt-0  mt-4 inline-block">Registrate</a>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Hero */}
      <main className='font-lato text-base'>
        {/* Inicio presentacion */}
        <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px] ">
          <TitleSection title="Presentación" className='text-[#5E151E]' />
          <p className="md:text-lg mb-4">
            En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
            culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.</p>
          <p className="md:text-lg mb-4">
            La economía solidaria puede ser vista como un fenómeno socioeconómico complejo donde se articulan tres
            dimensiones distintas de análisis: el movimiento social, con un fuerte discurso ideológico, proclive a la
            construcción de un nuevo modelo de desarrollo; el paradigma científico con una particular vocación por generar
            teoría pertinente para dar cuenta de los fenómenos económicos alternativos; y el sector específico de nuestras
            economías donde convergen las distintas experiencias de base solidaria. En América Latina es posible observar un
            alto dinamismo en cualquiera de estas dimensiones de análisis, especialmente a partir del surgimiento de
            distintas redes que operan desde la sociedad civil y de la puesta en práctica de políticas públicas dirigidas al
            fortalecimiento del sector.</p>
          <p className="md:text-lg mb-4">
            La economía peruana continúa cambiando actualmente de acuerdo a las necesidades de empleo y de financiamiento
            tanto para los trabajadores como para las organizaciones, por lo que se requiere analizar el impacto de la
            economía solidaria y las diversas estrategias de innovación socio ecológica. Es importante mencionar que la
            economía peruana se continúa recuperando, dada las medidas de normalización de la actividad económica y porque
            ha mostrado indicios de mayor dinamismo en el inicio del año 2024. Asimismo, la innovación socio ecológica puede
            ayudar a medir iniciativas de sostenibilidad ambiental, social y de gobierno corporativo permitiendo
            contribuciones a los Objetivos de Desarrollo Sostenible.</p>
          <p className="md:text-lg">
            En este sentido la Unidad de Posgrado de la Facultad de Administración de la Universidad Nacional de San Agustín
            de Arequipa en colaboración con la Universidad Internacional de Andalucía – Grupo La Rábida convoca el Congreso
            Internacional denominado:“II ENCUENTRO DE ECONOMIA SOLIDARIA E INNOVACION SOCIO ECOLÓGICA”, para todos los
            interesados a participar en este Encuentro, ya sean del Perú y Latinoamérica. El mismo que se llevara a efecto
            los días 11 y 12 de octubre del 2024 en la ciudad de Arequipa.
          </p>
        </div>
        {/* Fin presentacion */}

        {/* Inicio Objetivos */}
        <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Objetivos" className='text-white' />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <Iconos icono={<Diameter color="#fff" size={70} />} texto="Incentivar la investigación y valorizar la incidencia de innovaciones de los participantes al congreso para <br>
                que generen vínculos entre los movimientos sociales, sus organizaciones y la institucionalización de los
                procesos de desarrollo territorial." />
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                la organización optima de empresas, mediante la entrega de conocimientos de la situación actual de
                la economía social y solidaria en Iberoamérica.</p>
            </div>
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                Conocer la problemática de las entidades de la economía social en Iberoamérica y sus desafíos en la
                consolidación de mercados justos.</p>
            </div>
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos,
                sociales, culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel
                mundial.</p>
            </div>
          </div>
        </div>
        {/* Fin Objetivos */}

        {/* Inicio Sede */}
        <div className="lg:max-w-[1200px] m-auto bg-[#990537] text-white grid grid-flow-row sm:grid-flow-col sm:grid-cols-2">
          <div className="h-80 sm:h-auto"><img src="administracion-unsa.webp" alt="" /></div>
          <div className="p-8 sm:p-[54px] md:p-[74px]">
            <TitleSection title="Sede" className='text-white' />
            <p className="md:text-lg mb-4">
              Incentivar la investigación y valorizar la incidencia de innovaciones de los participantes al congreso para
              que generen vínculos entre los movimientos sociales, sus organizaciones y la institucionalización de los
              procesos de desarrollo territorial.</p>
          </div>
        </div>
        {/* Fin Sede */}

        {/* Incio Inversion*/}
        <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Inversión" className='text-[#5E151E]' />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">Docentes de Universidades</h4>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl line-through">80.00</p>
              </div>
              <p className="px-7">*Inscripciones
                del 20 mayo al 30 julio</p>
              <a href="#" className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3">Inscribete aqui</a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">Docentes de Universidades</h4>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones
                del 20 mayo al 30 julio</p>
              <a href="#" className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3">Inscribete aqui</a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">Docentes de Universidades</h4>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones
                del 20 mayo al 30 julio</p>
              <a href="#" className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3">Inscribete aqui</a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">Docentes de Universidades</h4>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2"><span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones
                del 20 mayo al 30 julio</p>
              <a href="#" className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3">Inscribete aqui</a>
            </div>
          </div>
        </div>
        {/* Fin Inversion*/}

        {/* Inicio ejes tematicos */}
        <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Ejes Temáticos" className="text-white" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores'} imagen={'001.jpg'} />
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación'} imagen={'002.jpg'} />
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores'} imagen={'003.jpg'} />
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores'} imagen={'004.jpg'} />
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores'} imagen={'005.jpg'} />
            <EjesTematicos ejeTematico={'Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores'} imagen={'006.jpg'} />
          </div>
        </div>
        {/* fin ejes tematicos */}

        {/* Inicio Comisiones Organizadoras */}
        <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Comisiones Organizadoras" className="text-[#5E151E]" />
          <div className="grid gap-y-10 gap-x-4 md:grid-cols-2 mt-8 md:text-lg divide-y divide-gray-500 [&>*]:pt-7">
            <div className="flex flex-col gap-3 md:first:col-span-2">
              <h5 className="font-extrabold font-montserrat text-lg">Comisión Central</h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.</p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 ">
              <h5 className="font-extrabold font-montserrat text-lg">Comisión Central</h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.</p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-extrabold font-montserrat text-lg">Comisión Central</h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.</p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-extrabold font-montserrat text-lg">Comisión Central</h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.</p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Fin Comisiones Organizadors */}

        {/* Inicio Ponentes */}
        <div className="lg:max-w-[1200px] m-auto bg-[#051F43] p-8 sm:p-[54px] md:p-[74px] text-white">
          <TitleSection title="Ponentes" className="text-white" />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-16 lg:px-12 pt-7 ">
            <PonentesBloque imagen="ponente-enfermeria001.jpg" nombres="Dra. Silvia Erendira Muñoz Ortiz" origen="Universidad Iberoaméricana - Mexico" resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial." />
            <PonentesBloque imagen="ponente-enfermeria001.jpg" nombres="Dra. Silvia Erendira Muñoz Ortiz" origen="Universidad Iberoaméricana - Mexico" resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial." />
            <PonentesBloque imagen="ponente-enfermeria001.jpg" nombres="Dra. Silvia Erendira Muñoz Ortiz" origen="Universidad Iberoaméricana - Mexico" resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
                culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial." />
          </div>
        </div>
        {/* Fin Ponentes */}

        {/* inicio contacto */}
        <div className="lg:max-w-[1200px] m-auto bg-[#F3F4F5] p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Contacto / Consultas" className='text-[#5E151E]' />
          <div className="grid md:grid-cols-2 md:pt-7 ">
            <div className="mx-14 mb-7">
              <ul className="md:text-lg [&>*]:flex [&>*]:items-center [&>*]:text-balance">
                <li><span className='mr-4 py-4'><Mail size={36} color="#990537" strokeWidth={1.5} /></span> fad_upg@unsa.edu.pe</li>
                <li><span className='mr-4 py-4'><PhoneCall size={36} color="#990537" strokeWidth={1.5} /></span>+01 959644577</li>
                <li><span className='mr-4 py-4'><MapPin size={36} color="#990537" strokeWidth={1.5} /></span>Campus Ingenierias Av. Venezuela s/n - Arequipa</li>
                <li><span className='mr-4 py-4'><Clock4 size={36} color="#990537" strokeWidth={1.5} /></span> Lunes a viernes 08:00 a 16:00 hrs</li>
              </ul>
            </div>
            <div className="bg-white rounded-md">
              <div className="p-4 md:p-7 rounded-md">
                <input type="text" placeholder="Nombres y apellidos" className="w-full  outline-none border
             border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-6 "/>
                <input type="mail" placeholder="Correo" className="w-full outline-none border
                         border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-3 "/>
                <label className="text-[#8a8a8a]">Consulta:
                  <textarea className="resize-none w-full h-40 outline-none border
                         border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-3" name="consulta" id="" placeholder="Escribenos tu consulta o comentario"></textarea>
                </label>
                <input type="submit" placeholder="Correo" className="w-full outline-none p-3 rounded-md bg-[#990537] text-white uppercase" />
              </div>
            </div>
          </div>
        </div>
        {/* fin contacto */}
      </main >
      <footer className='bg-[#990537] [&>*]:p-6'>
        <div className='text-white text-sm tracking-tight flex place-content-between items-center sm:max-w-[1200px] sm:m-auto'>
          <div>
            <img src="logounsafndgran.svg" alt="" className='h-11' />
          </div>
          <div className='flex gap-2 opacity-70 [&>*]:h-7'>
            <img src="icon-facebook.svg" alt="" />
            <img src="icon-instagram.svg" alt="" />
            <img src="icon-linkedin.svg" alt="" />
            <img src="icon-youtube.svg" alt="" />
            <img src="icon-tiktok.svg" alt="" />
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
