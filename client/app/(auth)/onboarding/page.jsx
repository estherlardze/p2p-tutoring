"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getCWA, uploadFileToFirebase } from "@/config/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StepOne, StepTwo, StepThree } from "@/components";
import Modal from "@/components/apply-for-tutor/Modal";
import Loader from "@/components/Loader";

const TutorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentCWA, setStudentCWA] = useState("");
  const [complete, setComplete] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); 
  const steps = ["personal", "career", "finish"];
  const [formInfo, setFormInfo] = useState({
    bio: "",
    courses: [],
    contact: "",
    amount: "",
    tutorialType: [],
    availability: [],
    studentEmail: "",
  });

  const {
    bio,
    courses,
    contact,
    amount,
    tutorialType,
    availability,
    studentEmail,
  } = formInfo;
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
      return bio && studentEmail && contact && courses.length && amount;
    } else if (currentStep === 2) {
      return (
        profileImage &&
        currentResult &&
        tutorialType.length &&
        availability.length
      );
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
  
    // GET CWA
    const pattern = /Weighted Average:\s*([0-9]+\.[0-9]+)/;
    const namePattern = /Name:\s*([^,]+,\s*[^Y]+)/;
  
    const result = await getCWA(resultToUpload);
    console.log(result);
  
    const cwaMatch = result.match(pattern);
    const nameMatch = result.match(namePattern);
  
    if (!cwaMatch || !nameMatch) {
      toast.error("Invalid result document. Please upload a valid result.");
      return;
    }
  
    const weightedAverage = parseFloat(cwaMatch[1]);
    if (isNaN(weightedAverage)) {
      toast.error("Invalid result document. Please upload a valid result.");
      return;
    }
  
    setStudentCWA(weightedAverage);
  
    if (weightedAverage < 70) {
      setShowModal(true);
      return;
    }
  
    try {
      const studentQuery = query(
        collection(db, "Students"),
        where("studentEmail", "==", studentEmail)
      );
      const studentSnapshot = await getDocs(studentQuery);
  
      if (studentSnapshot.empty) {
        toast.error("Student ID does not exist in our database");
        return;
      }
  
      const studentDoc = studentSnapshot.docs[0];
      const studentData = studentDoc.data();
  
      const studentName = `${studentData.lastName}, ${studentData.firstName}`.toLowerCase().trim();
      const resultName = nameMatch[1].toLowerCase().trim();
  
      const sortName = (name) => {
        return name.split(/\s*,\s*|\s+/).sort().join(" ");
      };
  
      const sortedStudentName = sortName(studentName);
      const sortedResultName = sortName(resultName);
  
      console.log(sortedStudentName, sortedResultName);
  
      if (!studentData.uid) {
        toast.error(
          "Make sure you complete sign up before starting onboarding"
        );
        return;
      }
  
      if (sortedStudentName !== sortedResultName) {
        toast.error("Name on the result does not match the student's name.");
        return;
      }
  
      const tutorData = { ...formInfo, isTutor: true };
      const uploadedProfileUrl = await uploadFileToFirebase(
        "profile",
        profileImageToUpload
      );
      const uploadedResultUrl = await uploadFileToFirebase(
        "result",
        resultToUpload
      );
      tutorData.profile = uploadedProfileUrl;
      tutorData.result = uploadedResultUrl;
  
      await updateDoc(studentDoc.ref, tutorData);
  
      setComplete(true);
      toast.success("Onboarding Complete");
      router.push("/login");
  
    } catch (err) {
      console.error(err.message);
      toast.error("Error submitting form, please try again");
    }
  };
  
  

  const closeModal = () => {
    setShowModal(false);
    router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <ToastContainer position="top-center" draggable />
      <Modal showModal={showModal} closeModal={closeModal} />
      
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
