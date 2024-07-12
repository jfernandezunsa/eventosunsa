import EjesTematicos from '@/components/custom/ejesTematicos'
import TitleSection from '@/components/custom/titleSection'
import React from 'react'

function page() {
  return (
    <>
            {/* Inicio ejes tematicos */}
            <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px] mt-[150px]">
            <TitleSection title="Ejes Temáticos" className="text-white" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores"
                }
                imagen={"unsaslider001.webp"}
              />
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación"
                }
                imagen={"002.jpg"}
              />
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores"
                }
                imagen={"003.jpg"}
              />
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores"
                }
                imagen={"004.jpg"}
              />
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores"
                }
                imagen={"005.jpg"}
              />
              <EjesTematicos
                ejeTematico={
                  "Enfoque comparativo en la didáctica de la educación física cooperativa y la educación en valores"
                }
                imagen={"006.jpg"}
              />
            </div>
          </div>
          {/* fin ejes tematicos */}
          </>
  )
}

export default page