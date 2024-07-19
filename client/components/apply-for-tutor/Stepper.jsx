import React from 'react';
import { TiTick } from 'react-icons/ti';



const Stepper = ({ currentStep, complete, steps }) => {
  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center w-28 sm:w-36 step-item ${currentStep === index + 1 ? 'active' : ''} ${currentStep > index + 1 || complete ? 'complete' : ''}`}
        >
          
          <div className="step">
            {currentStep > index + 1 || complete ? (
              <TiTick size={24} />
            ) : (
              index + 1
            )}
          </div>
          <small className="text-gray-600  hidden sm:block font-semibold">{step}</small>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
