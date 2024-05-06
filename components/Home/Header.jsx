import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh] max-w-lg mx-[5%] md:mx-auto'>
        <h1 className='font-bold text-3xl sm:text-[35px] md:text-[41px] text-center leading-[1.3]'>
            Book private lessons with an expert colleague
        </h1>
        <p className='text-lg text-center my-6'>
            Get started and get the result you want
        </p>
        <div className='hidden sm:flex justify-between bg-white rounded-l-3xl w-full pl-4'>
            <input 
              type="text" 
              placeholder='Search tutor by course'
              className='outline-none text-black'/>
            <div className='bg-blue py-2 px-4 flex items-center gap-2'>
              <IoIosSearch size={23} className='font-semibold'/>
              <button className='font-semibold'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Header