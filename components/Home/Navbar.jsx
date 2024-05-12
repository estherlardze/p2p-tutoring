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
      <section className="flex justify-between py-5 px-8">
        <h1 className="text-2xl font-bold">LoGo</h1>
        <div className="hidden md:flex gap-8">
          <a href="/" className="text-[17px] font-semibold cursor-pointer">
            Home
          </a>
          <a href="/" className="text-[17px] font-semibold cursor-pointer">
            How it works
          </a>
          <Link href="/apply-for-tutor" className="text-[17px] font-semibold cursor-pointer">
            Become a tutor
          </Link>
          <a href="/" className="text-[17px] font-semibold cursor-pointer">
            Contact
          </a>
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/login" className="font-semibold text-[17px]">
            Login
          </Link>
          <Link href="/sign-up" className="font-semibold text-[17px]">
            Sign up
          </Link>
        </div>

        <div className="md:hidden" onClick={() => setMenu(true)}>
          {<IoMdMenu size={25} />}
        </div>
      </section>

      {menu && (
        <div className="bg-black/95 w-full h-[100vh] fixed md:hidden top-0 left-0 justify-center items-center">
          {menu && (
            <IoMdClose
              size={25}
              onClick={() => setMenu(false)}
              className="absolute top-8 right-8"
            />
          )}

          <div className="flex justify-center items-center flex-col h-screen text-lg sm:text-xl gap-y-4">
            <Link hre="/" className="font-semibold cursor-pointer">Home</Link>
            <Link href='/' className="font-semibold cursor-pointer">How it works</Link>
            <Link href="/apply-for-tutor" className="font-semibold cursor-pointer">Become a tutor</Link>
            <Link href='/' className="font-semibold cursor-pointer">Contact</Link>

            <Link href="/login" className="font-semibold text-[17px]">
              Login
            </Link>
            <Link href="/sign-up" className="font-semibold text-[17px]">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
