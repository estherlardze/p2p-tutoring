import React from "react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  return (
    <main className="flex flex-col sm:flex-row bg-white gap-6">
      <Image src={tutor.image} alt={tutor.name} className="h-[260px] w-[200px]"/>


        <div className="flex flex-col gap-2 py-2 pl-4 pr-4">
          <h1 className="font-bold text-xl text-blue">{tutor.name}</h1>
          <h3 className=" font-semibold text-blue/90">
            {tutor.programme}
          </h3>
          <p className="text-[14px] text-gray-1">{`${tutor.bio.substring(0, 100)}...`}</p>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-blue/90 font-semibold">Courses:</p>
            <div className="text-gray-1 text-sm">{tutor.courses?.join(", ")}</div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-blue/90 font-semibold">Tutoring Type:</p>{" "}
              <div className="text-gray-1 text-sm">{tutor.tutorialType?.join(", ")}</div>
            </div>

            <div className="flex flex-row  gap-2 items-center border-gray-2 mt-2">
          <p className="text-blue text-xl font-bold mb-3">
            ₵{tutor.price} <span className="text-[16px]">/ hour</span>
          </p>
          <Link
            href={`/tutors/${tutor.id}`}
            className="bg-blue/90 text-white px-4 py-1 "
          >
            view profile
          </Link>
        </div>
          </div>
        </div>

        
    </main>
  );
};

export default TutorCard;
