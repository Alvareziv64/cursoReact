
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cursoreact-3b211.firebaseapp.com",
  projectId: "cursoreact-3b211",
  storageBucket: "cursoreact-3b211.appspot.com",
  messagingSenderId: "1095932231887",
  appId: "1:1095932231887:web:4f86e617e4dc08e6e4b7ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
