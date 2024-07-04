"use client";

import React, { useState } from "react";
import { tutors } from "../../constants/tutor";
import TutorCard from "@/components/tutorpage/TutorCard";
import { Navbar, Footer } from "@/components";

const Tutors = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    // Remove numeric characters from input
    const filteredValue = e.target.value.replace(/[0-9]/g, "");
    setSearch(filteredValue);
  };

  const filteredTutors = tutors.filter((tutor) =>
    tutor.courses.some((course) =>
      course.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <main>
      <Navbar />

      <section className="w-full bg-black/10 mt-[70px] pb-[70px] h-screen overflow-y-scroll scrollable-container pt-3">
        <div className=" w-[90%] mx-[5%] 2xl:w-[1500px] 2xl:mx-auto">
          <div className="my-6 w-[100%] sm:w-[40%]">
            <input
              value={search}
              onChange={handleInputChange}
              type="text"
              placeholder="search for a course"
              className="outline-none border border-gray-2/65 rounded-lg py-2 px-4 w-full"
            />
          </div>

          <div className="flex flex-col gap-7 flex-1">
            {filteredTutors.length ? (
              filteredTutors.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))
            ) : (
              <h1 className="text-center font-bold text-3xl text-red-500">
                No Tutors for {search}
              </h1>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Tutors;
