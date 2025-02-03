// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfwKopkwVpnttsXD70hnAnaj76EN6UIIU",
  authDomain: "netflixgpt-8d792.firebaseapp.com",
  projectId: "netflixgpt-8d792",
  storageBucket: "netflixgpt-8d792.firebasestorage.app",
  messagingSenderId: "320172632828",
  appId: "1:320172632828:web:9006abe6d78d002131c579",
  measurementId: "G-QE2PQVKNZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);