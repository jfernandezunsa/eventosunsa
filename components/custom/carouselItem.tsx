import React from "react";
import ButtonHero from "./buttomHero";
interface Props {
  imageItem: string;
  textSub?: string;
  textMain?: string;
  textDate?: string;
  buttonHero?: React.JSX.Element;
}

const CarouselItem = ({
  imageItem,
  textSub,
  textMain,
  textDate,
  buttonHero,
}: Props) => {
  return (
    <>
      <div className="w-full h-[70vh] [&>*]:object-cover [&>*]:w-full [&>*]:h-full absolute">
        <img src={imageItem} alt="" className="h-14" />
      </div>
      <div className="h-[70vh] sm:h-[70vh] bg-cover w-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#051f4380] from-0% to-[#051F43] to-70% flex items-center place-content-center absolute z-20">
        <div className="text-white font-montserrat mx-10 sm:mx-14 sm:max-w-[500px] md:max-w-[500px] lg:max-w-[900px] flex flex-col gap-4 sm:gap-6 md:gap-10">
          <h6 className="font-light lg:font-bold text-2xl leading-7 md:text-3xl lg:text-4xl sm:text-center">
            {textSub}
          </h6>
          <h5 className="font-bold lg:font-extrabold text-3xl md:text-4xl lg:text-5xl leading-9 lg:leading-tight sm:text-center text-balance">
            {textMain}
          </h5>
          <div className="sm:flex place-content-between lg:mx-20">
            <p className="text-primary-light text-balance max-w-[250px]">
              {textDate}
            </p>
            {buttonHero}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
