import React from 'react'
import { goal } from '@/public'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:items-center mx-auto w-[90%]">
    <Image src={goal} className="w-full md:w-1/2" alt="feature"/>

    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-bold ">
        Share Your Knowledge and Earn Income
      </h1>
      <p className="text-[14px] text-gray-1 my-4">
        Are you excelling in your courses? Do you have a passion for
        teaching and helping others succeed? Join our Peer-to-Peer
        Tutoring Platform as a tutor and make a difference in your peers&apos;
        academic journeys while earning income.
      </p>
      <p className="text-[14px] text-gray-1 my-4">
        Your expertise can help others succeed, and your dedication will
        be rewarded both personally and financially. Ready to get started?
        Sign Up now and complete your tutor profile
        today!
      </p>
      <Link href="/onboarding" className="bg-blue/90 flex w-fit text-white font-bold py-2 px-4">
        Get Started
      </Link>
    </div>
  </div>

  )
}

export default Header
