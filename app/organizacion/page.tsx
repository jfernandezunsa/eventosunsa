
import Image from "next/image";
import TitleSection from '@/components/custom/titleSection'
import React from 'react'
import SedeBlock from "@/components/custom/sedeBlock";

function page() {
  return (
    <>
      <div className="mt-[150px]">
        <SedeBlock />
      </div>

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
