// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWK0YGwA6q3A6Ps0YYwxAeji6RU_OA1gQ",
  authDomain: "basic-shop-app-96d88.firebaseapp.com",
  projectId: "basic-shop-app-96d88",
  storageBucket: "basic-shop-app-96d88.appspot.com",
  messagingSenderId: "74845406147",
  appId: "1:74845406147:web:cc3d42db315cfe1d88b376",
  measurementId: "G-RDWP6NYSKH"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const  FIREBASE_AUTH = getAuth(FIREBASE_APP);
