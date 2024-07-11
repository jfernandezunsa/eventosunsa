"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import CarouselApi from "./carouselApi"
import ButtonHero from "./buttomHero"

export function CarouselDemo() {
  return (
    <Carousel
      className="w-full"
      plugins={[Autoplay()]}
      opts={{
        loop: true,


      }}
    >
      <CarouselContent>
        <CarouselItem className="relative">
          <CarouselApi imageItem={"unsaslider001.webp"} textSub="Congreso Internacional" textMain="II Encuentro de Economía Solidaria e Innovación Socio Ecológica" textDate="07 - 08 Octubre 2024 Arequipa, Perú" buttonHero={<ButtonHero buttonText={"Registrate"} buttonLink={"#"} />} />
        </CarouselItem>
        <CarouselItem>
          <CarouselApi imageItem={"unsaslider002.webp"} textSub="Expositores Internacionales" textMain="Colombia, Perú, Mexico" textDate="Talleres y exposiciones gratuitas" buttonHero={<ButtonHero buttonText={"Participa"} buttonLink={"#"} />} />
        </CarouselItem>
        <CarouselItem>
          <CarouselApi imageItem={"city-tour-arequipa.webp"} textSub="Cultura, Gastromia, Aventura y diversión" textMain="Disfruta de Arequipa" textDate="Paseo Turisticos, degustaciones, Fin de fiesta" buttonHero={<ButtonHero buttonText="Tours y Hospedaje" buttonLink="#" />} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
