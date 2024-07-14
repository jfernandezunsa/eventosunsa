import { Brain } from 'lucide-react'
import React from 'react'
import ObjetivoCard from './objetivosCard'
import TitleSection from './titleSection'
import cn from 'classnames'
import clsx from 'clsx'

const ObjetivosBlock = () => {
  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Objetivos" className="text-white pb-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <ObjetivoCard
            icono="Diameter"
            size={70}
            texto="Incentivar la investigación y valorizar la incidencia de innovaciones de los participantes al congreso para que generen vínculos entre los movimientos sociales, sus organizaciones y la institucionalización de los
                procesos de desarrollo territorial."
          />
          <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
            <Brain size={70} />
            <p className="md:text-lg mb-4">
              la organización optima de empresas, mediante la entrega de
              conocimientos de la situación actual de la economía social y
              solidaria en Iberoamérica.
            </p>
          </div>
          <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
            <Brain size={70} />
            <p className="md:text-lg mb-4">
              Conocer la problemática de las entidades de la economía social
              en Iberoamérica y sus desafíos en la consolidación de mercados
              justos.
            </p>
          </div>
          <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
            <Brain size={70} />
            <p className="md:text-lg mb-4">
              En estos tiempos el mundo sufre una profunda transformación de
              sus paradigmas económicos, políticos, sociales, culturales y
              tecnológicos, que afectan el comportamiento de organizaciones y
              empresas, a nivel mundial.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ObjetivosBlock
