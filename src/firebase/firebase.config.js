// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9AVXKw3nsXwVpt-X-qAhODLK7Yf7uC4",
  authDomain: "new-project-auth-87a6f.firebaseapp.com",
  projectId: "new-project-auth-87a6f",
  storageBucket: "new-project-auth-87a6f.firebasestorage.app",
  messagingSenderId: "515120277801",
  appId: "1:515120277801:web:5c8dea15b12cf14f5fef38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
