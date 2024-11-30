// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmyMjlTc1EOvQweTeptkmZye0QPD-ECw",
  authDomain: "coffee-store-f4d27.firebaseapp.com",
  projectId: "coffee-store-f4d27",
  storageBucket: "coffee-store-f4d27.firebasestorage.app",
  messagingSenderId: "687515590665",
  appId: "1:687515590665:web:f18c18b59cfb5ee7d458d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);