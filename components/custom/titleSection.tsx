import React from 'react'
interface Props{
    title: string
    color: string
}
const titleStyle = "text-[20px] md:text-[26px] font-extrabold font-montserrat before:content-[' '] before:w-[54px] before:h-[4px] before:block before:bg-[#D90B4F] before:mb-4 mb-5"
const TitleSection = ({title, color}:Props) => {
  return (
        <h3 className={(titleStyle,{color})}>{title}</h3>
  )
}

export default TitleSection