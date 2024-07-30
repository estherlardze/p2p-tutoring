import React, { useState } from "react";
import Stepper from "./Stepper";
import { IoIosCheckmarkCircle } from "react-icons/io";


const StepThree = ({ currentStep, complete, steps, onPrevious, onSubmit }) => {
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-lg lg:max-w-2xl mx-auto ">
      <h1>User name</h1>
      <div className="max-w-md mt-4">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>
       <div className="my-2 bg-purple-1 rounded-full p-3">
        <IoIosCheckmarkCircle size={35} className="text-black/80 font-bold" />
      </div>
     <h1 className="text-2xl sm:text-3xl font-bold my-3">Congratulations!</h1>
      <p className="text-gray-500 text-sm sm:text-md">
        You have finish your onboarding stage
      </p>
      <div className="flex justify-between gap-6 w-[80%]">
        <button
          onClick={onPrevious}
          className="bg-blue px-4 py-2 rounded  text-white mt-5 hover:bg-dark-4 transition-all w-[50%]"
        >
          previous
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-blue px-4 py-2 rounded  text-white mt-5 hover:bg-dark-4 transition-all w-[50%]"
        >
          finish
        </button>
      </div> 
    </div>
  );
};

export default StepThree;
