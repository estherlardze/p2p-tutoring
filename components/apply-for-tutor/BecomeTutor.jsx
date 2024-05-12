import React from 'react'
import Image from 'next/image'
import tutor from '../../public/faq.jpg'

const BecomeTutor = () => {
  return (
    <div className='flex  flex-col my-[70px]'>
        <h1>Become a tutor</h1>

        <div className='flex  justify-center items-center mx-[10%] w-[80%]'>
            <Image src={tutor} alt="" height={500} width={500}/>
            <h1>ee</h1>
        </div>
    </div>
  )
}

export default BecomeTutor