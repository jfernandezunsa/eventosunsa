
import React from "react";
import { CarouselDemo } from "@/components/custom/carouselBlock";
import ObjetivosBlock from './objetivos/page';
import BienvenidosBlock from '@/components/custom/bienvenidosBlock';
import SedeBlock from '@/components/custom/sedeBlock';
import InversionBlock from '@/components/custom/inversionBlock';
import EjesTematicos from '@/components/custom/ejesTematicosBlock';
import PonentesBlock from '@/components/custom/ponentesBlock';
import ContactoBlock from '@/components/custom/contactoBlock';

const App = () => {
  return (
    <>
      <section className="bg-[#051F43] h-[70vh] mt-[106px] sm:mt-[148px] relative">
        <CarouselDemo />
      </section>
      <main className="font-lato text-base">
        <ObjetivosBlock />
        <InversionBlock />
        <EjesTematicos />
        <PonentesBlock />
        <ContactoBlock />
      </main>
    </>
  );
};

export default App;
