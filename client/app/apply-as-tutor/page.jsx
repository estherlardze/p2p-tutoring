"use client";

import React, { useEffect, useState } from "react";
import { Hiw, ApplyHeader, Requirement, Navbar, Footer } from "@/components";
import { whychooseus } from "@/constants/data";
import Loader from "@/components/Loader";

const Page = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Navbar/> 
    <section className="w-full mx-auto my-24 min-h-screen">
      <ApplyHeader />
      <div className="bg-black/5 my-10 py-8">
        <div className="mx-auto w-full">
          <Hiw heading="How to get started?" data={whychooseus} />
        </div>
      </div>
      <Requirement />   
    </section>
    <Footer />
    </main>
  );
};

export default Page;
