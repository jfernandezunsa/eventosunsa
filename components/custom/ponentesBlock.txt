// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TitleSection from '@/components/custom/titleSection';
import { fetchPonents } from '../../lib/api';
import Aos from "aos";
import 'aos/dist/aos.css'



interface ImagePonent {
  url: string;
}

interface Ponent {
  id: number;
  attributes: {
    namePonent: string;
    originPonent: string;
    descriptionPonent: {
      type: string;
      children: {
        type: string;
        text: string;
      }[];
    }[];
    imagePonent: {
      data: {
        attributes: ImagePonent
      }
    } | {
      data: {
        attributes: ImagePonent
      }
    }[];
  };
}

const PonentesBlock: React.FC = () => {
  const [ponents, setPonents] = useState<Ponent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getPonents = async () => {
      try {
        const data = await fetchPonents();
        setPonents(data);
      } catch (error) {
        setError('Error al obtener los datos de los ponentes');
      } finally {
        setLoading(false);
      }
    };

    getPonents();
    Aos.init();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="font-lato text-base">
      <div className="lg:max-w-[1200px] m-auto bg-[#051F43] p-8 sm:p-[54px] md:p-[74px] text-white">
        <TitleSection data-aos="fade-left" title="Ponentes" className="text-white" />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-16 lg:px-12 pt-7">
          {ponents.map((ponent) => (
            <div key={ponent.id} className="flex flex-col gap-4">
              {Array.isArray(ponent.attributes.imagePonent) ? (
                ponent.attributes.imagePonent.map((image, index) => (
                  <div key={index} className="w-full h-[350px] object-cover">
                    <Image
                      src={`http://localhost:1337${image.data.attributes.url}`}
                      alt={ponent.attributes.namePonent}
                      width={500}
                      height={500}
                    />
                  </div>
                ))
              ) : (
                ponent.attributes.imagePonent && (
                  <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full">
                    <Image
                      src={`http://localhost:1337${ponent.attributes.imagePonent.data.attributes.url}`}
                      alt={ponent.attributes.namePonent}
                      width={500}
                      height={500}
                    />
                  </div>
                )
              )}
              <h5 className="text-xl font-extrabold font-montserrat">{ponent.attributes.namePonent}</h5>
              <h6 className="text-sm md:text-base font-bold font-montserrat text-balance">{ponent.attributes.originPonent}</h6>
              <p>{ponent.attributes.descriptionPonent[0].children[0].text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PonentesBlock;
