import React from 'react'
import Image from 'next/image'
import avater from '../../public/avater.png'

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 left-0 z-20'>
      <div className='bg-white shadow-md h-[70px] flex justify-between items-center px-4'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <div className=''>
          <Image src={avater} alt="avater" width={50} height={50} className='rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar