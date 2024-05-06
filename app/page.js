"use client"

import React from "react";
import {Navbar, Header, Hiw} from "@/components/index"

export default function Home() {
  return (
    <main className="">
      <div className="bg-header bg-cover bg-center bg-no-repeat h-[80vh] bg-fixed">
        <div className="h-[80vh] bg-black/70 text-white font-custom">
          <Navbar/>
          <Header/>
        </div>
        <Hiw/>
      </div>
    </main>
  );
}
