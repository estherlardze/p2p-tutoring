import Link from "next/link";
import React from "react";
import { FaHome, FaBook, FaUser } from "react-icons/fa";

const SidebarLinks = [
  {
    name: "Home",
    route: "/tutor-dashboard",
    icon: <FaHome />,
  },
  {
    name: "Lessons",
    route: "/tutor-dashboard/lessons",
    icon: <FaBook />,
  },
  {
    name: "Profile",
    route: "/tutor-dashboard/profile",
    icon: <FaUser />,
  },
  {
    name: "Payment",
    route: "/tutor-dashboard/payment",
    icon: <FaUser />,
  },
];
const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 px-8 py-4 z-10 w-full bg-white custom-sidebar-height shadow-md">
      {SidebarLinks.map((link) => (
        <Link href={link.route} key={link.name} className="flex py-2 gap-4 my-8 hover:bg-blue/40">
          <p className="text-2xl text-gray/60">{link.icon}</p>
          <p className="hidden md:block text-lg font-bold text-[#17142e]/80">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
