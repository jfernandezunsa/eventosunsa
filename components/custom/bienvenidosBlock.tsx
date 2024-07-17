
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
      <TitleSection title="Bienvenidos" className="text-[#5E151E]" />
      <div data-aos='fade-up'>
        <p className="md:text-lg mb-4 ">
          En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales, culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial.
        </p>
        <p className="md:text-lg mb-4">
          La economía solidaria puede ser vista como un fenómeno socioeconómico complejo donde se articulan tres dimensiones distintas de análisis: el movimiento social, con un fuerte discurso ideológico, proclive a la construcción de un nuevo modelo de desarrollo; el paradigma científico con una particular vocación por generar teoría pertinente para dar cuenta de los fenómenos económicos alternativos; y el sector específico de nuestras economías donde convergen las distintas experiencias de base solidaria. En América Latina es posible observar un alto dinamismo en cualquiera de estas dimensiones de análisis, especialmente a partir del surgimiento de distintas redes que operan desde la sociedad civil y de la puesta en práctica de políticas públicas dirigidas al fortalecimiento del sector.
        </p>
        <p className="md:text-lg mb-4">
          La economía peruana continúa cambiando actualmente de acuerdo a las necesidades de empleo y de financiamiento tanto para los trabajadores como para las organizaciones, por lo que se requiere analizar el impacto de la economía solidaria y las diversas estrategias de innovación socio ecológica. Es importante mencionar que la economía peruana se continúa recuperando, dada las medidas de normalización de la actividad económica y porque ha mostrado indicios de mayor dinamismo en el inicio del año 2024. Asimismo, la innovación socio ecológica puede ayudar a medir iniciativas de sostenibilidad ambiental, social y de gobierno corporativo permitiendo contribuciones a los Objetivos de Desarrollo Sostenible.
        </p>
        <p className="md:text-lg mb-4">
          En este sentido la Unidad de Posgrado de la Facultad de Administración de la Universidad Nacional de San Agustín de Arequipa en colaboración con la Universidad Internacional de Andalucía – Grupo La Rábida convoca el Congreso Internacional denominado:
          <strong>“II ENCUENTRO DE ECONOMIA SOLIDARIA E INNOVACION SOCIO ECOLÓGICA”</strong>, para todos los interesados a participar en este Encuentro, ya sean del Perú y Latinoamérica. El mismo que se llevara a efecto los días 11 y 12 de octubre del 2024 en la ciudad de Arequipa.
        </p>
        <TitleSection title="Naturaleza" className="text-[#5E151E] mt-10" />
        <p>
          Es de carácter científico e innovador, mediante una amplia programación que cubre aspectos conceptuales, tecnológicos, nuevas tendencias en el campo de actual de la economía social y solidaria en Iberoamérica, sus dimensiones macro y meso-económicas. En este sentido este evento debe entenderse como un espacio dinamizador de propuestas e innovaciones contextualizadas dentro de un ámbito regional, nacional e internacional. Bajo esta premisa. La Unidad de Posgrado en colaboración con la Universidad Internacional de Andalucía – Grupo La Rábida invita cordialmente a ser partícipes del Congreso Internacional denominado: <strong>“II ENCUENTRO DE ECONOMIA SOLIDARIA E INNOVACION SOCIO ECOLÓGICA”</strong>
        </p>
        <TitleSection title="Justificación" className="text-[#5E151E] mt-10" />
        <p className="md:text-lg mb-4">
          El desarrollo del Congreso Internacional denominado: <strong>“II ENCUENTRO DE ECONOMIA SOLIDARIA E INNOVACION SOCIO ECOLÓGICA”</strong>, se justifica por las siguientes razones:
        </p>
        <ul className='list-disc'>
          <li>Encuentros científicos en los que investigadores y docentes, traten temas en torno a los vínculos entre la economía solidaria y los procesos de transformación socio ecológica, propios y característicos de la región Iberoamericana.</li>
          <li>Analizar y proveer de conocimientos para mejorar la competitividad de las empresas.</li>
          <li>Exponer estrategias innovadoras que vinculen los análisis ambientales y organizacionales.</li>
          <li>Motivar a los licenciados, egresados, estudiantes, investigadores y público en general para que conozcan la situación actual de la economía social y solidaria en Iberoamérica.</li>
          <li>Establecer vínculos estratégicos entre la Unidad de Posgrado de la Facultad de Administración de la Universidad Nacional de San Agustín de Arequipa y la Red grupo de Universidades Iberoamericanas de LA RABIDA, que favorezcan la iniciativita de desarrollar proyectos de investigación, emprendimiento y desarrollo innovador empresarial.</li>
        </ul>
      </div>
    </>
  )
}

export default BienvenidosBlock
