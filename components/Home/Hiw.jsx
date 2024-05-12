import React from "react";
import { howitworks } from "@/constants/data";
import HiwCard from "./HiwCard";


const Hiw = () => {
  return (
    <section className=" bg-black/10">
      <div className="text-center py-[70px] w-[90%] mx-[5%]">
      <h1 className="text-3xl font-bold mb-[50px]">How it Works</h1>
   
   <div className="grid grid-cols-10 lg:grid-cols-12 gap-6 justify-center items-center">
     {howitworks.map((howitwork) => (
       <HiwCard
         key={howitwork.id}
         icon={howitwork.icon}
         title={howitwork.title}
         description={howitwork.content}
       />
     ))}
   </div>
      </div>
    </section>
  );
};

export default Hiw;
