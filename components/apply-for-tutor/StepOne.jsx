'use client'

import React, { useState } from "react";
import Stepper from "./Stepper";
import { TagsInput } from "@mantine/core";

const StepOne = ({
  currentStep,
  complete,
  steps,
  formInfo,
  handleChange,
  handleCoursesChange,
  onNext,
}) => {

  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-[90%] sm:max-w-lg lg:max-w-2xl 2xl:max-w-[1200px] mx-auto">
      <h1 className="font-bold text-3xl mb-4">Onboarding</h1>
      <div className="max-w-md">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>

      <div className="my-1 w-full">
        <label htmlFor="bio" className="block text-gray-2 font-medium mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formInfo.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself and why you will be a great tutor"
          rows="3"
          className="w-full p-2 border border-gray-2/30 outline-blue/25 rounded-sm"
          required
        />
      </div>

      <div className="my-1 w-full">
        <label htmlFor="courses" className="block text-gray-2 font-medium">
          Courses
        </label>
        <TagsInput
          data={[]}
          value={formInfo.courses}
          onChange={handleCoursesChange}
          placeholder="Courses you want to teach"
          className="py-2"
        />
      </div>

      <div className="my-1 w-full">
        <label htmlFor="amount" className="block text-gray-2 font-medium mb-1">
          Amount per hour
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formInfo.amount}
          placeholder="Amount per hour for the tutor"
          onChange={handleChange}
          className="w-full px-2 py-[6px] border border-gray-2/50 outline-blue/25 rounded-sm"
          required
        />
      </div>

      <div className="my-1 w-full">
        <label htmlFor="contact" className="block text-gray-2 font-medium mb-1">
          Contact
        </label>
        <input
          type="text"
          id="contact"
          placeholder="Your phone number"
          name="contact"
          value={formInfo.contact}
          onChange={handleChange}
          className="w-full px-2 py-[6px] border border-gray-2/40 outline-blue/25 rounded-sm"
          required
        />
      </div>

      <button
        onClick={onNext}
        className="bg-blue px-4 py-2 w-full rounded text-white mt-5 hover:bg-dark-4 transition-all duration-300"
      >
        Next
      </button>
    </section>
  );
};

export default StepOne;
