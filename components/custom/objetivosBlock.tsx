import { Brain, GraduationCap, Handshake, Recycle } from "lucide-react";
import React from "react";
import ObjetivoCard from "./objetivosCard";
import TitleSection from "./titleSection";
import cn from "classnames";
import clsx from "clsx";

const ObjetivosBlock = () => {
  return (
    <>
      <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Objetivos" className="text-white pb-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <ObjetivoCard
            icono={<Brain size={70} strokeWidth={1.25} />} 
            texto={
              "Incentivar la investigación y valorizar la incidencia de innovaciones de los participantes al congreso para que generen vínculos entre los movimientos sociales, sus organizaciones y la institucionalización de los procesos de desarrollo territorial."
            }
          />
          <ObjetivoCard
            icono={<GraduationCap size={70} strokeWidth={1.25} />} 
            texto={
              "Facilitar la organización optima de empresas, mediante la entrega de conocimientos de la situación actual de la economía social y solidaria en Iberoamérica."
            }
          />
          <ObjetivoCard
            icono={<Handshake size={70} strokeWidth={1.25} />} 
            texto={
              "Conocer la problemática de las entidades de la economía social en Iberoamérica y sus desafíos en la consolidación de mercados justos"
            }
          />
          <ObjetivoCard
            icono={<Recycle size={70} strokeWidth={1.25} />} 
            texto={
              "Comprender los temas de vanguardia de la Economía solidaria e innovación socio ecológica."
            }
          />
        </div>
      </div>
    </>
  );
};

export default ObjetivosBlock;
