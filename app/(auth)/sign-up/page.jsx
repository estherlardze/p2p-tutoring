"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
    role: "",
  });
  const router = useRouter();
  const { firstName, lastName, email, password, department, role } = signUp;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });

        const userData = {
          email: user.email,
          firstName,
          lastName,
          department,
          role,
          timestamps: serverTimestamp(),
        };

        const userCollection = role === "Student" ? "Students" : "Tutors";
        await setDoc(doc(db, userCollection, user.uid), userData);

        if(role === "Tutor") {
          router.push("/onboarding");
        }
        setSignUp({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          department: "",
          role: "",
        });

        if(role === "Student") {
          await sendEmailVerification(user);
          toast.success("Verification email sent. Please verify your email address.");
        } 

      //  router.push("/login");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10">
      <ToastContainer position="top-center" draggable />

      <div className="bg-white p-4 rounded shadow-md sm:mx-auto sm:max-w-md max-w-md w-[90%] mx-[5%]">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col sm:flex-row gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-gray-1 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFormChange}
                placeholder="First name"
                className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-2 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleFormChange}
                placeholder="Last name"
                className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold text-gray-1 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleFormChange}
              placeholder="Enter your student email"
              className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-gray-700 font-bold text-gray-1 mb-2"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={handleFormChange}
              placeholder="Enter your department"
              className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-gray-1 font-bold mb-2"
            >
              Password
            </label>
            <div className="w-full px-3 py-1 border outline:border-blue/70 border-black/35 rounded-md">
              <div className="flex justify-between items-center">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleFormChange}
                  placeholder="Enter your password"
                  className="focus:outline-none border-0"
                  required
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>

            <select
              name="role"
              id="role"
              value={role}
              onChange={handleFormChange}
              className="w-full px-3 py-[6px] font-semibold border text-black/80 border-black/35 rounded-md outline-blue/40 mt-4"
              required
            >
              <option value="">Select role</option>
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>
          <button
            type="submit"
            className="border-2 border-blue w-full bg-blue font-bold py-1 px-4 rounded text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Sign up
          </button>
        </form>

        <div className="flex items-start mt-3">
          <p className="text-[12px] text-gray-2">
            Already have an account?{" "}
            <Link href="login" className="text-black hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
