import Image from "next/image";
import TitleSection from "../../components/custom/titleSection";
import React from "react";
import SedeBlock from "../../components/custom/sedeBlock";
import CoOrganizadores from "../../components/custom/coOrganizadores";

function page() {
  return (
    <>
      <div className="mt-[105px] md:mt-[150px]">
        <CoOrganizadores />
      </div>

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
              <strong className="font-semibold block">
                Dra. Elsa Emma Neira Ponce
              </strong>
              Directora de la Unidad de Posgrado de la Facultad de
              Administración
            </p>
            <p>
              <strong className="font-semibold block">
                Oscar Primo Esquivel Gonzales
              </strong>
              Coordinador de los Doctorados de la Unidad de Posgrado de la
              Facultad de Administración
            </p>
            <p>
              <strong className="font-semibold block">
                Mag. Willam Fernando Merma Valverde
              </strong>
              Coordinador de las Maestrías de la Unidad de Posgrado de la
              Facultad de Administración
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <h5 className="font-extrabold font-montserrat text-lg">
              Comisión de Recepción
            </h5>
            <ul>
              <li>Victor Elias Sotelo Guerra</li>
              <li>Paola Alexandra Yucra Mamani</li>
              <li>Olenka Ytania Leon Balarezo</li>
              <li>Francisco Fredy Ayala Cochon</li>
              <li>Maria Victoria Canaza Saravia</li>
              <li>Estefany Mamani Montesinos</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-extrabold font-montserrat text-lg">
              Comisión de Artículos
            </h5>
            <ul>
              <li>Francisco Javier Tantalean Vasquez</li>
              <li>Jorge Eloy Rojas Nina</li>
              <li>Fiorela Candy Ticona Apaza</li>
              <li>Rina Amparo Valencia Durand</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-extrabold font-montserrat text-lg">
              Comisión de Certificación
            </h5>
            <ul>
              <li>Miller Edgard Vargas Vizcarra</li>
              <li>Jorge Nuñez Baca</li>
              <li>Jose Carlos Angel Linares Bernedo</li>
              <li>Alex Jhony Turpo Paccori</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-extrabold font-montserrat text-lg">
              Comisión Marketing y Publicidad
            </h5>
            <ul>
              <li>Christian Karlos Moscoso Caro</li>
              <li>Jorge Gonzalo Berrios Mojorovich</li>
              <li>Renato Martinez Malaga</li>
              <li>Julio Cesar Delgadillo Sanchez</li>
              <li>Renzo Alexis Sierra Velazco</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
