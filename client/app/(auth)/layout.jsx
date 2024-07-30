"use client";

import { AuthProvider } from "@/context/authcontext";


const RootLayout = ({ children }) => {
  
  return (
    <div className="">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default RootLayout;
