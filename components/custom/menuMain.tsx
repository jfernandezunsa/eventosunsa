import React, { useState } from 'react';
import Link from 'next/link'; // Importa Link de Next.js si necesitas manejar enlaces internos
import { Menu, X } from 'lucide-react';
import ButtonHero from './buttomHero';

const MenuMain = () => {
  const [open, setOpen] = useState(false); // Estado local para controlar si el menú está abierto o cerrado

  const toggleMenu = () => {
    setOpen(!open); // Función para cambiar el estado de 'open' al hacer clic en el ícono de menú
  };

  // Array de objetos para los enlaces del menú
  const links = [
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
        <img src="/logo-unsa.svg" alt="" className="h-14" /> {/* Asegúrate de que la ruta de la imagen sea correcta */}
        <div className="font-montserrat font-extrabold text-[19px] leading-5 tracking-tight text-balance max-w-[450px] hidden sm:block">
          <h2 className="text-sm text-gray-600">
            Facultad de Administración
          </h2>
          <h6>Unidad de Posgrado</h6>
        </div>
      </div>
      {/* Botón de menú que cambia de ícono dependiendo del estado de 'open' */}
      <div onClick={toggleMenu} className='absolute right-8 top-8 cursor-pointer md:hidden'>
        {open ? <Menu size={36} color="#051F43" /> : <X size={36} color="#051F43"/>}
      </div>
      {/* Lista de enlaces del menú */}
      <ul className={`md:flex gap-5 items-center mt-10 sm:mt-0 ${open ? 'block' : 'hidden'} absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pb-6 md:pb-0 pl-6 md:pl-0 transition-all duration-500 ease-in`}>
        {links.map((link) => (
          <li key={link.name} className='font-lato font-normal tracking-tight my-4'>
            <Link href={link.link}>
              <a className='hover:text-[#5E151E] duration-500'>{link.name}</a>
            </Link>
          </li>
        ))}
        <ButtonHero buttonText={'Regístrate'} buttonLink={'#'} /> {/* Asegúrate de que ButtonHero esté correctamente importado */}
      </ul>
    </div>
  );
};

export default MenuMain;
