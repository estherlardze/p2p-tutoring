'use client';

import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import BookingDetail from "../../../../components/dashboard/BookingDetail";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { collection, getDocs, query, where } from "firebase/firestore";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const q = query(
          collection(db, "Students"),
          where("isTutor", "==", false)
        );
        const querySnapshot = await getDocs(q);

        const studentList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setStudents(studentList);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDetailModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-100">
        <div className="w-12 h-12 border-l-2 border-r-2 border-b-2 border-blue border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!students.length) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        No students found...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <ToastContainer position="top-center" draggable />
      <h1 className="mt-2 text-2xl font-bold">Students List</h1>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white ">
          <thead className="bg-blue/20">
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Contact</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={index % 2 === 0 ? "bg-gray-200/20" : "bg-white"}
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {student.firstName || 'N/A'}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {student.studentEmail || 'N/A'}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {student.contact || 'N/A'}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <button
                    className="bg-blue-700 text-blue py-1 px-3 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(student)}
                  >
                    <FaEye size={21} />
                  </button>
                  <button className="text-[#a30313] py-1 px-3 rounded-md ">
                    <MdDelete size={21} />
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
        title="Student Details"
        centered
      >
        {selectedBooking && <BookingDetail booking={selectedBooking} />}
      </Modal>
    </div>
  );
};

export default Students;
