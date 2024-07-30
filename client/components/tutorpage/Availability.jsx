import React from "react";

const Availability = ({tutor}) => {
  return (
    <section>
      <h1 className="font-bold uppercase text-xl">Available Days</h1>
      <div>
         {tutor.availability?.map((day, index) => (
             <article key={index} className="flex items-center gap-4 text-gray-1">
                 <p>{day.label}</p>
             </article>
         ))}
      </div>
    </section>
  );
};

export default Availability;
