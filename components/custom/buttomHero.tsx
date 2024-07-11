import React from 'react'
interface Props{
    buttonText: string
    buttonLink: string
}
const ButtonHero = ({buttonText, buttonLink}:Props) => {
  return (
    <a href={buttonLink} className="p-4 bg-[#D90B4f] sm:mt-0  mt-4 inline-block text-white hover:bg-[#99054f] duration-500">{buttonText}</a>
  )
}

export default ButtonHero