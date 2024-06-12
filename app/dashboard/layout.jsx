'use client'

import React, {useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/apply-for-tutor/Navbar'

const RootLayout = ({children}) => {
  const [menu, setMenu] = useState(false)

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
            <Sidebar menu={menu} closeMenu={closeMenu}/>
        </div>

         <div className='w-full px-8 bg-black/5 overflow-y-scroll'>
            <div>{children}</div>
         </div>
       </div>
    </div>
  )
}

export default RootLayout