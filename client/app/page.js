"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Header,
  Hiw,
  Features,
  Goal,
  Footer,
  
} from "@/components/index";
import { howitworks } from "@/constants/data";
import Loader from "@/components/Loader";

export default function Home() {
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
    <main className="min-h-screen flex flex-col">
      <div className="bg-header bg-cover bg-center bg-no-repeat flex-grow">
        <div className="h-[50vh] sm:h-[95vh] bg-black/75 text-white font-custom">
          <div className="text-white">
            <Navbar />
          </div>
          <Header />
        </div>
      </div>
      <section className="bg-black/5 flex-grow">
        <Hiw heading="How it Works" data={howitworks} />
      </section>
      <Goal />
      <Features />
      <Footer />
    </main>
  );
}
