import React from "react";
import { feature } from "@/public";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { features } from "@/constants/data";


const Features = () => {
  return (
    <section className="grid grid-cols-2 gap-5 my-[90px] justify-center items-center w-[90%] mx-[5%] 2xl:w-[1500px] 2xl:mx-auto">
      <div className="col-span-2 lg:col-span-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-black/80">
          Features and Benefits
        </h1>
        <div>
          {features.map((feature, i) => (
            <article key={i} className="flex items-start gap-4 my-6">
              <IoMdCheckmark size={28} className="text-green" />
              <p className="text-[12px] sm:text-[14px] text-gray-1/90">{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <Image src={feature} alt="feature image" />
      </div>
    </section>
  );
};

export default Features;
