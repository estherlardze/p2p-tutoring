import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center  justify-center flex-col h-[50vh] sm:h-[95vh] w-[90%] sm:w-[50%] mx-auto'>
        <h1 className='font-bold text-center text-4xl  lg:text-6xl sm:leading-[60px]'>
            Book private lessons with an expert colleague
        </h1>
        <p className='font-slang text-lg sm:text-xl text-center my-6'>
            Get started and get the result you want
        </p>
    </div>
  )
}

export default Header