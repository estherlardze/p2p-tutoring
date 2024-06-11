import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex items-center  justify-center flex-col h-[80%] sm:h-[95vh] w-[90%] mx-[5%] sm:w-[50%] sm:mx-[25%]'>
        <h1 className='font-bold text-center text-3xl sm:text-[35px] md:text-[41px] leading-[1.3]'>
            Book private lessons with an expert colleague
        </h1>
        <p className='text-lg text-center my-6'>
            Get started and get the result you want
        </p>
    </div>
  )
}

export default Header