// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQVUBUfyl52zvN0Wx0W_TQHbHpvA9HpK4",
  authDomain: "clone-v2-f6652.firebaseapp.com",
  projectId: "clone-v2-f6652",
  storageBucket: "clone-v2-f6652.appspot.com",
  messagingSenderId: "575368286438",
  appId: "1:575368286438:web:22a1fad0d82381485eeb27",
  measurementId: "G-VG3LEHWRR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();