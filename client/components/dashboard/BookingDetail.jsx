import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/config/firebase";
import cookies from "js-cookie";
import { Modal, Rating } from "@mantine/core";

const BookingDetail = ({ booking }) => {
  const [isStudent, setIsStudent] = useState(null);
  const [ratingPopupOpen, setRatingPopupOpen] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const id = cookies.get("userId");
    const checkUser = async () => {
      const q = query(collection(db, "Students"), where("uid", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        setIsStudent(userData.isTutor === false);
      }
    };
    checkUser();
  }, []);

  if (!booking) {
    return <div>No booking details available</div>;
  }

  const handleMarkLessonAsDone = () => {
    setRatingPopupOpen(true);
  };

  const handleRateTutor = async () => {
    const tutorQuery = query(collection(db, "Students"), where("studentEmail", "==", booking.tutorEmail));
    const tutorSnapshot = await getDocs(tutorQuery);

    if (!tutorSnapshot.empty) {
      const tutorDoc = tutorSnapshot.docs[0];
      const tutorRef = doc(db, "Students", tutorDoc.id);
      await updateDoc(tutorRef, {
        ratings: arrayUnion({ rating, date: new Date() }),
      });
      setRatingPopupOpen(false);
    } else {
      console.error("Tutor not found");
    }
  };

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

      {isStudent && (
        <button
          className="bg-[#b1353f] text-white mt-2 flex justify-center items-center rounded-sm text-sm px-2 py-1 font-semibold"
          onClick={handleMarkLessonAsDone}
        >
          Mark lesson as done
        </button>
      )}

      <Modal
        opened={ratingPopupOpen}
        onClose={() => setRatingPopupOpen(false)}
        title="Rate your tutor based on your experience"
        centered
      >
        <div className="flex flex-col items-left">
          <h1>On a scale of 1 to 5 rate the tutor</h1>
          <Rating value={rating} onChange={setRating} className="text-2xl"/>
          <button
            className="mt-4 bg-blue text-white px-4 py-2 rounded-md"
            onClick={handleRateTutor}
          >
            Submit Rating
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingDetail;
