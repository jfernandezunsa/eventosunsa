import React from 'react'
interface Props {
  imagen: string
  nombres: string
  origen: string
  resumen: string
}
const PonentesBloque = ({ imagen, nombres, origen, resumen }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[350px] [&>*]:object-cover [&>*]:w-full [&>*]:h-full ">
        <img src={imagen} alt="" />
      </div>
      <h5 className="text-xl font-extrabold font-montserrat">{nombres}</h5>
      <h6 className="text-sm md:text-base font-bold font-montserrat text-balance">{origen}</h6>
      <p className="hidden md:block ">{resumen}</p>
    </div>
  )
}

export default PonentesBloque
