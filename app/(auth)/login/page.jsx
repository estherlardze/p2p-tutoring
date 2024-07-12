"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !studentId || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      console.log("Fetching user document...");
      const q = query(collection(db, "Students"), where("studentId", "==", studentId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        console.log("User document found:", userData);

        if (userData.password) {
          // User has logged in before
          if (userData.password === password) {
            // Password matches
            if (userData.email !== email) {
              // Update email if it has changed
              await updateDoc(userDoc.ref, { email: userData.email });
            }
            router.push("/dashboard");
          } else {
            // Password doesn't match
            toast.error("Incorrect password");
          }
        } else {
          // User logging in for the first time, save password
          await updateDoc(userDoc.ref, { password });
          if (userData.email !== email) {
            await updateDoc(userDoc.ref, { email: userData.email });
          }
          router.push("/dashboard");
        }
      } else {
        // Student ID does not exist
        toast.error("Student ID does not exist");
      }
    } 
    catch (err) {
      console.error("Error logging in:", err);
      toast.error("Error logging in, please try again");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10">
      <ToastContainer position="top-center" draggable />

      <div className="bg-white p-8 rounded shadow-md w-[90%] mx-[5%] sm:mx-auto sm:max-w-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-3xl font-semibold text-center">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-1 font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full px-3 py-[6px] border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-1 font-bold mb-2">
              Student ID:
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={handleStudentIdChange}
              placeholder="Enter your student ID"
              className="w-full px-3 py-[6px] border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-1 font-bold mb-2">
              Password:
            </label>
            <div className="outline-blue/40 py-[6px] border outline:border-blue/70 border-gray-2 px-4 rounded-md">
              <div className="flex justify-between items-center">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="focus:outline-none border-0"
                  required
                />
                <div onClick={handleShowPassword} className="cursor-pointer">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
          </div>

          <button className="border-2 rounded w-full border-blue bg-blue font-bold py-[6px] px-10 text-white hover:bg-white hover:text-black transition-all duration-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
