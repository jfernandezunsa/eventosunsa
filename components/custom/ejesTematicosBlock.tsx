// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TitleSection from '@/components/custom/titleSection';
import { fetchEjeTematico } from '../../lib/api';
import { CircleArrowRight } from 'lucide-react';
import EjesTematicosCard from './ejesTematicosCard';
import RenderFromTemplateContext from 'next/dist/client/components/render-from-template-context';


const ejesTematicosBlock = () => {
  return (
    <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
      <TitleSection title="Ejes Temáticos" className="text-white" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/adm_001.jpg"} />
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/001.jpg"} />
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/001.jpg"} />
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/001.jpg"} />
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/001.jpg"} />
        <EjesTematicosCard ejeTematico={'Estrategias de transición socio ecológica'} imagen={"/001.jpg"} />
      </div>
    </div>
  )
}

export default ejesTematicosBlock

