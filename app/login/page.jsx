"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    <div className="min-h-screen flex justify-center items-center bg-black/10 ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your student email"
              className="w-full px-3 py-2 border border-black/35 rounded-md outline-blue/70"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
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
          </div>
          <button
            className="border border-blue w-full bg-blue font-bold py-2 px-4 rounded text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
