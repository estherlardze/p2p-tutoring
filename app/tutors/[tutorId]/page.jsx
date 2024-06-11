"use client";

import React from "react";
import { useParams } from "next/navigation";
import { tutors } from "@/constants/tutor";
import { Footer, Navbar, Reviews, Availability, Ratings } from "@/components";
import Image from "next/image";
import Popup from "@/components/tutorpage/Modal";

const page = () => {
  const { tutorId } = useParams();
  const tutor = tutors.find((tutor) => tutor.id === parseInt(tutorId));

  if (!tutor) return <div>Tutor not found</div>;

  return (
    <main>
      <div className="z-50">
        <Navbar />
      </div>

      <section className="bg-black/10 w-full mt-[70px] pb-[70px] overflow-y-scroll scrollable-container pt-3">
        <div className="mx-auto w-[90%]  2xl:w-[1500px] 2xl:mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Image
              src={tutor.image}
              alt={tutor.name}
              width={200}
              height={170}
            />

            <div>
              <h1 className="font-bold text-2xl text-black">{tutor.name}</h1>
              <h3 className="text-lg font-semibold text-black/90 my-2">
                {tutor.programme}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-text/90 font-semibold">Tutoring Type:</p>{" "}
                <div className="text-gray-1">
                  {tutor.tutorialType?.join(", ")}
                </div>
              </div>

              <div className="flex gap-3 items-center mt-3">
                <p className="text-blue text-xl font-bold mb-3">
                  ₵{tutor.price} <span className="text-[16px]">/ hour</span>
                </p>
                <div className="bg-blue/90 text-white px-4 py-1 rounded-sm cursor-pointer">
                  <Popup tutor={tutor} />
                </div>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-5 gap-10 my-10">
            <div className="col-span-5 lg:col-span-3">
              <article className="">
                <h1 className="font-bold text-xl uppercase">
                  About {tutor.name}
                </h1>
                <p className="text-black/80 text-sm">{tutor.bio}</p>
              </article>

              <div className="flex flex-col mt-8 gap-2">
                <p className="text-black/90 text-xl uppercase font-bold">
                  Courses
                </p>
                <div className="flex flex-wrap  gap-3">
                  {tutor.courses?.map((course, index) => (
                    <p
                      key={index}
                      className="text-white bg-blue/70 py-1 px-3 rounded-md"
                    >
                      {course}
                    </p>
                  ))}
                </div>
              </div>

              {tutor?.ratings.length && <Reviews tutor={tutor} />}
            </div>

            <div className="col-span-5 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-8">
              <Availability tutor={tutor}/>
              <Ratings tutor={tutor}/>
            </div>
          </section>
            
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;
