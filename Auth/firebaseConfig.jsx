
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
    apiKey: "AIzaSyAEUKXrjvqyYHSktvSTs2b4dAgn3JqcgYg",
    authDomain: "credit-card-management-beb7c.firebaseapp.com",
    projectId: "credit-card-management-beb7c",
    storageBucket: "credit-card-management-beb7c.firebasestorage.app",
    messagingSenderId: "713295384809",
    appId: "1:713295384809:web:78d6cf3372d15c468a6078",
    measurementId: "G-FE7MHPW8P4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth, provider, db}