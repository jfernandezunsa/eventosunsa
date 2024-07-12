import PonentesBloque from '@/components/custom/ponentesBloque'
import TitleSection from '@/components/custom/titleSection'
import React from 'react'

function page() {
  return (
    <>
     
     <div className="lg:max-w-[1200px] m-auto bg-[#051F43] p-8 sm:p-[54px] md:p-[74px] text-white mt-[150px]">
     <TitleSection title="Ponentes" className="text-white" />
     <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-16 lg:px-12 pt-7 ">
       <PonentesBloque
         imagen="ponente-enfermeria001.jpg"
         nombres="Dra. Silvia Erendira Muñoz Ortiz"
         origen="Universidad Iberoaméricana - Mexico"
         resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
           culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial."
       />
       <PonentesBloque
         imagen="ponente-enfermeria001.jpg"
         nombres="Dra. Silvia Erendira Muñoz Ortiz"
         origen="Universidad Iberoaméricana - Mexico"
         resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
           culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial."
       />
       <PonentesBloque
         imagen="ponente-enfermeria001.jpg"
         nombres="Dra. Silvia Erendira Muñoz Ortiz"
         origen="Universidad Iberoaméricana - Mexico"
         resumen="En estos tiempos el mundo sufre una profunda transformación de sus paradigmas económicos, políticos, sociales,
           culturales y tecnológicos, que afectan el comportamiento de organizaciones y empresas, a nivel mundial."
       />
     </div>
   </div>
   </>
  )
}

export default page
