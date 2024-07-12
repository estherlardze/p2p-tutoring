import React from 'react'
import Image from "next/image";
import { tutor5 } from "../../public";


const Requirement = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mx-auto w-[90%] ">
    <div className="w-full md:w-1/2">
      <h1 className="font-bold text-2xl mb-3">
        Requirements to Become a Tutor
      </h1>
      <p>
        <strong>Academic Excellence:</strong> A strong academic record in
        the courses you wish to tutor.
      </p>
      <p className="my-3">
        <strong>Communication Skills:</strong> Ability to explain concepts
        clearly and effectively
      </p>
      <p className="mb-3">
        <strong>Reliability:</strong> Commitment to scheduled sessions and
        timely communication with students.
      </p>
      <p>
        <strong>Empathy and Patience:</strong> Understanding of students&apos;
        needs and a supportive approach to teaching
      </p>
    </div>

    <div className="w-full md:w-1/2">
      <Image src={tutor5} className="w-full md:w-1/2" alt="tutor"/>
    </div>
  </div>
  )
}

export default Requirement
