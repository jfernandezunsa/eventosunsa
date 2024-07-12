import React from "react";

function LayoutFooter() {
  return (
    <footer className="bg-[#990537] [&>*]:p-6">
      <div className="text-white text-sm tracking-tight flex place-content-between items-center sm:max-w-[1200px] sm:m-auto">
        <div>
          <img src="logounsafndgran.svg" alt="" className="h-11" />
        </div>
        <div className="flex gap-2 opacity-70 [&>*]:h-7">
          <img src="icon-facebook.svg" alt="" />
          <img src="icon-instagram.svg" alt="" />
          <img src="icon-linkedin.svg" alt="" />
          <img src="icon-youtube.svg" alt="" />
          <img src="icon-tiktok.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default LayoutFooter;
