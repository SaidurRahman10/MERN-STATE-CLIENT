// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbef_sbThPWcgM35QknKX7jCTbGF8uX9w",
  authDomain: process.env.REACT_APP_authDomain,
  projectId:  process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_projectId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);