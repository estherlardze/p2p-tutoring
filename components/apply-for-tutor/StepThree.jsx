import React from "react";
import Stepper from "./Stepper";


const StepThree = ({ currentStep, complete, steps }) => {
  return (
    <div>
      three
      <div className="max-w-md">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>
    </div>
  );
};

export default StepThree;
