import React from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/apply-for-tutor/Navbar'

const RootLayout = ({children}) => {
  return (
    <div className='relative'>
       <Navbar/>

       <div className='flex'>
         <div className=''>
            <Sidebar/>
        </div>

         <div className='w-full px-6 bg-black/5'>
            <div>{children}</div>
         </div>
       </div>
    </div>
  )
}

export default RootLayout