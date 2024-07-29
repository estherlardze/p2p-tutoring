'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import { db } from "@/config/firebase";
import { tutorLinks, studentLinks, adminLinks } from "@/constants/data";
import { collection, query, where, getDocs } from "firebase/firestore";
import cookies from "js-cookie";

const RootLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const id = cookies.get("userId");

    const fetchUserRole = async () => {
      if (!id) {
        console.error("User ID not found in cookies.");
        return;
      }

      try {
        const q = query(collection(db, "Students"), where("uid", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();

          if (userData.isAdmin === true) {
            setSidebarLinks(adminLinks);
            setUserRole("Admin");
          } else if (userData.isTutor === true) {
            setSidebarLinks(tutorLinks);
            setUserRole("Tutor");
          } else {
            setSidebarLinks(studentLinks);
            setUserRole("Student");
          }
        } else {
          console.error("No user found with the given ID.");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='relative'>
      <Navbar openMenu={openMenu} userRole={userRole} />
      <div className='flex'>
        <div className='overflow-hidden '>
          <Sidebar menu={menu} closeMenu={closeMenu} sidebarLinks={sidebarLinks} />
        </div>
        <div className='w-full px-8 bg-black/5 overflow-y-scroll'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
