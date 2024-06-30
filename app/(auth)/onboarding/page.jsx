"use client";

import React, { useState } from "react";
import { MdUpload } from "react-icons/md";
import { MultiSelect } from "@mantine/core";
import { TagsInput } from "@mantine/core";
import {StepOne, StepTwo, StepThree } from "@/components";

const TutorForm = () => {
  const [values, setValues] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [selectedOptionsRaw, setSelectedOptionsRaw] = useState([]);
  const steps = ['personal', 'career', 'finish'];
  const [formInfo, setFormInfo] = useState({
    bio: "",
    courses: [],
    contact: "",
    tutorialType: ["Online", "In-person"],
    availability: "",
    picture: "",
    transcript: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
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
    <from>
       {currentStep === 1 && 
        <StepOne 
          onNext={handleNext} 
          formInfo={formInfo} 
          handleChange={handleChange}
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />}
        
      {currentStep === 2 && 
        <StepTwo
         
          onNext={handleNext} 
          onPrevious={handlePrevious} 
          formInfo={formInfo} 
          handleChange={handleChange}
          complete={complete}
          currentStep={currentStep} 
          steps={steps}
          />} 
     
     
      {currentStep === 3 && 
        <StepThree 
        onSubmit={handleMenteeFormSubmit}
        onPrevious={handlePrevious} 
        complete={complete}
        currentStep={currentStep}
        steps={steps}
      />}
    </from>
  )
}

export default TutorForm
