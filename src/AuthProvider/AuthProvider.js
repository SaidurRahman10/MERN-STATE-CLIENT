import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { app } from "../Firebase/Firebase.config";


const auth = getAuth(app)
export const myContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                console.log('user inside State Change', currentUser);
                setUser(currentUser)
               
            });
            return ()=>{
                unsubscribe();
            }
        },[])




    const allInfo = {user,createUser,logIn, googleSignIn}
  return (
  <myContext.Provider value={allInfo}>,
    {children}
  </myContext.Provider>
  );
};

export default AuthProvider;
