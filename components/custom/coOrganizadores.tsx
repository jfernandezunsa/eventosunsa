'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection';
//import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'

const CoOrganizadores = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-[#990537] text-white grid grid-flow-row sm:grid-flow-col sm:grid-cols-2" >
        <div className="w-full h-[400px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full ">
          <img src="unia-sevilla_mundoposgrado.jpg" alt="" width={600} height={800} />
        </div>
        <div data-aos='fade-left' className="p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Coorganización" className="text-white" />
          <p className="md:text-lg mb-4">
          Universidad Nacional de San Agustin de Arequipa <br/>
          Unidad de Posgrado de la Facultad de Administración
          </p>
          <p className="md:text-lg mb-4">
          Universidad Internacional de Andalucia <br/>
          Grupo La Rábida
          </p>
        </div>
      </div >
    </>
  )
}

export default CoOrganizadores
