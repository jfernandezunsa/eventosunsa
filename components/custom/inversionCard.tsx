import React from 'react'
interface Props {
  tipoParticipante: string
  costoNacionales: string
  costoTerminal?: string
  moneda: string
  observacion?: string
  linkRegistro: string
}
const InversionCard = ({ tipoParticipante, costoNacionales, costoTerminal, moneda, observacion }: Props) => {
  return (
    <div className="bg-[#051F4380] rounded-lg text-white flex flex-col justify-around">
      <h4 className="bg-[#051F4380] rounded-tl-lg rounded-tr-lg p-7 mb-7 font-extrabold font-montserrat text-balance md:min-h-[100px]">
        {tipoParticipante}
      </h4>
      <div className="flex mx-7 mb-2">
        <span className="font-bold text-lg w-14">{moneda}</span>
        <p className="font-extrabold text-3xl line-through">{costoTerminal}</p>
      </div>
      <div className="flex mx-7 mb-2 ">
        <span className="font-bold text-xl w-14">{moneda}</span>
        <p className="font-extrabold text-5xl">{costoNacionales}</p>
      </div>
      <p className="px-7">{observacion}</p>
      <a href="linkRegistro" className="bg-[#990537] block mx-7 mb-7 mt-4 p-x-3 uppercase text-center tracking-tighter rounded-lg py-3">
        Inscribete aqui
      </a>
    </div>
  )
}

export default InversionCard
