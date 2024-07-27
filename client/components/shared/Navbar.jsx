"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [changebg, setChangeBg] = useState(false);
  const router = usePathname();

  const isActive = (path) => {
    return router === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80 && router === "/") {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  const getNavBgColor = () => {
    if (router === "/") {
      return changebg ? "bg-white" : "bg-transparent";
    } else {
      return "bg-black";
    }
  };

  const getTextColor = (isActivePath) => {
    if (router === "/") {
      return isActivePath ? "text-blue" : changebg ? "text-black" : "text-white";
    } else {
      return isActivePath ? "text-blue" : "text-white";
    }
  };

  const getMenuIconColor = () => {
    if (router === "/") {
      return changebg ? "text-black" : "text-white";
    } else {
      return "text-white";
    }
  };

  return (
    <nav
      className={`${getNavBgColor()} fixed top-0 left-0 w-full transition-all duration-300 h-[68px]`}
    >
      <section className="flex justify-between py-5 px-4 sm:px-8 2xl:w-[1500px] 2xl:mx-auto z-50">
        <h1 className={`text-2xl font-bold ${router === "/" ? (changebg ? "text-black" : "text-white") : "text-white"}`}>
          LoGo
        </h1>
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className={`text-[17px] font-semibold cursor-pointer transition-all ${getTextColor(isActive("/"))}`}
          >
            Home
          </Link>
          <Link
            href="/apply-as-tutor"
            className={`text-[17px] font-semibold cursor-pointer transition-all ${getTextColor(isActive("/apply-as-tutor"))}`}
          >
            Become a tutor
          </Link>
          <Link
            href="/tutors"
            className={`text-[17px] font-semibold cursor-pointer transition-all ${getTextColor(isActive("/tutors"))}`}
          >
            Tutors
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className={`text-[17px] font-semibold cursor-pointer transition-all ${getTextColor(isActive("/login"))}`}
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className={`text-[17px] font-semibold cursor-pointer transition-all ${getTextColor(isActive("/sign-up"))}`}
          >
            Sign up
          </Link>
        </div>

        <div className={`lg:hidden ${getMenuIconColor()}`} onClick={() => setMenu(!menu)}>
          {menu ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
        </div>
      </section>

      {menu && (
        <div className="w-full bg-white z-50 text-black fixed lg:hidden top-[70px] h-full left-0 right-0 justify-center items-center transition-transform duration-700">
          <div className="flex justify-center items-left pl-6 py-8 flex-col h-fit text-lg sm:text-xl gap-y-4">
            <Link
              href="/"
              className="font-semibold cursor-pointer border-b border-gray-200"
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
            <Link
              href="/apply-as-tutor"
              className="font-semibold cursor-pointer my-2 border-b border-gray-200"
              onClick={() => setMenu(false)}
            >
              Become a tutor
            </Link>
            <Link
              href="/tutors"
              className="font-semibold cursor-pointer my-2 border-b border-gray-200"
              onClick={() => setMenu(false)}
            >
              Tutors
            </Link>

            <Link
              href="/login"
              className="font-semibold text-[17px] border-b border-gray-200"
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
      )}
    </nav>
  );
};

export default Navbar;
