import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full"
    opts={{
        loop: true,
    }}
    >
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
                <img src="unsaslider001.webp" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
                <img src="unsaslider002.webp" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
                <img src="unsaslider003.webp" alt="" />
            </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
