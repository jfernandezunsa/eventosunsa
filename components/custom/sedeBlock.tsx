'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection';
//import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'

const SedeBlock = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-[#990537] text-white grid grid-flow-row sm:grid-flow-col sm:grid-cols-2" >
        {/* <div data-aos='fade-right' className="h-80 sm:h-auto"> */}
        <div className="w-full h-[400px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full ">
          <img src="unia-sevilla_mundoposgrado.jpg" alt="" width={600} height={800} />
        </div>
        <div data-aos='fade-left' className="p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Lugar del Evento" className="text-white" />
          <p className="md:text-lg mb-4">
          Universidad Nacional de San Agustin de Arequipa<br/>
          Av. Venezuela Nº 400, Arequipa, Perú
          </p>
          <p className="md:text-lg mb-4">
          Campus Ingenierías<br/>
          Grupo La Rábida
          </p>
        </div>
      </div >
    </>
  )
}

export default SedeBlock
