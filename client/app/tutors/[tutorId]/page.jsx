"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Reviews, Availability, Ratings } from "@/components";
import Image from "next/image";
import Loader from "@/components/Loader";
import Popup from "@/components/tutorpage/Modal";
import { Navbar, Footer } from "@/components";

const TutorDetail = () => {
  const { tutorId } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratings, setRatings] = useState(false);
  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Students"));
        const tutors = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const foundTutor = tutors.find((tutor) => tutor.id === tutorId);

        if (foundTutor) {
          setTutor(foundTutor);
        } else {
          setError("Tutor not found");
        }
      } catch (error) {
        console.error("Error fetching tutor: ", error);
        setError("Failed to fetch tutor");
      } finally {
        setLoading(false);
      }
    };

    fetchTutor();
  }, [tutorId]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!tutor) return <div>Tutor not found</div>;

  return (
    <main>
      <Navbar />
      <section className="bg-black/10 w-full mt-[70px] pb-[70px] overflow-y-scroll min-h-screen scrollable-container pt-3">
        <div className="mx-auto w-[90%] 2xl:w-[1500px] 2xl:mx-auto ">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
            <Image
              src={tutor.profile}
              alt={tutor.name}
              width={200}
              height={170}
            />

            <div>
              <h1 className="font-bold text-2xl text-black">{tutor.name}</h1>
              <h3 className="text-lg font-semibold  my-2">
                <span>Department: </span>{" "}
                <span className="">{tutor.department}</span>
              </h3>
              <div className="flex items-center gap-2 mtext-black/90t-2">
                <p className="text-text/90 font-semibold">Tutoring Type:</p>{" "}
                <div className="text-gray-1 flex gap-2 text-sm">
                  {tutor.tutorialType?.map((item) => (
                    <h1 key={item.label}>{item.label}</h1>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-text/90 font-semibold">Contact</p>{" "}
                <p className="text-gray-1">{tutor.contact}</p>
              </div>

              <p className="text-blue text-xl font-bold my-1">
                ₵{tutor.amount} <span className="text-[16px]">/ hour</span>
              </p>

              <div className="bg-transparent border-2 border-blue w-fit rounded-md text-black hover:bg-blue/90 hover:text-white px-4 py-1 transition-all duration-300 cursor-pointer">
                <Popup tutor={tutor} />
              </div>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-3 mb-4">
            <article className="">
              <h1 className="font-bold text-xl uppercase">About me</h1>
              <p className="text-black/80 text-sm">{tutor.bio}</p>
            </article>

            <div className="flex flex-col my-8 gap-2">
              <p className="text-black/90 text-xl uppercase font-bold">
                Courses
              </p>
              <div className="flex flex-wrap gap-3">
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

            <Availability tutor={tutor} />
            <div className="mt-8">
              <Ratings />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TutorDetail;
