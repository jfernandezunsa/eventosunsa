import React from 'react'
import Icon from './iconName'
interface Props {
  /* icono: React.JSX.Element */
  icono: string
  texto: string
  size: number
}
const ObjetivoCard = ({ icono, texto, size }: Props) => {
  return (
    <div className="flex md:flex-col md:items-center gap-4 md:gap-4">
      <Icon name={icono} color="white" size={size} />
      <p className="md:text-lg mb-4">
        {texto}</p>
    </div>
  )
}

export default ObjetivoCard
