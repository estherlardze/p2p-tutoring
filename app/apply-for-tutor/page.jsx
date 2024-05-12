import React from 'react'
import { Navbar, Footer } from '@/components'
import BecomeTutor from '@/components/apply-for-tutor/BecomeTutor'

const page = () => {
  return (
    <div>
      <Navbar/>
      <BecomeTutor/>
      <Footer/>
    </div>
  )
}

export default page