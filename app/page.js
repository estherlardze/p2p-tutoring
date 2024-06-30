"use client";

import React from "react";
import {
  Navbar,
  Header,
  Hiw,
  Features,
  Goal,
} from "@/components/index";
import { howitworks } from "@/constants/data";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-header bg-cover bg-center bg-no-repeat flex-grow">
        <div className="h-[50vh] sm:h-[95vh] bg-black/75 text-white font-custom">
          <Navbar />
          <Header />
        </div>
      </div>
      <section className="bg-black/5 flex-grow">
        <Hiw heading="How it Works" data={howitworks} />
      </section>
      <Goal />
      <Features />
    </main>
  );
}
