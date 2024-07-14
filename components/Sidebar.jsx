import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";


const Sidebar = ({ menu, closeMenu, sidebarLinks }) => {
  const pathname = usePathname()


  return (
    <section>
      <div className="sticky hidden sm:block w-[250px] 2xl:w-[400px] top-0 left-0 z-10 bg-white custom-sidebar-height text-black/70 shadow-md">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;
          return(
          <Link
            href={link.route}
            key={link.name}
            className={` ${isActive ? "bg-blue/80 border-r-4 border-blue text-white" : "transparent"} flex text-black/70 py-2 gap-4 pl-4 my-8 hover:bg-blue/80 hover:text-white transition-all duration-200`}
          >
            <p className="text-2xl text-gray/60">{link.icon}</p>
            <p className="hidden lg:block text-lg font-bold">{link.name}</p>
          </Link>
)})}
      </div>

      <div
        className={`fixed left-0 top-0 px-8 py-4 z-50 h-full w-fit bg-white shadow-md transform transition-transform duration-500 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-end justify-end" onClick={closeMenu}>
          <IoMdClose size={25} />
        </div>

        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.name}
            className="flex py-2 gap-4 my-8 hover:bg-blue/40"
            onClick={closeMenu}
          >
            <p className="text-2xl text-gray/60">{link.icon}</p>
            <p className="text-lg font-bold text-[#17142e]/80">{link.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;