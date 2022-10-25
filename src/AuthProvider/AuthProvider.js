import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";

import { app } from "../Firebase/Firebase.config";


const auth = getAuth(app)
export const myContext = createContext();
const AuthProvider = ({children}) => {
    const user ={
        name:'sabbir'
    }




    const allInfo = {user}
  return (
  <myContext.Provider value={allInfo}>
    {children}
  </myContext.Provider>
  );
};

export default AuthProvider;
