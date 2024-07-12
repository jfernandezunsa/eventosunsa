import Image from 'next/image';
import EjesTematicos from "@/components/custom/ejesTematicos";
import ObjetivoCard from "@/components/custom/objetivosCard";
import PonentesBloque from "@/components/custom/ponentesBloque";
import TitleSection from "@/components/custom/titleSection";
import {
  Brain,
  CircleArrowRight,
  Clock4,
  Diameter,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  SquareMenu,
} from "lucide-react";
import React from "react";
import CarouselItem from "@/components/custom/carouselApi";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "@/components/custom/carouselBlock";


import Icon from "@/components/custom/iconName";
import MenuMain from "@/components/custom/menuMain";



const App = () => {
  return (
    <>
      {/* Inicio Hero */}
      <section className="bg-[#051F43] h-[70vh] mt-[106px] sm:mt-[148px] relative">
        <div>
          <CarouselDemo />
        </div>
      </section>
      {/* Fin Hero */}
      <main className="font-lato text-base">


        {/* Inicio Objetivos */}
        <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Objetivos" className="text-white pb-4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <ObjetivoCard
              icono="Diameter"
              size={70}
              texto="Incentivar la investigación y valorizar la incidencia de innovaciones de los participantes al congreso para que generen vínculos entre los movimientos sociales, sus organizaciones y la institucionalización de los
                procesos de desarrollo territorial."
            />
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                la organización optima de empresas, mediante la entrega de
                conocimientos de la situación actual de la economía social y
                solidaria en Iberoamérica.
              </p>
            </div>
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                Conocer la problemática de las entidades de la economía social
                en Iberoamérica y sus desafíos en la consolidación de mercados
                justos.
              </p>
            </div>
            <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
              <Brain size={70} />
              <p className="md:text-lg mb-4">
                En estos tiempos el mundo sufre una profunda transformación de
                sus paradigmas económicos, políticos, sociales, culturales y
                tecnológicos, que afectan el comportamiento de organizaciones y
                empresas, a nivel mundial.
              </p>
            </div>
          </div>
        </div>
        {/* Fin Objetivos */}



        {/* Incio Inversion*/}
        <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
          <TitleSection title="Inversión" className="text-[#5E151E]" />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">
                Docentes de Universidades
              </h4>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl line-through">80.00</p>
              </div>
              <p className="px-7">*Inscripciones del 20 mayo al 30 julio</p>
              <a
                href="#"
                className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3"
              >
                Inscribete aqui
              </a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">
                Docentes de Universidades
              </h4>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones del 20 mayo al 30 julio</p>
              <a
                href="#"
                className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3"
              >
                Inscribete aqui
              </a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">
                Docentes de Universidades
              </h4>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones del 20 mayo al 30 julio</p>
              <a
                href="#"
                className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3"
              >
                Inscribete aqui
              </a>
            </div>
            <div className="bg-[#051F4380] rounded-lg text-white">
              <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance">
                Docentes de Universidades
              </h4>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">S/ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <div className="flex mx-7 mb-2">
                <span className="font-bold text-xl w-14">US $ </span>
                <p className="font-extrabold text-5xl">80.00</p>
              </div>
              <p className="px-7">*Inscripciones del 20 mayo al 30 julio</p>
              <a
                href="#"
                className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3"
              >
                Inscribete aqui
              </a>
            </div>
          </div>
        </div>
        {/* Fin Inversion*/}







        
      </main>
    </>
  );
};

export default App;
