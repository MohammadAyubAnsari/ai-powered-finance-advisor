"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* logo */}
        <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">SmartFinance</span>
      </div>
      <div>
        <button>button 1</button>
        <button>button 1</button>
      </div>
    </div>
  );
};

export default Header;
