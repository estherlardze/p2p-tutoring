"use client";

import React, { useState } from "react";
import { StepOne, StepTwo, StepThree } from "@/components";

const TutorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ['personal', 'career', 'finish'];
  const [formInfo, setFormInfo] = useState({
    bio: "",
    courses: [],
    contact: "",
    amount: "",
    tutorialType: [],
    availability: [],
    picture: "",
    transcript: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleCoursesChange = (value) => {
    setFormInfo((prev) => ({ ...prev, courses: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {currentStep === 1 && (
        <StepOne
          onNext={handleNext}
          formInfo={formInfo}
          handleChange={handleChange}
          handleCoursesChange={handleCoursesChange}
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          onNext={handleNext}
          onPrevious={handlePrevious}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          formInfo={formInfo}
          handleFileChange={handleFileChange}
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          onSubmit={handleFormSubmit}
          onPrevious={handlePrevious}
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </form>
  );
};

export default TutorForm;
