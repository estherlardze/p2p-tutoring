"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import avater from "../../public/avater.png";
import { IoMdMenu } from "react-icons/io";
import { auth, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import cookies from "js-cookie";

const Navbar = ({ openMenu, userRole }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();


  const handleSignOut = () => {
    router.push("/");
    cookies.remove("studentId");
  };

  return (
    <div className="w-full sticky top-0 left-0 z-20">
      <div className="bg-white shadow-md h-[70px] flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold hidden sm:block">Logo</h1>

        <div className="sm:hidden" onClick={openMenu}>
          {<IoMdMenu size={25} />}
        </div>
        <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
          <Image
            src={avater}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          {open && (
            <div className="absolute right-0 mt-2 w-fit bg-white rounded-lg shadow-lg py-2">
              <h1 className="text-lg hover: px-4 py-2">{userRole}</h1>
              <button
                onClick={handleSignOut}
                className="text-lg  text-red-600 px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
