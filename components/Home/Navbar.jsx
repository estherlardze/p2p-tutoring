'use client'

import React, { useState, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
 const [menu, setMenu] = useState(false)
 const [changebg, setChangeBg] = useState(false)

 useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY >= 80){
            setChangeBg(true);
        }
        else{
            setChangeBg(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
 }, [])



  return (
    <nav className={`${changebg ? 'bg-white text-black' : ''} fixed top-0 left-0 w-full transition-all duration-300`}>
      <section className='flex justify-between py-5 px-8'>
        <h1 className='text-2xl font-bold'>LoGo</h1>
      <ul className='hidden md:flex gap-8'>
        <li className='text-[17px] font-semibold cursor-pointer'>Home</li>
        <li className='text-[17px] font-semibold cursor-pointer'>How it works</li>
        <li className='text-[17px] font-semibold cursor-pointer'>About</li>
        <li className='text-[17px] font-semibold cursor-pointer'>Contact</li> 
      </ul>

      <div className='hidden md:flex gap-4'>
        <button className='font-semibold text-[17px] cursor-pointer'>Login</button>
        <button className='font-semibold text-[17px] cursor-pointer'>Sign up</button>
      </div>

     <div className='md:hidden' onClick={() => setMenu(true)}>
      { <IoMdMenu size={25}/>}
     </div>
    </section>

     {
     menu && 
     (
        <div className='bg-black/95 w-full h-[100vh] fixed md:hidden top-0 left-0 justify-center items-center'>
          {menu &&
            <IoMdClose 
              size={25} 
              onClick={() => setMenu(false)}
              className='absolute top-8 right-8'/>
           }

          <div className='flex justify-center items-center flex-col h-screen text-lg sm:text-xl gap-y-4'>
            <p className='font-semibold cursor-pointer'>Home</p>
            <p className='font-semibold cursor-pointer'>How it works</p>
            <p className='font-semibold cursor-pointer'>About</p>
            <p className='font-semibold cursor-pointer'>Contact</p> 

            <button className='font-semibold  cursor-pointer'>Login</button>
            <button className='font-semibold cursor-pointer'>Sign up</button>
          </div>
        </div>
     )}
    </nav>
  )
}

export default Navbar