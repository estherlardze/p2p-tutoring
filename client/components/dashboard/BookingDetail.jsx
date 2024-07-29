import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import cookies from "js-cookie";

const BookingDetail = ({ booking }) => {
  const [isStudent, setIsStudent] = useState(null);

  console.log("booking in BookingDetail", booking);

  useEffect(() => {
    const id = cookies.get("userId");
    const checkUser = async () => {
      const q = query(collection(db, "Students"), where("uid", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if(userData.isTutor === false){
          setIsStudent(true);
        }else{
          setIsStudent(false);
        }
      }
    };
    checkUser();
  }, []);

  if (!booking) {
    return <div>No booking details available</div>;
  }

  return (
    <div>
       <p className="font-bold">{booking.firstName}</p>
      <p className="font-bold">{booking.studentEmail}</p>
      <p>
        <strong>Course:</strong>{" "}
        {booking.course?.map((course, index) => (
          <span key={index}>{course}</span>
        ))}
      </p>
      <p>
        <strong>Date:</strong> {booking.date}
      </p>
      <p>
        <strong>Time:</strong> {booking.time}
      </p>
      <p>
        <strong>Contact:</strong> {booking.contact}
      </p>
      <p>
        <strong>Lesson Type:</strong> {booking.tutorialType}
      </p>
      {booking.location && (
        <p>
          <strong>Location:</strong> {booking.location}
        </p>
      )}
      <p>
        <strong>Learning Goals:</strong> {booking.message}
      </p>

      {isStudent ? (
        <button className="bg-[#b1353f] text-white mt-2 flex justify-center items-center rounded-sm text-sm px-2 py-1 font-semibold">
          Cancel booking
        </button>
      ) : (
        <button className="bg-[#b1353f] text-white rounded-sm text-sm px-2 py-1 mt-2 font-semibold">
          Mark offer as done
        </button>
      )}
    </div>
  );
};

export default BookingDetail;
