import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import cookies from "js-cookie";

const BookingDetail = ({ booking }) => {
  const [isStudent, setIsStudent] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(booking.status);

  useEffect(() => {
    const id = cookies.get("studentId", {expires: 2/24});
    const checkUser = async () => {
      const q = query(collection(db, "Students"), where("studentId", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if(userData.isTutor === false){
          setIsStudent(true);
        }else {
          setIsStudent(false);
        }
      }
    };
    checkUser();
  }, []);

  const handleAccept = async () => {
    await updateBookingStatus("accepted");
    setBookingStatus("accepted");
  };

  const handleDecline = async () => {
    await updateBookingStatus("declined");
    setBookingStatus("declined");
  };

  const handleCancel = async () => {
    await updateBookingStatus("canceled");
    setBookingStatus("canceled");
  };

  const handleMarkAsDone = async () => {
    await updateBookingStatus("completed");
    setBookingStatus("completed");
  };

  const updateBookingStatus = async (status) => {
    const bookingDocRef = doc(db, "Bookings", booking.id);
    await updateDoc(bookingDocRef, { status });
  };

  return (
    <div>
      <p className="font-bold">{booking.name}</p>
      <p className="font-bold">{booking.email}</p>
      <p><strong>Course:</strong> {booking.course}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Contact:</strong> {booking.contact}</p>
      <p><strong>Lesson Type:</strong> {booking.tutorialType}</p>
      <p><strong>Location:</strong> {booking.location}</p>
      <p><strong>Learning Goals:</strong> {booking.message}</p>

      {isStudent ? (
        <div>
          {bookingStatus === "accepted" ? (
            <button
              className="bg-[#b1353f] text-sm px-2 py-1 font-semibold"
              onClick={handleCancel}
            >
              Cancel booking
            </button>
          ) : bookingStatus === "declined" ? (
            <p className="text-red-500 font-semibold">Tutor declined offer</p>
          ) : (
            <button
              className="bg-[#b1353f] text-sm px-2 py-1 font-semibold"
              onClick={handleCancel}
            >
              Cancel booking
            </button>
          )}
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-3">
          {bookingStatus === "pending" && (
            <>
              <button
                className="bg-green-500 text-sm px-2 py-1 font-semibold"
                onClick={handleAccept}
              >
                Accept offer
              </button>
              <button
                className="bg-[#b1353f] text-sm px-2 py-1 font-semibold"
                onClick={handleDecline}
              >
                Decline offer
              </button>
            </>
          )}
          {bookingStatus === "accepted" && (
            <button
              className="bg-green-500 text-sm px-2 py-1 font-semibold"
              onClick={handleMarkAsDone}
            >
              Mark as done
            </button>
          )}
          {bookingStatus === "declined" && (
            <p className="text-red-500 font-semibold">Tutor declined offer</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingDetail;
