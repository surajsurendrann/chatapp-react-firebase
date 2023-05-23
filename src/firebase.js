// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATP_PATQvuHkEzMGro0uoLg8CLcMYM5pM",
  authDomain: "chat-ac0a4.firebaseapp.com",
  projectId: "chat-ac0a4",
  storageBucket: "chat-ac0a4.appspot.com",
  messagingSenderId: "938535097512",
  appId: "1:938535097512:web:38536ebde594cb73de1e9d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
