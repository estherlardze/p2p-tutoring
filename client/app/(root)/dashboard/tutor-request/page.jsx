"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import BookingDetail from "../../../../components/dashboard/BookingDetail";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookies from "js-cookie";
import { query, where, collection, getDocs } from "firebase/firestore";
import { ImSpinner8 } from "react-icons/im";

const TutorRequest = () => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const studentId = cookies.get("userId");
        if (!studentId) {
          toast.error("Student details not found in cookies.");
          return;
        }
        setLoading(true);
        const q = query(
          collection(db, "Students"),
          where("uid", "==", studentId)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          setTutorials(userData.tutorials);
        } else {
          toast.error("Student not found or not authorized.");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDetailModalOpen(true);
  };

  console.log("tutorials", tutorials);
  console.log("selectedBooking", selectedBooking);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <ImSpinner8 className="animate-spin text-blue" />
      </div>
    );
  }

  if (!tutorials || tutorials.length === 0) {
    return (
      <div className="flex justify-center items-center text-2xl font-bold h-[70vh]">
        You have not yet booked a tutor!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <ToastContainer position="top-center" draggable />
      <h1 className="mt-2 text-2xl font-bold">Request to tutors</h1>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-blue/20">
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-200">Course</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Time</th>
              <th className="py-2 px-4 border-b border-gray-200">Lesson Type</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((booking, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-200/20" : "bg-white"}
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {booking.course?.map((course, index) => (
                    <p key={index}>{course}</p>
                  ))}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{booking.date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{booking.time}</td>
                <td className="py-2 px-4 border-b border-gray-200">{booking.tutorialType}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <button
                    className="bg-blue/70 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(booking)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        opened={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        title="Booking Details"
        centered
      >
        {selectedBooking && <BookingDetail booking={selectedBooking} />}
      </Modal>
    </div>
  );
};

export default TutorRequest;
