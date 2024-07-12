import React, { useState } from 'react';
import ButtonHero from './buttomHero';
import { Menu } from 'lucide-react';

const MenuMain = () => {
  let Links = [
    { name: "Presentación", link: "/" },
    { name: "Organización", link: "/" },
    { name: "Ejes Temáticos", link: "/" },
    { name: "Ponentes", link: "/" },
    { name: "Inversión", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  return (
    <div className="sm:flex place-content-between items-center w-full lg:max-w-[1200px] m-auto bg-white p-6 border-b-2 border-[#051F43] shadow-lg">
      <div className="flex items-center gap-3">
        <img src="logo-unsa.svg" alt="" className="h-14" />
        <div className="font-montserrat font-extrabold text-[19px] leading-5 tracking-tight text-balance max-w-[450px] hidden sm:block">
          <h2 className="text-sm text-gray-600">
            Facultad de Administración
          </h2>
          <h6>Unidad de Posgrado</h6>
        </div>
      </div>
      <div className='absolute right-8 top-8 cursor-pointer md:hidden'>
        <Menu size={36} color="#051F43" />
        {/* {open ? <Menu size={36} color="#051F43" /> : <X size={36} color="#051F43" />} */}
        {/* <Icon name={open ? 'SquareMenu' : 'SquareX'} /> */}

        {/* <Menu size={36} color="#051F43" /><X size={36} color="#051F43"/> */}
      </div>
      <ul className="md:flex gap-5 items-center mt-6 sm:mt-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pb-6 md:pb-0 pl-6 md:pl-0 transition-all duration-500 ease-in">
        {
          Links.map((Link) => (
            <li key={Link.name} className='[&>*]:font-lato [&>*]:font-normal [&>*]:tracking-tight my-4'>
              <a href={Link.link} className='hover:text-[#5E151E] duration-500'>{Link.name}</a>
            </li>
          ))
        }
        <ButtonHero buttonText={'Registrate'} buttonLink={'#'} />
      </ul>
    </div>
  )
}

export default MenuMain;
