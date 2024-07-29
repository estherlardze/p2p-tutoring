import React from 'react';

const ViewDetails = ({ tutor }) => {
  console.log("tutor", tutor);
  return (
    <div>
      <h1><span className='font-bold'>Name:</span> {tutor.firstName}</h1>
      <p> <span className='font-bold'>Email:</span> {tutor.studentEmail}</p>
      <p> <span className='font-bold'>Contact:</span> {tutor.contact}</p>
      <p> <span className='font-bold'>Department:</span> {tutor.department}</p>
      <div>
        <h2 className="font-bold">Courses:</h2>
        {tutor.courses?.map((course, index) => (
          <article key={index} className="flex items-center gap-4 text-gray-1">
            <p>{course}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
