"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, auth, storage } from "@/config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { StepOne, StepTwo, StepThree } from "@/components";

const TutorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [progress, setProgress] = useState(null);
  const steps = ["personal", "career", "finish"];
  const [formInfo, setFormInfo] = useState({
    bio: "",
    courses: [],
    contact: "",
    amount: "",
    tutorialType: [],
    availability: [],
    picture: null,
    transcript: null,
  });
  const router = useRouter();
  const { bio, courses, contact, amount, tutorialType, availability, picture, transcript } = formInfo;

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setFormInfo((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoursesChange = (value) => {
    setFormInfo((prev) => ({ ...prev, courses: value }));
  };

 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = auth.currentUser.uid;
      const tutorData = {
        ...formInfo,
      };

      await setDoc(doc(db, "Tutors", userId), tutorData, { merge: true });
      setComplete(true);
      console.log("Tutor data updated:", tutorData);
      alert("Onboarding Complete");
      router.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
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
