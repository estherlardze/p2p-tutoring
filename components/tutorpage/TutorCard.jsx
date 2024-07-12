import React from "react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  return (
    <main className="flex flex-col sm:flex-row bg-white gap-6 col-span-2 sm:col-span-1">
      <Image src={tutor.profile} alt={tutor.name} width={200} height={200} />

      <div className="flex flex-col gap-2 py-2 pl-4 pr-4">
        <h1 className="font-bold text-xl text-blue">{tutor.name}</h1>
        <h3 className=" font-semibold text-blue/90">{tutor.department}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-blue/90 font-semibold">Courses:</p>
          <div className="flex gap-2">
            {tutor.courses.map((item, index) => (
              <h1 className="bg-black/20 rounded-md text-gray-1 px-1 text-sm" key={index}>
                {item}
              </h1>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-blue/90 font-semibold">Tutoring Type:</p>{" "}
            <div className="text-gray-1 text-sm">
              {tutor.tutorialType?.map((item, index) => (
                <h1 key={index}>{item.label}</h1>
              ))}
            </div>
          </div>

          <div className="flex flex-row  gap-2 items-center border-gray-2 mt-2">
            <p className="text-blue text-xl font-bold mb-3">
              ₵{tutor.amount} <span className="text-[16px]">/ hour</span>
            </p>
            <Link
              href={`/tutors/${tutor.id}`}
              className="bg-blue/90 text-white px-4 py-1 text-sm rounded-2xl "
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
