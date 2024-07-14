// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TitleSection from '@/components/custom/titleSection';
import { fetchEjeTematico } from '../../lib/api';
import { CircleArrowRight } from 'lucide-react';

interface imageEjeTematico {
  url: string;
}

interface EjeTematico {
  id: number;
  attributes: {
    ejeTematico: string;
    imageEjeTematico: {
      data: {
        attributes: imageEjeTematico
      }
    } | {
      data: {
        attributes: imageEjeTematico
      }
    }[];
  };
}

const EjesTematicos: React.FC = () => {
  const [ejeTematico, setEjeTematico] = useState<EjeTematico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEjeTematico = async () => {
      try {
        const data = await fetchEjeTematico();
        setEjeTematico(data);
      } catch (error) {
        setError('Error al obtener los datos de los ponentes');
      } finally {
        setLoading(false);
      }
    };

    getEjeTematico();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="font-lato text-base">
      <div className="lg:max-w-[1200px] m-auto bg-gradient-to-r from-[#5E151E] to-[#051F43] text-white p-8 sm:p-[54px] md:p-[74px]">
        <TitleSection title="Ejes Temáticos" className="text-white" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
          {ejeTematico.map((ejeTematico) => (
            <div className="relative">
              <div className="flex gap-3 bg-gradient-to-b from-transparent to-black p-4 z-10 w-full absolute bottom-0">
                <div><CircleArrowRight size={30} /></div>
                <h5 className="font-montserrat font-semibold shadow-md">{ejeTematico.attributes.ejeTematico}</h5>
              </div>
              {Array.isArray(ejeTematico.attributes.imageEjeTematico) ? (
                ejeTematico.attributes.imageEjeTematico.map((image, index) => (
                  <div key={index} className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full [&>*]:grayscale">
                    <Image
                      src={`http://localhost:1337${image.data.attributes.url}`}
                      alt={ejeTematico.attributes.ejeTematico}
                      width={500}
                      height={500}
                    />
                  </div>
                ))
              ) : (
                ejeTematico.attributes.imageEjeTematico && (
                  <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full">
                    <Image
                      src={`http://localhost:1337${ejeTematico.attributes.imageEjeTematico.data.attributes.url}`}
                      alt={ejeTematico.attributes.ejeTematico}
                      width={500}
                      height={500}
                      className='grayscale hover:grayscale-0'
                    />
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EjesTematicos;
