import React from "react";
import Image from "next/image";


function LayoutFooter() {
  return (
    <footer className="bg-[#990537] [&>*]:p-6">
      <div className="text-white text-sm tracking-tight flex place-content-between items-center sm:max-w-[1200px] sm:m-auto">
        <div>
          <Image src="logounsafndgran.svg" alt="" width={130} height={80} />
        </div>
        <div className="flex gap-2 opacity-70 [&>*]:h-7">
          <Image src="icon-facebook.svg" alt="" width={28} height={28} />
          <Image src="icon-instagram.svg" alt="" width={28} height={28} />
          <Image src="icon-linkedin.svg" alt="" width={28} height={28} />
          <Image src="icon-youtube.svg" alt="" width={28} height={28} />
          <Image src="icon-tiktok.svg" alt="" width={28} height={28} />
        </div>
      </div>
    </footer>
  );
}

export default LayoutFooter;
