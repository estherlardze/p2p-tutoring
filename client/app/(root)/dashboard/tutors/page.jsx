'use client';

import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { query, where, collection, getDocs } from "firebase/firestore";
import Loader from "@/components/Loader";
import ViewDetails from "@/components/dashboard/ViewDetails";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const q = query(collection(db, "Students"), where("isTutor", "==", true));
        const querySnapshot = await getDocs(q);

        const tutorList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTutors(tutorList);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const handleViewDetails = (tutor) => {
    setSelectedBooking(tutor);
    setDetailModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-l-2 border-r-2 border-b-2 border-blue border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!tutors.length) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        No tutors found...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <ToastContainer position="top-center" draggable />
      <h1 className="mt-2 text-2xl font-bold">Tutors List</h1>

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
            {tutors.map((tutor, index) => (
              <tr
                key={tutor.id}
                className={index % 2 === 0 ? "bg-gray-2/20" : "bg-white"}
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {tutor.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {tutor.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {tutor.contact}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <button
                    className="bg-blue-700 text-blue py-1 px-3 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(tutor)}
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
        title="Tutor Details"
        centered
      >
        <ViewDetails tutor={selectedBooking} />
      </Modal>
    </div>
  );
};

export default Tutors;
