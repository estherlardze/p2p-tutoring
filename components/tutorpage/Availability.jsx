import React from "react";

const Availability = ({tutor}) => {
  return (
    <section>
      <h1 className="font-bold uppercase text-xl">Availabily</h1>
      <div>
         {tutor.availability?.map((day, index) => (
             <article key={index} className="flex items-center gap-4 text-gray-1">
                 <p>{day.day}</p>
                 <p className="text-sm">{day.time.join(",")}</p>
             </article>
         ))}
      </div>
    </section>
  );
};

export default Availability;
