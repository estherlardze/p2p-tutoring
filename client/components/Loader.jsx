import React from 'react';
import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ImSpinner2 className="animate-spin-slow text-blue" size={40} />
    </div>
  );
};

export default Loader;
