import TitleSection from "@/components/custom/titleSection";
import React from "react";

function page() {
  return (
    <>
      {/* Inicio presentacion */}
      <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px] mt-[150px] ">
        <TitleSection title="Presentación" className="text-[#5E151E]" />
        <p className="md:text-lg mb-4">
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
        <p className="md:text-lg mb-4">
          La economía peruana continúa cambiando actualmente de acuerdo a las
          necesidades de empleo y de financiamiento tanto para los trabajadores
          como para las organizaciones, por lo que se requiere analizar el
          impacto de la economía solidaria y las diversas estrategias de
          innovación socio ecológica. Es importante mencionar que la economía
          peruana se continúa recuperando, dada las medidas de normalización de
          la actividad económica y porque ha mostrado indicios de mayor
          dinamismo en el inicio del año 2024. Asimismo, la innovación socio
          ecológica puede ayudar a medir iniciativas de sostenibilidad
          ambiental, social y de gobierno corporativo permitiendo contribuciones
          a los Objetivos de Desarrollo Sostenible.
        </p>
        <p className="md:text-lg">
          En este sentido la Unidad de Posgrado de la Facultad de Administración
          de la Universidad Nacional de San Agustín de Arequipa en colaboración
          con la Universidad Internacional de Andalucía – Grupo La Rábida
          convoca el Congreso Internacional denominado:“II ENCUENTRO DE ECONOMIA
          SOLIDARIA E INNOVACION SOCIO ECOLÓGICA”, para todos los interesados a
          participar en este Encuentro, ya sean del Perú y Latinoamérica. El
          mismo que se llevara a efecto los días 11 y 12 de octubre del 2024 en
          la ciudad de Arequipa.
        </p>
      </div>
      {/* Fin presentacion */}
    </>
  );
}

export default page;
