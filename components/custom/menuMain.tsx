
'use client'
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { closeOutline, menuOutline } from "ionicons/icons";
import Link from "next/link";
import React, { useState } from "react";
import ButtonHero from "./buttomHero";

const MenuMain = () => {
  const [open, setOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const Links = [
    { name: "Presentación", link: "/" },
    { name: "Organización", link: "/" },
    { name: "Ejes Temáticos", link: "/ponentes" },
    { name: "Ponentes", link: "/" },
    { name: "Inversión", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  return (
    <div className="sm:flex place-content-between items-center w-full lg:max-w-[1200px] m-auto bg-white p-6 border-b-2 border-[#051F43] shadow-lg">
      <div className="flex items-center gap-3">
        <Image src="/logo-unsa.svg" alt="Logo UNSA" width={168} height={50} />
        <div className="font-montserrat font-extrabold text-[19px] leading-5 tracking-tight text-balance max-w-[450px] hidden sm:block">
          <h2 className="text-sm text-gray-600">Facultad de Administración</h2>
          <h6>Unidad de Posgrado</h6>
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-8 cursor-pointer md:hidden text-3xl"
      >
        <IonIcon icon={open ? closeOutline : menuOutline} />
      </div>
      <ul
        className={`md:flex gap-5 items-center mt-6 sm:mt-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pb-6 md:pb-0 pl-6 md:pl-0 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px] opacity-0 md:opacity-100"
        }`}
      >
        {Links.map((link, index) => (
          <li key={index} className="font-lato font-normal tracking-tight my-4">
            <Link href={link.link}>
              <a className="hover:text-[#5E151E] duration-500">{link.name}</a>
            </Link>
          </li>
        ))}
        <ButtonHero buttonText={"Regístrate"} buttonLink={"#"} />
      </ul>
    </div>
  );
};

export default MenuMain;
