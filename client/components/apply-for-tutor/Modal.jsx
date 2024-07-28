import React from "react";

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30  z-50">
      <div className="bg-white p-8 mx-auto rounded shadow-lg text-center w-[90%] sm:w-[70%] lg:w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Qualification Check</h2>
        <p className="mb-4">
          Your current average is below 70, so you do not yet qualify to be a
          tutor. However, you can still join our platform as a student to book
          tutors who can help you improve your average and potentially qualify
          as a tutor in the future.
        </p>
        <button
          onClick={closeModal}
          className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Modal;
