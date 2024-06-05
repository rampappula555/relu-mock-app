// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzxnt79FEmg3-23THlXgeFb6FBDq3pb3Q",
  authDomain: "relu-mock-app.firebaseapp.com",
  projectId: "relu-mock-app",
  storageBucket: "relu-mock-app.appspot.com",
  messagingSenderId: "784810558188",
  appId: "1:784810558188:web:b73ddac2fe8c42422ddbc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
