"use client"

import React from "react";
import {Navbar, Header, Hiw, Footer} from "@/components/index"

export default function Home() {
  return (
    <main className="bg-black/10">
      <div className="bg-header bg-cover bg-center bg-no-repeat h-[95vh] bg-fixed">
        <div className="h-[95vh] bg-black/70 text-white font-custom">
          <Navbar/>
          <Header/>
        </div>
        <Hiw/>
        <Footer/>
      </div>
    </main>
  );
}
