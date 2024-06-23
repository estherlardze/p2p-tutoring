"use client";

import React from "react";
import { Navbar, Header, Hiw, Footer, Features, Goal } from "@/components/index";

export default function Home() {
  return (
    <main className="">
      <div className="bg-header bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[95vh]">
        <div className="h-[50vh] sm:h-[95vh] bg-black/75 text-white font-custom">
          <Navbar />
          <Header />
        </div>
        <Hiw />
        <Goal/>
        <Features />
        <Footer />
      </div>
    </main>
  );
}
