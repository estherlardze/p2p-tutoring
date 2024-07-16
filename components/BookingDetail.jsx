import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import cookies from "js-cookie";

const BookingDetail = ({ booking }) => {
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    const id = cookies.get("studentId", {expires: 2/24});
    const checkUser = async () => {
      const q = query(collection(db, "Students"), where("studentId", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if(userData.isTutor === false){
          setIsStudent(false);
        }else {
          setIsStudent(true);
        }
      }
    };
    checkUser();
  }, []);

  console.log("ddd", isStudent);
  return (
    <div>
      <p>
        {booking.name ? (
          <strong>{`${booking.name} Student Name:`}</strong>
        ) : null}{" "}
        {booking.name}
      </p>
      <p>
        {booking.email ? (
          <strong>{`${booking.email} Student Email:`}</strong>
        ) : null}{" "}
        {booking.email}
      </p>
      <p>
        <strong>Course:</strong> {booking.course}
      </p>
      <p>
        <strong>Date:</strong> {booking.date}
      </p>
      <p>
        <strong>Time:</strong> {booking.time}
      </p>
      <p>
        <strong>Lesson Type:</strong> {booking.tutorialType}
      </p>
      <p>
        <strong>Learning Goals:</strong> {booking.message}
      </p>

      {isStudent && (
        <div className="mt-4 flex items-center gap-3">
          <button className="bg-green text-sm px-2 py-1 font-semibold">
            Accept offer
          </button>
          <button className="bg-[#b1353f] text-sm px-2 py-1 font-semibold">
            Decline offer
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingDetail;
