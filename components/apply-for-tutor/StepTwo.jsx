"use client";

import React from "react";
import Stepper from "./Stepper";
import { MdUpload } from "react-icons/md";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const StepTwo = ({
  currentStep,
  setProfileImage,
  setCurrentResult,
  complete,
  steps,
  formInfo,
  handleSelectChange,
  onPrevious,
  onNext,
}) => {
  const availabilityOptions = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];

  const tutorialTypeOptions = [
    { value: "online", label: "Online" },
    { value: "in-person", label: "In-person" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-[90%] sm:max-w-lg lg:max-w-2xl 2xl:max-w-[1200px] mx-auto">
      <h1 className="font-bold text-3xl mb-4">Profile setup</h1>
      <div className="max-w-md">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>

      <div className="my-3 w-full 2xl:my-6">
        <label
          htmlFor="availability"
          className="text-sm font-semibold text-gray-500"
        >
          Availability
        </label>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={availabilityOptions}
          value={formInfo.availability}
          onChange={(value) => handleSelectChange("availability", value)}
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "primary75",
              primary: "neutral50",
            },
          })}
          placeholder="Select options..."
        />
      </div>

      <div className="my-4 w-full 2xl:my-6">
        <label
          htmlFor="tutorialType"
          className="text-sm font-semibold text-gray-500"
        >
          Tutorial Type
        </label>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={tutorialTypeOptions}
          value={formInfo.tutorialType}
          onChange={(value) => handleSelectChange("tutorialType", value)}
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "primary75",
              primary: "neutral50",
            },
          })}
          placeholder="Select options..."
        />
      </div>

      <div className="my-2 w-full">
        <label htmlFor="picture" className="block text-gray-2 font-medium mb-2">
          Upload Image for profile
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={event => setProfileImage(event.target.files)}
          accept="image/*"
          className="cursor-pointer border border-gray-2/50 w-full"
          required
        />
        
      </div>

      <div className="my-6 w-full">
        <label
          htmlFor="transcript"
          className="block text-gray-2 font-medium mb-2"
        >
          Upload Current result (pdf formart only)
        </label>
        <input
          type="file"
          id="transcript"
          name="transcript"
          accept=".pdf"
          onChange={event => setCurrentResult(event.target.files)}
          className="cursor-pointer border border-gray-2/50 w-full"
          required
        />
        
      </div>

      <div className="flex justify-between items-center gap-8 w-full">
        <button
          onClick={onPrevious}
          className="bg-blue px-4 py-2 rounded w-[50%] text-white mt-5 hover:bg-dark-4 transition-all"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="bg-blue py-2 rounded w-[50%] text-white mt-5 hover:bg-dark-4 transition-all"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
