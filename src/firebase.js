// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgsflrsZlCfk4LQ7x12Yze2QACmjxvkKg",
  authDomain: "chatapp-e4ec7.firebaseapp.com",
  projectId: "chatapp-e4ec7",
  storageBucket: "chatapp-e4ec7.appspot.com",
  messagingSenderId: "139588246998",
  appId: "1:139588246998:web:6b535dda98f7f6706b9877"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()