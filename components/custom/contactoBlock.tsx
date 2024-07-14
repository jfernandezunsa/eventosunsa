'use client'
import { Mail, PhoneCall, MapPin, Clock4 } from 'lucide-react'
import React, { useEffect } from 'react'
import TitleSection from './titleSection';

import Aos from "aos";
import 'aos/dist/aos.css'

const ContactoBlock = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      {/* inicio contacto */}
      <div className="lg:max-w-[1200px] m-auto bg-[#F3F4F5] p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection
          title="Contacto / Consultas"
          className="text-[#5E151E]"

        />
        <div className="grid md:grid-cols-2 md:pt-7 ">
          <div className="mx-14 mb-7">
            <ul className="md:text-lg [&>*]:flex [&>*]:items-center [&>*]:text-balance">
              <li data-aos='fade-right' data-aos-delay='200'>
                <span className="mr-4 py-4">
                  <Mail size={36} color="#990537" strokeWidth={1.5} />
                </span>{" "}
                fad_upg@unsa.edu.pe
              </li>
              <li data-aos='fade-right' data-aos-delay='300'>
                <span className="mr-4 py-4">
                  <PhoneCall size={36} color="#990537" strokeWidth={1.5} />
                </span>
                +01 959644577
              </li>
              <li data-aos='fade-right' data-aos-delay='400'>
                <span className="mr-4 py-4">
                  <MapPin size={36} color="#990537" strokeWidth={1.5} />
                </span>
                Campus Ingenierias Av. Venezuela s/n - Arequipa
              </li>
              <li data-aos='fade-right' data-aos-delay='500'>
                <span className="mr-4 py-4">
                  <Clock4 size={36} color="#990537" strokeWidth={1.5} />
                </span>{" "}
                Lunes a viernes 08:00 a 16:00 hrs
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-md">
            <div className="p-4 md:p-7 rounded-md">
              <input
                type="text"
                placeholder="Nombres y apellidos"
                className="w-full  outline-none border
             border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-6 "
              />
              <input
                type="mail"
                placeholder="Correo"
                className="w-full outline-none border
                         border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-3 "
              />
              <label className="text-[#8a8a8a]">
                Consulta:
                <textarea
                  className="resize-none w-full h-40 outline-none border
                         border-[#ADADAD] p-3 rounded-md focus:border-[#1a1a1a] focus:text-[#1a1a1a] mb-3"
                  name="consulta"
                  id=""
                  placeholder="Escribenos tu consulta o comentario"
                ></textarea>
              </label>
              <input
                type="submit"
                placeholder="Correo"
                className="w-full outline-none p-3 rounded-md bg-[#990537] text-white uppercase"
              />
            </div>
          </div>
        </div>
      </div>
      {/* fin contacto */}
    </>
  )
}

export default ContactoBlock
