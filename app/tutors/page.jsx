"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "@/components";
import { tutors } from "../../constants/tutor";
import TutorCard from "@/components/tutorpage/TutorCard";

const Tutors = () => {
  const [search, setSearch] = useState("");

  const filteredTutors = tutors.filter((tutor) =>
    tutor.courses.some((course) =>
      course.toLowerCase().includes(search.toLowerCase())
    )
  );

 
  return (
    <div>
      <Navbar />

      <section className="w-full bg-black/10 mt-[70px] pb-[70px] h-screen overflow-y-scroll scrollable-container pt-3">
        <div className=" w-[90%] mx-[5%] 2xl:w-[1500px] 2xl:mx-auto">
          <div className="my-6 w-[100%] sm:w-[40%]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search for a course"
              className="outline-none border border-gray-2/65 rounded-lg py-2 px-4 w-full"
            />
          </div>

         
          <div className="flex flex-col gap-7 flex-1">
            {filteredTutors.length ? filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            )) : (<h1 className="text-center font-bold text-3xl text-red-500">No Tutors Found</h1>)}
          </div>
        </div>

      </section>

      {search === "" && <Footer />}
    </div>
  );
};

export default Tutors;
