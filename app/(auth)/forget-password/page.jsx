"use client";

import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend to handle the password reset
    setMessage(
      `If an account with ${email} exists, a password reset link has been sent.`
    );
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-black/10">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your student email"
              className="w-full px-3 py-[6px] border border-black/35 rounded-md outline-blue/40"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white border-2 border-blue py-[6px] px-4 rounded bg-blue hover:bg-white hover:text-black transition-all duration-500"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
