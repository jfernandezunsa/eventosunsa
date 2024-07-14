'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection';
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'

const SedeBlock = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-[#990537] text-white grid grid-flow-row sm:grid-flow-col sm:grid-cols-2" >
        <div data-aos='fade-right' className="h-80 sm:h-auto">
          <Image src="/administracion-unsa.webp" alt="" width={600} height={600} />
        </div>
        <div data-aos='fade-left' className="p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Sede" className="text-white" />
          <p className="md:text-lg mb-4">
            Incentivar la investigación y valorizar la incidencia de
            innovaciones de los participantes al congreso para que generen
            vínculos entre los movimientos sociales, sus organizaciones y la
            institucionalización de los procesos de desarrollo territorial.
          </p>
        </div>
      </div >
    </>
  )
}

export default SedeBlock
