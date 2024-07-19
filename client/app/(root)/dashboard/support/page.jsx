"use client";

import React, { useState } from "react";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    email: "",
    issue: "",
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
      const q = query(
        collection(db, "Students"),
        where("studentId", "==", formData.studentId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        console.log(userData);
        // if user exist continue to add it to their issues to the issues collection
        await addDoc(collection(db, "Issues"), formData);
        toast.success("Issue reported successfully!");
        setFormData({
          studentId: "",
          email: "",
          issue: "",
        });
      } else {
        toast.error("Invalid student id!");
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700"
            >
              Student Id
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="your student email"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issue"
              className="block text-sm font-medium text-gray-700"
            >
              Issue
            </label>
            <textarea
              id="issue"
              name="issue"
              value={formData.issue}
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
