"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
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
      <div className="bg-white p-8 rounded shadow-md w-[90%] mx-[%] sm:mx-auto sm:max-w-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-3xl font-semibold text-center">Login</h2>
          <small className="text-[12px] mt-3 text-center">
            Hello, welcome 
          </small>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-1 font-bold mb-2"
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
              className="w-full px-3 py-[6px] border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-1 font-bold mb-2"
            >
              Password:
            </label>
            <div className="outline-blue/40 py-[6px] border  outline:border-blue/70 border-gray-2 px-4 rounded-md">
              <div className=" flex justify-between items-center ">
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
          <button className="border-2 rounded w-full border-blue bg-blue font-bold py-[6px] px-10  text-white hover:bg-white hover:text-black transition-all duration-500">
            Login
          </button>

          <div className="flex items-center justify-between mt-4">
            <p className="text-[12px] text-gray-2">
              Need an account?{" "}
              <Link href="sign-up" className="text-black hover:underline">
                Sign up
              </Link>
            </p>
            <Link href='/forget-password' className="text-[12px] hover:underline">Forgot password</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
