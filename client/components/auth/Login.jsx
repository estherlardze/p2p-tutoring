"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import Cookies from "js-cookie";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    studentEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { studentEmail, password } = loginForm;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, studentEmail, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      toast.success("Login successful");
      Cookies.set("userId", user.uid); 
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Invalid email or password");
      setLoading(false);
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
            <label htmlFor="studentEmail" className="block text-gray-1 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="studentEmail"
              name="studentEmail"
              value={studentEmail}
              onChange={handleChange}
              placeholder="Enter your student email"
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="password must be at least 6 characters"
                  className="focus:outline-none border-0"
                  required
                />
                <div onClick={toggleShowPassword} className="cursor-pointer">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="border-2 rounded w-full border-blue bg-blue flex items-center justify-center font-bold py-[6px] px-10 text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            {loading ? <ImSpinner8 className="animate-spin text-white" /> : "Login"}
          </button>
          <div className="text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-bold text-blue underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
