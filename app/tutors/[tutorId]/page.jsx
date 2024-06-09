"use client";

import React from "react";
import { useParams } from "next/navigation";
import { tutors } from "@/constants/tutor";
import { Footer, Navbar } from "@/components";
import Image from "next/image";
import Popup from "@/components/tutorpage/Modal";
import Reviews from "@/components/tutorpage/Reviews";


const page = () => {
  const { tutorId } = useParams();
  const tutor = tutors.find((tutor) => tutor.id === parseInt(tutorId));

  if (!tutor) return <div>Tutor not found</div>;

  return (
    <main>
      <Navbar />

      <section className="bg-black/10 w-full mt-[70px] pb-[70px] h-screen overflow-y-scroll scrollable-container pt-3">
        <div className="mx-auto w-[90%]  2xl:w-[1500px] 2xl:mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Image
              src={tutor.image}
              alt={tutor.name}
              width={200}
              height={170}
            />

            <div>
              <h1 className="font-bold text-2xl text-blue">{tutor.name}</h1>
              <h3 className="text-xl font-semibold text-blue/90 my-2">
                {tutor.programme}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-blue/90 font-semibold">Courses:</p>
                <div className="text-gray-1">{tutor.courses?.join(", ")}</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-blue/90 font-semibold">Tutoring Type:</p>{" "}
                <div className="text-gray-1">
                  {tutor.tutorialType?.join(", ")}
                </div>
              </div>

              <div className="flex gap-3 items-center mt-3">
                <p className="text-blue text-xl font-bold mb-3">
                  ₵{tutor.price} <span className="text-[16px]">/ hour</span>
                </p>
                <div className="bg-blue/90 text-white px-4 py-1 rounded-sm cursor-pointer">
                 <Popup tutor={tutor}/>
                </div>
              </div>
            </div>
          </div>

          <article className="my-10">
            <h1 className="font-bold text-3xl">About me</h1>
            <p className="text-black/80">{tutor.bio}</p>
          </article>

          <article className="">
            <h1 className="font-bold text-3xl text-center">Reviews from Students</h1>
          <Reviews tutor={tutor}/>
          </article>
        </div>

       
      </section>

      <Footer />
    </main>
  );
};

export default page;
