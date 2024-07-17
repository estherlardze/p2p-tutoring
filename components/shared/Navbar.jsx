"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [changebg, setChangeBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        changebg ? "bg-white text-black" : ""
      } fixed top-0 left-0 w-full transition-all duration-300 h-[68px]`}
    >
      <section className="flex justify-between py-5 px-4 sm:px-8 2xl:w-[1500px] 2xl:mx-auto z-50">
        <h1 className="text-2xl font-bold">LoGo</h1>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-[17px] font-semibold cursor-pointer">
            Home
          </Link>
          <Link href="/apply-as-tutor" className="text-[17px] font-semibold cursor-pointer">
            Become a tutor
          </Link>
          {/* <Link
            href="/tutors"
            className="text-[17px] font-semibold cursor-pointer"
          >
            Tutors
          </Link>*/}
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/login" className="font-semibold text-[17px]">
            Login
          </Link>
          <Link href="/sign-up" className="font-semibold text-[17px]">
            Sign up
          </Link>
        </div>

        <div className="md:hidden" onClick={() => setMenu(!menu)}>
         {menu ? <IoMdClose size={25} /> : <IoMdMenu size={25}/>}
        </div>
      </section>

      <div
        className={`fixed left-0 top-0 px-6 py-4 z-50 h-full w-[70%] bg-white text-black shadow-md transform transition-transform duration-500 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex flex-col h-screen text-lg sm:text-xl gap-y-4">
          <Link
            href="/"
            className="font-semibold  cursor-pointer border-b border-gray-2/70"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/apply-as-tutor"
            className="font-semibold cursor-pointer my-2 border-b border-gray-2/70"
            onClick={() => setMenu(false)}
          >
            Become a tutor
          </Link>
          {/*   <Link
            href="/tutors"
            className="font-semibold cursor-pointer my-2 border-b border-gray-2/70"
            onClick={() => setMenu(false)}
          >
            Tutors
          </Link>*/}

          <Link
            href="/login"
            className="font-semibold text-[17px] border-b border-gray-2/70"
            onClick={() => setMenu(false)}
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="font-semibold my-2 text-[17px]"
            onClick={() => setMenu(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
