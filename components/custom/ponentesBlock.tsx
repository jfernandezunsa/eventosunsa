// pages/App.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TitleSection from "../../components/custom/titleSection";
//import { fetchPonents } from "../../lib/api";
import Aos from "aos";
import "aos/dist/aos.css";
import PonentesCard from "./ponentesCard";

const PonentesBlock = () => {
  return (
    <div className="lg:max-w-[1200px] m-auto bg-[#051F43] p-8 sm:p-[54px] md:p-[74px] text-white">
      <TitleSection
        data-aos="fade-left"
        title="Ponentes"
        className="text-white"
      />
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-16 lg:px-12 pt-7">
        <PonentesCard
          imagen={"silvia_2.jpg"}
          nombres={"Dra. Silvia Erendira Muñoz Ortiz"}
          origen={"Universidad Iberoaméricana - Mexico"}
        />
        <PonentesCard
          imagen={"arturo-luque.webp"}
          nombres={"Dr. Arturo Luque Gonzales"}
          origen={"Universidad Técnica de Manabi - Ecuador"}
        />
        <PonentesCard
          imagen={"Federico-Li-Bonilla.webp"}
          nombres={"Dr. Federico Li Bonilla"}
          origen={"Universidad Estatal a Distancia - Costa Rica"}
        />
        <PonentesCard
          imagen={"Mozas-Moral.webp"}
          nombres={"Dra. Adoración Mozas Moral"}
          origen={"Presidenta del CIRIEC - España Universidad de Jaen"}
        />
        <PonentesCard
          imagen={"J-fernando-alvarez.jpg"}
          nombres={"Dr. Juan Fernando Álvarez Rodríguez"}
          origen={"Universidad Javeriana - Colombia"}
        />        
      </div>
    </div>
  );
};

export default PonentesBlock;
