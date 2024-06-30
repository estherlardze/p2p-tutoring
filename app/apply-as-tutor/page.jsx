"use client";

import React from "react";
import {  Hiw, ApplyHeader, Requirement } from "@/components";
import { whychooseus } from "@/constants/data";


const Page = () => {
  return (
   <section className="w-full mx-auto my-24 min-h-screen">
        <ApplyHeader/>
        <div className="bg-black/5 my-10 py-8">
          <div className="mx-auto w-full">
            <Hiw heading="How to get started?" data={whychooseus} />
          </div>
        </div>

      <Requirement/>
      </section>
  );
};

export default Page;
