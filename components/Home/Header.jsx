import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center  justify-center flex-col h-screen sm:h-[95vh] w-[90%] mx-[5%] sm:w-[50%] sm:mx-[25%]'>
        <h1 className='font-bold text-center sm:text-3xl text-2xl  md:text-[41px] leading-[1.3]'>
            Book private lessons with an expert colleague
        </h1>
        <p className='font-slang sm:text-lg text-center my-6'>
            Get started and get the result you want
        </p>
    </div>
  )
}

export default Header