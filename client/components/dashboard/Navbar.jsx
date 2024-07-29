"use client";

import React, { useState } from "react";
import Image from "next/image";
import avater from "../../public/avater.png";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import cookies from "js-cookie";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { signOut } from "firebase/auth";

const Navbar = ({ openMenu, userRole }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      cookies.remove("userId");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-full sticky top-0 left-0 z-20">
      <div className="bg-white shadow-md h-[70px] flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold hidden sm:block">connected</h1>

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
            <div className="absolute right-0 mt-2 w-fit bg-white rounded-lg shadow-lg py-2 px-2 text-blue font-bold">
              <div className="items-center gap-1 flex my-2">
                <PiStudentDuotone />
                <h1 className="">{userRole}</h1>
              </div>
              <div className="items-center gap-1 flex my-3">
                <MdOutlineLogout />
                <button
                  onClick={handleSignOut}
                  className=""
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
