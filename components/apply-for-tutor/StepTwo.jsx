import React from "react";
import Stepper from "./Stepper";


const StepTwo = ({ currentStep, complete, steps }) => {
  return (
    <div>
      <div className="max-w-md">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>
    </div>
  );
};

export default StepTwo;
