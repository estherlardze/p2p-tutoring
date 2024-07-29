import React from "react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  return (
    <main className="flex flex-col sm:flex-row bg-white gap-6 col-span-6 lg:col-span-3 h-fit lg:min-h-[250px] rounded-md shadow-md">
      <Image
        src={tutor.profile}
        alt={tutor.name}
        width={200}
        height={200}
        className="h-[200px]"
      />

      <div className="flex flex-col gap-2 py-2 pl-4 pr-4">
        <h1 className="font-bold text-xl text-blue">{`${tutor.firstName} ${tutor.lastName}`}</h1>
        <h3 className=" font-semibold text-blue/90"> <span>Department: </span>
        {tutor.department}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-blue/90 font-semibold">Courses:</p>
          <div className="flex flex-wrap gap-2">
            {tutor.courses.map((item, index) => (
              <h1
                className="bg-black/20 rounded-md text-gray-1 px-1 text-sm flex flex-wrap gap-2"
                key={index}
              >
                {item}
              </h1>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="text-blue/90 font-semibold">Tutoring Type(s):</p>{" "}
            <div className="text-gray-1 flex gap-2 text-sm">
              {tutor.tutorialType?.map((item, index) => (
                <h1 key={index}>{item.label}</h1>
              ))}
            </div>
          </div>

          
            <div className="flex items-center gap-2">
            <Link
              href={`/tutors/${tutor.uid}`}
              className="bg-blue/90 text-white px-4 py-1 text-sm rounded-sm"
            >
              view profile
            </Link>

              <p className="text-blue/90 font-semibold">₵{tutor.amount} / hour</p>
          
            </div>
          </div>
        </div>
    </main>
  );
};

export default TutorCard;
