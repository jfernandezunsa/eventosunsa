import { cn } from '../../lib/utils'
import React from 'react'
interface Props {
  title: string
  className: string
}

const titleStyle = "text-[20px] md:text-[26px] font-extrabold font-montserrat before:content-[' '] before:w-[54px] before:h-[4px] before:block before:bg-[#D90B4F] before:mb-4 mb-5"

const TitleSection = ({ title, className }: Props) => {
  return (
    <h3 className={cn(titleStyle, className)}>{title}</h3>
  )
}

export default TitleSection
