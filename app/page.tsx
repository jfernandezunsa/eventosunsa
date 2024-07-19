
import React from "react";
import { CarouselDemo } from "../components/custom/carouselBlock";
import ObjetivosBlock from './objetivos/page';
import SedeBlock from '../components/custom/sedeBlock';
import InversionBlock from '../components/custom/inversionBlock';
import EjesTematicos from '../components/custom/ejesTematicosBlock';
import PonentesBlock from '../components/custom/ponentesBlock';
import ContactoBlock from '../components/custom/contactoBlock';
import TitleSection from "../components/custom/titleSection";
import MapaEvento from "../components/custom/mapaEvento";

const App = () => {
  return (
    <>
      <section className="bg-[#051F43] h-[70vh] mt-[106px] sm:mt-[148px] relative">
        <CarouselDemo />
      </section>
      <main className="font-lato text-base">
      <div className="lg:max-w-[1200px] m-auto bg-white p-8 sm:p-[54px] md:p-[74px]">
      <TitleSection
          title="Dirigido a:"
          className="text-[#5E151E]"
        />
        <ul className="list-disc ml-5">
        <li>Estudiantes de la Unidad de Posgrado de la Facultad de Administración y distintas carreras empresariales de la Universidad Nacional de San Agustín para que desarrollen su capacidad investigativa.</li>
        <li>Estudiantes de carreras a fine de otras Universidades e Institutos de Arequipa, otras regiones del Perú y otros países.</li>
        <li>Los docentes, empresarios, emprendedores e investigadores de la Universidad Nacional de San Agustín, otras Universidades de Arequipa, otras regiones del Perú y otros países.</li>
        <li>Líderes de organizaciones, empresarios, profesionales, investigadores de la región Arequipa y otras regiones.</li>
        </ul>
      </div>
        <ObjetivosBlock />
        <InversionBlock />
        <EjesTematicos />
        <PonentesBlock />
        <SedeBlock />
        <MapaEvento />
        <ContactoBlock />
      </main>
    </>
  );
};

export default App;
