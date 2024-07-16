'use client'

import React, {useState, useEffect} from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/apply-for-tutor/Navbar'
import { db } from "@/config/firebase";
import { tutorLinks, studentLinks } from "@/constants/data";
import { collection, query, where, getDocs } from "firebase/firestore";
import cookies from "js-cookie";

const RootLayout = ({children}) => {
  const [menu, setMenu] = useState(false)
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {

    const id = cookies.get("studentId", {expires: 2/24});
    const fetchUserRole = async () => {
      const q = query(collection(db, "Students"), where("studentId", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if(userData.isTutor === false){
          setSidebarLinks(studentLinks);
          setUserRole("Student");
        }else {
          setSidebarLinks(tutorLinks);
          setUserRole("Tutor");}
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
       <Navbar openMenu={openMenu} userRole={userRole}/>
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