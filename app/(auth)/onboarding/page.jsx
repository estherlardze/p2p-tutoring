"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/config/firebase";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { uploadFileToFirebase } from "@/config/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StepOne, StepTwo, StepThree } from "@/components";

const TutorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const steps = ["personal", "career", "finish"];
  const [formInfo, setFormInfo] = useState({
    bio: "",
    courses: [],
    contact: "",
    amount: "",
    tutorialType: [],
    availability: [],
    studentId: "",
  });

  const { bio, courses, contact, amount, tutorialType, availability, studentId } = formInfo;
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoursesChange = (value) => {
    setFormInfo((prev) => ({ ...prev, courses: value }));
  };

  

  const validateStep = () => {
    if (currentStep === 1) {
      return bio && studentId && contact && courses.length && amount;
    } else if (currentStep === 2) {
      return profileImage && currentResult && tutorialType.length && availability.length;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      toast.error("Please fill in all required fields before proceeding");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const profileImageToUpload = profileImage && profileImage[0];
    const resultToUpload = currentResult && currentResult[0];
  
    try {
      const studentQuery = query(collection(db, "Students"), where("studentId", "==", studentId));
      const studentSnapshot = await getDocs(studentQuery);
  
      if (!studentSnapshot.empty) {
        const studentDoc = studentSnapshot.docs[0];
        const studentData = studentDoc.data();
  
        const tutorEmail = studentData.email; 
        const tutorPassword = studentData.password; 
  
        if (tutorEmail && tutorPassword) {
          const tutorData = { ...formInfo, isTutor: true };
          const uploadedProfileUrl = await uploadFileToFirebase("profile", profileImageToUpload);
          const uploadedResultUrl = await uploadFileToFirebase("result", resultToUpload);
          tutorData.profile = uploadedProfileUrl;
          tutorData.result = uploadedResultUrl;
  
          await updateDoc(studentDoc.ref, tutorData);
  
          setComplete(true);
          toast.success("Onboarding Complete");
          router.push("/dashboard");
        } else {
          toast.error("Make sure you complete sign up before starting onboarding");
        }
      } else {
        toast.error("Student ID does not exist");
      }
    } catch (err) {
      console.error(err.message);
      toast.error("Error submitting form, please try again");
    }
  };
  

  return (
    <form onSubmit={handleFormSubmit}>
      <ToastContainer position="top-center" draggable />

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
          onPrevious={() => setCurrentStep((prevStep) => prevStep - 1)}
          handleChange={handleChange}
          setProfileImage={setProfileImage}
          setCurrentResult={setCurrentResult}
          handleSelectChange={handleSelectChange}
          formInfo={formInfo}
          complete={complete}
          profileImage={profileImage}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          onSubmit={handleFormSubmit}
          onPrevious={() => setCurrentStep((prevStep) => prevStep - 1)}
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </form>
  );
};

export default TutorForm;
