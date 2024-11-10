// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZc86M9Zk9UoOKXK1EC-9M2WZmLa40kc",
  authDomain: "netflixgpt-cf151.firebaseapp.com",
  projectId: "netflixgpt-cf151",
  storageBucket: "netflixgpt-cf151.firebasestorage.app",
  messagingSenderId: "59026560184",
  appId: "1:59026560184:web:5d9debc3ecd68d8478d04d",
  measurementId: "G-RT1605VY2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();