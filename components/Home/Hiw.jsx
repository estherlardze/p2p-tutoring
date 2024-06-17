import React from "react";
import { howitworks } from "@/constants/data";
import Image from "next/image";

const Hiw = () => {
  return (
    <section className=" bg-black/5">
      <div className="text-center py-[70px] w-[90%] mx-[5%] 2xl:w-[1500px] 2xl:mx-auto">
        <h1 className="text-3xl font-bold">How it Works</h1>

        <div className="sm:grid flex flex-col grid-cols-12 gap-6 mt-16">
          {howitworks.map((howitwork, index) => (
            <div
              className="text-black flex-col flex-wrap  sm:col-span-6 lg:col-span-3 flex flex-col items-center"
              key={index}
            >
              <Image
                src={howitwork.image}
                alt={`${howitwork.id} image`}
                width={100}
                height={100}
              />
              <h1 className="uppercase text-gray text-[12px] my-6 font-semibold">
                {howitwork.step}
              </h1>
              <h1 className="font-bold mb-4">{howitwork.title}</h1>
              <p className="text-[12px] text-gray-1/90 flex flex-wrap flex-col sm:leading-6">
                {howitwork.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiw;
