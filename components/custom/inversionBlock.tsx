
'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection'
import Aos from "aos";
import 'aos/dist/aos.css'
import InversionCard from './inversionCard';

const InversionBlock = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Inversión" className="text-[#5E151E]" />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <InversionCard tipoParticipante={'Docentes de Universidades'} costoNacionales={'80.00'} linkRegistro={'#'} moneda={'S/'} costoTerminal='120.00' observacion='*Inscripciones del 20 mayo al 30 julio' />
          <InversionCard tipoParticipante={'Estudiantes de Pregrado'} costoNacionales={'60.00'} linkRegistro={'#'} moneda={'S/'} costoTerminal='100.00' observacion='*Inscripciones del 20 mayo al 30 julio' />
          <InversionCard tipoParticipante={'Público en General '} costoNacionales={'80.00'} linkRegistro={'#'} moneda={'S/'} costoTerminal='120.00' />
          <InversionCard tipoParticipante={'Docentes de Universidades'} costoNacionales={'80.00'} linkRegistro={'#'} moneda={'S/'} costoTerminal='120.00' observacion='*Inscripciones del 20 mayo al 30 julio' />
        </div>
      </div>
    </>
  )
}

export default InversionBlock
