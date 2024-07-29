"use client";

import React, { useState } from "react";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const q = query(collection(db, "Students"), where("studentEmail", "==", formData.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const reportData = {
          ...formData,
          userName: `${userData.firstName} ${userData.lastName}`,
        };

        await addDoc(collection(db, "Issues"), reportData);
        toast.success("Issue reported successfully!");
        setFormData({
          studentEmail: "",
          title: "",
          description: "",
        });
      } else {
        toast.error("Invalid student email!");
        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen">
      <ToastContainer position="top-center" draggable />
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="studentEmail"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="text"
              id="studentEmail"
              name="studentEmail"
              placeholder="Your student email"
              value={formData.studentEmail}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Issue title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue border-2 border-blue text-white p-1 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReportForm;
