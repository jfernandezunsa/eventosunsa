import { CircleArrowRight } from 'lucide-react'
import React from 'react'
interface Props {
  ejeTematico: string
  imagen: string

}
const EjesTematicos = ({ ejeTematico, imagen }: Props) => {
  return (
    <div className="relative">
      <div className="flex gap-3 bg-gradient-to-b from-transparent to-black p-4 z-10 w-full absolute bottom-0">
        <div><CircleArrowRight size={30} /></div>
        <h5 className="font-montserrat font-semibold shadow-md">{ejeTematico}</h5>
      </div>
      <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full [&>*]:grayscale"><img src={imagen} alt="" /></div>
    </div>
  )
}

export default EjesTematicos
