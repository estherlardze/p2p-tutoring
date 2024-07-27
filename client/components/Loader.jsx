import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-12 h-12 border-l-2 border-r-2 border-b-2 border-blue border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
