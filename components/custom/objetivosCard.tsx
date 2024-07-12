import React from 'react'
interface Props {
  icono: React.JSX.Element
  texto: string
}
const ObjetivoCard = ({ icono, texto }: Props) => {
  return (
    <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
      {icono}
      <p className="md:text-lg mb-4">
        {texto}</p>
    </div>
  )
}

export default ObjetivoCard
