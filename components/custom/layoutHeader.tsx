import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import MenuMain from "./menuMain";

const LayoutHeader = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-40">
      <header className="bg-[#051F43] hidden sm:block p-3">
        <div className="text-white text-sm tracking-tight flex place-content-between items-center sm:max-w-[1200px] sm:m-auto">
          <p className="flex gap-1">
            <Mail size={20} /> fad_upg@unsa.edu.pe
          </p>
          <p className="flex gap-1">
            <Phone size={20} /> +01 959644577
            <MapPin size={20} />
            Campus Ingenierias Av. Venezuela s/n - Arequipa
          </p>
        </div>
      </header>
      <MenuMain />
    </div>
  );
};

export default LayoutHeader;
