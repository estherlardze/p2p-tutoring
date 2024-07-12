"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/config/firebase";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const profileImageToUpload = profileImage && profileImage[0];
    const resultToUpload = currentResult && currentResult[0];

    try {
      const q = query(collection(db, "Students"), where("studentId", "==", formInfo.studentId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = userDoc.ref;

        const tutorData = { ...formInfo, isTutor: true };
        const uploadedProfileUrl = await uploadFileToFirebase("profile", profileImageToUpload);
        const uploadedResultUrl = await uploadFileToFirebase("result", resultToUpload);
        tutorData.profile = uploadedProfileUrl;
        tutorData.result = uploadedResultUrl;

        await updateDoc(userDocRef, tutorData);

        setComplete(true);
        toast.success("Onboarding Complete");
        router.push("/dashboard");
      } else {
        toast.error("Student ID does not exist");
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Error submitting form, please try again");
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
          onPrevious={handlePrevious}
          handleChange={handleChange}
          setProfileImage={setProfileImage}
          setCurrentResult={setCurrentResult}
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
