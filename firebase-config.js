// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx1zB6Mmnn7WLady_gYh1ByioO62RAa5Q",
  authDomain: "symbolic-heaven-348209.firebaseapp.com",
  projectId: "symbolic-heaven-348209",
  storageBucket: "symbolic-heaven-348209.appspot.com",
  messagingSenderId: "364358053451",
  appId: "1:364358053451:web:8a388a1edabc1b18f6a7ce",
  measurementId: "G-RN20MF6N7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
