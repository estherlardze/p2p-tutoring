import React from 'react';


const HiwCard = ({icon, title, description}) => {
  return (
    <div className='bg-blue/85 shadow-md text-white p-4  rounded-sm col-span-10 md:col-span-5 h-[200px] sm:h-[170px] lg:col-span-4 2xl:col-span-2'>
       <h1 className='text-5xl mx-auto flex justify-center items-center'>{icon}</h1>
       <h1 className='font-bold my-3'>{title}</h1>
       <p className='text-sm'>{description}</p>
    </div>
  )
}

export default HiwCard
