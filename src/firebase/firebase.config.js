// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUv5Rd4XZD8jSJgYguaTAn3rFryiDShPE",
  authDomain: "email-password-auth-e7899.firebaseapp.com",
  projectId: "email-password-auth-e7899",
  storageBucket: "email-password-auth-e7899.appspot.com",
  messagingSenderId: "258806983288",
  appId: "1:258806983288:web:a2164f8f09b75dd61f1b8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app