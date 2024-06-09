import React from "react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  return (
    <main className="flex flex-col sm:flex-row bg-white gap-6">
      <Image src={tutor.image} alt={tutor.name} width={200} height={170} />

      <section className="grid grid-cols-3 gap-6 items-center mx-6 pb-4">

        <div className="flex flex-col gap-2 py-3 col-span-3 lg:col-span-2">
          <h1 className="font-bold text-2xl text-blue">{tutor.name}</h1>
          <h3 className="text-xl font-semibold text-blue/90">
            {tutor.programme}
          </h3>
          <p className="text-[15px] text-gray-1">{tutor.bio}</p>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-blue/90 font-semibold">Courses:</p>
            <div className="text-gray-1">{tutor.courses?.join(", ")}</div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="text-blue/90 font-semibold">Tutoring Type:</p>{" "}
              <div className="text-gray-1">{tutor.tutorialType?.join(", ")}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1 flex flex-row lg:flex-col  gap-3 items-center lg:justify-center lg:border-l border-gray-2">
          <p className="text-blue text-xl font-bold mb-3">
            ₵{tutor.price} <span className="text-[16px]">/ hour</span>
          </p>
          <Link
            href={`/tutors/${tutor.id}`}
            className="bg-blue/90 text-white px-4 py-2 "
          >
            view profile
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TutorCard;
