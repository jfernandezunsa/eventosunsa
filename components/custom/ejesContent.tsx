
'use client'
import React, { useEffect } from 'react'
import TitleSection from './titleSection'
import Aos from "aos";
import 'aos/dist/aos.css'

const EjesContent = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-[#F3F4F5] p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Ejes Temáticos" className="text-[#5E151E]" />
        <div>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 1 – Estrategias de transición socio ecológica</h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Economía Circular</li>
            <li>Preservación ambiental</li>
            <li>Gestión ambiental</li>
            <li>Desarrollo rural</li>
          </ul>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 2 – Retos de la Economía Social y Solidaria en las organizaciones </h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Gerencia social</li>
            <li>Democracia y toma de decisiones</li>
            <li>Trabajo colaborativo</li>
            <li>Compromiso</li>
            <li>Cooperativismo</li>
            <li>Responsabilidad Social</li>
          </ul>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 3 – Marcos institucionales para transición socio ecológica justa</h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Modelos empresariales</li>
            <li>Participación ciudadana</li>
            <li>Igualdad de genero</li>
            <li>Trabajo decente</li>
            <li>Emprendimiento</li>
          </ul>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 4 – Docencia e investigación en Economía Social e Solidaria</h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Métodos didácticos de enseñanza</li>
            <li>Aprendizaje innovador</li>
            <li>Investigación social</li>
          </ul>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 5 – Evaluación de impacto socio ecológico de las entidades y proyectos</h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Planes de ordenamiento</li>
            <li>Necesidades humanas</li>
            <li>Conflicto organizacional</li>
            <li>Cultura financiera</li>
            <li>Planes de desarrollo</li>
          </ul>
          <h5 className="font-extrabold font-montserrat text-lg">Eje 6 – Tecnologías, innovación y escalabilidad de las experiencias de innovación sociológica</h5>
          <ul className='list-disc ml-5 mb-6'>
            <li>Tecnología social</li>
            <li>Marketing social</li>
            <li>Innovación</li>
            <li>Planes de negocios</li>
            <li>Proyectos</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default EjesContent
