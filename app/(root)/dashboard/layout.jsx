'use client'

import React, {useState, useEffect} from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/apply-for-tutor/Navbar'
import { db } from "@/config/firebase";
import { tutorLinks, studentLinks } from "@/constants/data";
import { collection, query, where, getDocs } from "firebase/firestore";

const RootLayout = ({children}) => {
  const [menu, setMenu] = useState(false)
  const [sidebarLinks, setSidebarLinks] = useState([]);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const q = query(collection(db, "Students"), where("isTutor", "==", true));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)

        if (!querySnapshot.empty) {
          setSidebarLinks(studentLinks);
        } else {
          setSidebarLinks(tutorLinks);
        }
      } catch (error) {
        console.error("Error fetching user role: ", error);
      }
    };

    fetchUserRole();
  }, []);

  const openMenu = () => {
   setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
   }

  return (
    <div className='relative'>
       <Navbar openMenu={openMenu}/>
       <div className='flex'>
         <div className='overflow-hidden '>
            <Sidebar menu={menu} closeMenu={closeMenu} sidebarLinks={sidebarLinks}/>
        </div>

         <div className='w-full px-8 bg-black/5 overflow-y-scroll'>
            <div>{children}</div>
         </div>
       </div>
    </div>
  )
}

export default RootLayout