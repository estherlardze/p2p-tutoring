import { createContext, useState, useEffect } from "react";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";


 const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, initializeAuthState)
      return unsubscribe
    }, [])
 
       
    const initializeAuthState =  (currentUser) => {
      setLoading(true);
      if(currentUser) 
       {
         setCurrentUser(currentUser);
         setIsLoggedIn(true)
       }

      else{
        setCurrentUser(null)
        setIsLoggedIn(false)
      }
      setLoading(false)
   }

   const values = {
     currentUser,
     isLoggedIn,
     loading
 
   }

    return(
      <AuthContext.Provider value={values}>
        {!loading && children}
      </AuthContext.Provider>
    )
}