"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import avater from "../../public/avater.png";
import { IoMdMenu } from "react-icons/io";
import { auth, db } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Navbar = ({ openMenu }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        router.push("/");
      })
      .catch((error) => {
        console.log("Sign-out error:", error.message);
      });
  };

  return (
    <div className="w-full sticky top-0 left-0 z-20">
      <div className="bg-white shadow-md h-[70px] flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold hidden sm:block">Logo</h1>

        <div className="sm:hidden" onClick={openMenu}>
          {<IoMdMenu size={25} />}
        </div>
        <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
          <Image
            src={avater}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          {open && (
            <div className="absolute right-0 mt-2 w-fit bg-white rounded-lg shadow-lg py-2">
              <h1 className="text-lg font-bold px-4 py-2">
                {userData ? userData.firstName : "Name"}
              </h1>
              <h1 className="text-lg font-bold px-4 py-2">
                {user ? user.email : "Email"}
              </h1>
              <h1 className="text-lg font-bold px-4 py-2">
                {userData ? userData.role : "Role"}
              </h1>
              <button
                onClick={handleSignOut}
                className="text-lg font-bold text-red-600 px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
