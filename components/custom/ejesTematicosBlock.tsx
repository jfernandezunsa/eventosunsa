// pages/App.tsx
'use client'

import React, {  } from 'react';
import TitleSection from '../../components/custom/titleSection';
import EjesTematicosCard from './ejesTematicosCard';


const ejesTematicosBlock = () => {
  return (
    <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
      <TitleSection title="Ejes Temáticos" className="text-white" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/adm_001.jpg"} />
        <EjesTematicosCard ejeTematico={'Retos de la Economía Social y Solidaria en las organizaciones'} imagen={"/adm_002.jpg"} />
        <EjesTematicosCard ejeTematico={'Marcos institucionales para transición socio ecológica justa'} imagen={"/adm_003.jpg"} />
        <EjesTematicosCard ejeTematico={'Docencia e investigación en Economía Social e Solidaria'} imagen={"/adm_004.jpg"} />
        <EjesTematicosCard ejeTematico={'Evaluación de impacto socio ecológico de las entidades y proyectos'} imagen={"/adm_005.jpg"} />
        <EjesTematicosCard ejeTematico={'Tecnologías, innovación y escalabilidad de las experiencias de innovación sociológica'} imagen={"/adm_006.jpg"} />
      </div>
    </div>
  )
}

export default ejesTematicosBlock

