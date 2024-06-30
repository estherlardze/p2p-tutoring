import React from "react";
import Stepper from "./Stepper";

const StepOne = ({ currentStep, complete, steps }) => {
  return (
    <div>
      hello1
      <div className="max-w-md">
        <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      </div>
    </div>
  );
};

export default StepOne;
