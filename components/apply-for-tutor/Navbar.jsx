"use client";

import React from "react";
import Image from "next/image";
import avater from "../../public/avater.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ openMenu }) => {
  return (
    <div className="w-full sticky top-0 left-0 z-20">
      <div className="bg-white shadow-md h-[70px] flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold hidden sm:block">Logo</h1>

        <div className="sm:hidden" onClick={openMenu}>
          {<IoMdMenu size={25} />}
        </div>
        <div className="">
          <Image
            src={avater}
            alt="avater"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
