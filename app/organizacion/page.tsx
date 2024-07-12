
import Image from "next/image";
import TitleSection from '@/components/custom/titleSection'
import React from 'react'

function page() {
  return (
    <>
            {/* Inicio Sede */}
            <div className="lg:max-w-[1200px] m-auto bg-[#990537] text-white grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 mt-[150px]">
          <div className="h-80 sm:h-auto">
            <Image src="/administracion-unsa.webp" alt="" width={600} height={600} />
          </div>
          <div className="p-8 sm:p-[54px] md:p-[74px]">
            <TitleSection title="Sede" className="text-white" />
            <p className="md:text-lg mb-4">
              Incentivar la investigación y valorizar la incidencia de
              innovaciones de los participantes al congreso para que generen
              vínculos entre los movimientos sociales, sus organizaciones y la
              institucionalización de los procesos de desarrollo territorial.
            </p>
          </div>
        </div>
        {/* Fin Sede */}

                {/* Inicio Comisiones Organizadoras */}
                <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection
            title="Comisiones Organizadoras"
            className="text-[#5E151E]"
          />
          <div className="grid gap-y-10 gap-x-4 md:grid-cols-2 mt-8 md:text-lg divide-y divide-gray-500 [&>*]:pt-7">
            <div className="flex flex-col gap-3 md:first:col-span-2">
              <h5 className="font-extrabold font-montserrat text-lg">
                Comisión Central
              </h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de
                sus paradigmas económicos, políticos, sociales, culturales y
                tecnológicos, que afectan el comportamiento de organizaciones y
                empresas, a nivel mundial.
              </p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 ">
              <h5 className="font-extrabold font-montserrat text-lg">
                Comisión Central
              </h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de
                sus paradigmas económicos, políticos, sociales, culturales y
                tecnológicos, que afectan el comportamiento de organizaciones y
                empresas, a nivel mundial.
              </p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-extrabold font-montserrat text-lg">
                Comisión Central
              </h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de
                sus paradigmas económicos, políticos, sociales, culturales y
                tecnológicos, que afectan el comportamiento de organizaciones y
                empresas, a nivel mundial.
              </p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-extrabold font-montserrat text-lg">
                Comisión Central
              </h5>
              <p>
                En estos tiempos el mundo sufre una profunda transformación de
                sus paradigmas económicos, políticos, sociales, culturales y
                tecnológicos, que afectan el comportamiento de organizaciones y
                empresas, a nivel mundial.
              </p>
              <ul>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
                <li>Texto Prueva</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Fin Comisiones Organizadors */}
    </>
  )
}

export default page