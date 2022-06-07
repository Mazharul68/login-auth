// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX7qngEvz5C7WfVlnDFF9TAsq50x9a7-k",
    authDomain: "login-auth-d976d.firebaseapp.com",
    projectId: "login-auth-d976d",
    storageBucket: "login-auth-d976d.appspot.com",
    messagingSenderId: "744191657814",
    appId: "1:744191657814:web:da7e4bf857cb6e3b5fb8f7",
    measurementId: "G-2F3PY6K1GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;