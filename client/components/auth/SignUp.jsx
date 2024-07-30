"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { auth, db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Link from "next/link";

const SignUp = () => {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    studentEmail: "",
    department: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { firstName, lastName, studentEmail, department, password } = signupForm;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@st\.knust\.edu\.gh$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(studentEmail)) {
      toast.error("Enter a valid knust email address");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, studentEmail, password);
      const user = userCredential.user;

      await setDoc(doc(db, "Students", user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        studentEmail,
        department,
        isTutor: false,
      });

      await sendEmailVerification(user);

      toast.success("Sign-up successful. Please check your email to verify your account.");
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("An error occurred while signing up");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10">
      <ToastContainer position="top-center" draggable duration={9000} />
      <div className="bg-white p-8 rounded shadow-md w-[90%] mx-[5%] sm:mx-auto sm:max-w-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-3xl font-semibold text-center">Sign up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-1 font-bold mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-1 font-bold mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="studentEmail" className="block text-gray-1 font-bold mb-1">
              Email:
            </label>
            <input
              type="text"
              id="studentEmail"
              name="studentEmail"
              value={studentEmail}
              onChange={handleChange}
              placeholder="Enter your student email"
              className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-1 font-bold mb-1">
              Programme:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={handleChange}
              placeholder="Enter your department"
              className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-1 font-bold mb-1">
              Password:
            </label>
            <div className="outline-blue/40 py-1 border outline:border-blue/70 border-gray-2 px-4 rounded-md">
              <div className="flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
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
            className="border-2 rounded w-full border-blue flex justify-center items-center bg-blue font-bold py-1 px-10 text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            {loading ? <ImSpinner8 className="animate-spin text-blue font-bold" /> : "Sign up"}
          </button>
          <div className="text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-blue underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
