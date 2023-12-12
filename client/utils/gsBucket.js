// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYJkITKkgy3YobN3vtOevHoJx64cymhg",
  authDomain: "jobfinder-5711e.firebaseapp.com",
  projectId: "jobfinder-5711e",
  storageBucket: "jobfinder-5711e.appspot.com",
  messagingSenderId: "804437656880",
  appId: "1:804437656880:web:3ecd385d92ba6b15bbb4f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const db = getDatabase(app);