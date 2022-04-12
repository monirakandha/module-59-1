// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADK9YYTSjwllDLUiR3Ox75-b5H8Xek5j8",
  authDomain: "emajhon-simple-61602.firebaseapp.com",
  projectId: "emajhon-simple-61602",
  storageBucket: "emajhon-simple-61602.appspot.com",
  messagingSenderId: "9844978091",
  appId: "1:9844978091:web:23c88862c7bd164483e2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;