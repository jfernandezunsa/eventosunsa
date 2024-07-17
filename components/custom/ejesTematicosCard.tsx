import { CircleArrowRight, Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
interface Props {
  ejeTematico: string
  imagen: string

}
const EjesTematicosCard = ({ ejeTematico, imagen }: Props) => {
  return (
    <div className="relative">
      <div className="flex gap-3 bg-gradient-to-b from-transparent to-black p-4 z-10 w-full absolute bottom-0">
        <div><CircleArrowRight size={30} /></div>
        <a href='/ejestematicos'><h5 className="font-montserrat font-semibold shadow-md">{ejeTematico}</h5></a>
      </div>
      <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full [&>*]:grayscale"><Image src={imagen} alt={''} width={300} height={300} className='grayscale hover:grayscale-0' /></div>
      {/* <img src={imagen} alt="" /> */}
    </div>
  )
}

export default EjesTematicosCard
