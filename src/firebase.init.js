// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqhCP4FWmbgzPwFIF8QSQgB8EEvRuXMA",
  authDomain: "react-todo-app-66005.firebaseapp.com",
  projectId: "react-todo-app-66005",
  storageBucket: "react-todo-app-66005.appspot.com",
  messagingSenderId: "2290950979",
  appId: "1:2290950979:web:5920a6407d05b5871ac5f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;