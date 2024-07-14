
'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection'
import Aos from "aos";
import 'aos/dist/aos.css'

const BienvenidosBlock = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Bienvenidos" className="text-[#5E151E]" />
        <div data-aos='fade-up'>
          <p className="md:text-lg mb-4 ">
            En estos tiempos el mundo sufre una profunda transformación de sus
            paradigmas económicos, políticos, sociales, culturales y tecnológicos,
            que afectan el comportamiento de organizaciones y empresas, a nivel
            mundial.
          </p>
          <p className="md:text-lg mb-4">
            La economía solidaria puede ser vista como un fenómeno socioeconómico
            complejo donde se articulan tres dimensiones distintas de análisis: el
            movimiento social, con un fuerte discurso ideológico, proclive a la
            construcción de un nuevo modelo de desarrollo; el paradigma científico
            con una particular vocación por generar teoría pertinente para dar
            cuenta de los fenómenos económicos alternativos; y el sector
            específico de nuestras economías donde convergen las distintas
            experiencias de base solidaria. En América Latina es posible observar
            un alto dinamismo en cualquiera de estas dimensiones de análisis,
            especialmente a partir del surgimiento de distintas redes que operan
            desde la sociedad civil y de la puesta en práctica de políticas
            públicas dirigidas al fortalecimiento del sector.
          </p>
        </div>
      </div>
    </>
  )
}

export default BienvenidosBlock
