"use client";

import React, { useState, useEffect } from "react";
import TutorCard from "@/components/tutorpage/TutorCard";
import { Navbar, Footer } from "@/components";
import { db } from "@/config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "@/components/Loader";

const Tutors = () => {
  const [search, setSearch] = useState("");
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "Students"), where("isTutor", "==", true));
        const querySnapshot = await getDocs(q);

        const tutorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTutors(tutorsList);
        console.log(tutorsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tutors: ", error);
      }
    };

    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter((tutor) =>
    tutor.courses.some((course) =>
      course.toLowerCase().includes(search.toLowerCase())
    )
  );

  if(!tutors.length) {
    return <Loader />;
  }

  return (
    <main>
      <Navbar />

      <section className="w-full bg-black/10 mt-[70px] pb-[70px] min-h-screen overflow-y-scroll scrollable-container pt-3">
        <div className="w-[90%] mx-[5%] 2xl:w-[1500px] 2xl:mx-auto">
          <div className="my-6 w-[100%] sm:w-[40%]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search for a course"
              className="outline-none border border-gray-2/65 rounded-lg py-2 px-4 w-full"
            />
          </div>

          <div className="grid grid-cols-6 gap-7 flex-1"> 
            {
              loading ? "loadigate" : filteredTutors && ( 
                filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                )))
            }
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Tutors;
