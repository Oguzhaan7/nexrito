import React from "react";
import Image from "next/image";

const Wallpaper = () => {
  return (
    <div className="absolute w-full h-48 md:h-96 overflow-hidden pointer-events-none opacity-90 border-b border-slate-600 z-10">
      <Image
        src="/images/wallpaper.jpg"
        alt="League of Legends"
        layout="fill"
        objectFit="none"
        objectPosition="center top"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/70 via-transparent to-indigo-600/10" />
    </div>
  );
};

export default Wallpaper;
