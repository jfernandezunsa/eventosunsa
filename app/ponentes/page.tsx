// pages/App.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { fetchPonents } from '../../lib/api';
import Image from 'next/image';

import TitleSection from '@/components/custom/titleSection';

interface ImagePonent {
  url: string;
}

interface Ponent {
  id: number;
  attributes: {
    namePonent: string;
    originPonent: string;
    imagePonent: { data: { attributes: ImagePonent } } | { data: { attributes: ImagePonent } }[]; // Manejar ambos casos
  };
}

const App: React.FC = () => {
  const [ponents, setPonents] = useState<Ponent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPonents = async () => {
      try {
        const data = await fetchPonents();
        console.log(data); // Ver la estructura de los datos
        setPonents(data);
      } catch (error) {
        setError('error al jalar datos');
      } finally {
        setLoading(false);
      }
    };
    getPonents();
  }, []);

  if (loading) return <div>Cargando</div>;
  if (error) return <div>{error}</div>;

  return (
    <>

      <main className="font-lato text-base">


        {/* Inicio Ponentes */}
        <div className="lg:max-w-[1200px] m-auto bg-[#051F43] p-8 sm:p-[54px] md:p-[74px] text-white mt-[150px]">
          <TitleSection title="Ponentes" className="text-white" />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-16 lg:px-12 pt-7 ">
            {ponents.map((ponent) => (
              <div key={ponent.id} className="flex flex-col gap-4">
                {Array.isArray(ponent.attributes.imagePonent) ? (
                  ponent.attributes.imagePonent.map((image, index) => (
                    <Image key={index} src={image.data.attributes.url} alt={ponent.attributes.namePonent} width={100} height={100} />
                  ))
                ) : (
                  ponent.attributes.imagePonent && (
                    <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full ">
                      <Image
                        src={`http://localhost:1337${ponent.attributes.imagePonent.data.attributes.url}`}
                        alt={ponent.attributes.namePonent}
                        width={350}
                        height={350}
                      />
                    </div>
                  )
                )}
                <h5 className="text-xl font-extrabold font-montserrat">{ponent.attributes.namePonent}</h5>
                <h6 className="text-sm md:text-base font-bold font-montserrat text-balance">{ponent.attributes.originPonent}</h6>
              </div>
            ))}
          </div>
        </div>
        {/* Fin Ponentes */}
      </main>
    </>
  );
};

export default App;
