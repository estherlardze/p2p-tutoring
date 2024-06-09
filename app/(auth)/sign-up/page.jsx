"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credentials:", email, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-gray-1 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={email}
                onChange={handleEmailChange}
                placeholder="first name"
                className="w-full px-3 py-2 border border-black/35 rounded-md outline-blue/40"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-2 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={email}
                onChange={handleEmailChange}
                placeholder="lastname"
                className="w-full px-3 py-2 border border-black/35 rounded-md outline-blue/40"
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
              type="text"
              id="email"
              name="emal"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your student email"
              className="w-full px-3 py-2 border border-black/35 rounded-md outline-blue/40"
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
            <div className="w-full px-3 py-2 border  outline:border-blue/70 border-black/35 rounded-md">
              <div className=" flex justify-between items-center">
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

            <select
              name=""
              id=""
              className="w-full px-3 py-2 font-semibold border text-black/80 border-black/35 rounded-md outline-blue/40 mt-4"
            >
              <option value="">select role</option>
              <option value="">Student</option>
              <option value="">Tutor</option>
            </select>
          </div>
          <button className="border border-blue w-full bg-blue font-bold py-2 px-4 rounded text-white hover:bg-white hover:text-black transition-all duration-500">
            Sign up
          </button>
        </form>

        <div className="flex items-start mt-3">
            <p className="text-[12px] text-gray-2">
             Already have an account ?{" "}
              <Link href="login" className="text-black hover:underline">
                Login
              </Link>
            </p>
          </div>
      </div>

    </div>
  );
};

export default page;
