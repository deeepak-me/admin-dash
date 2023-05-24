
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"AIzaSyBP-kbE5bTAPTGx6DXtv6d2aL0bi-6-Zb0",
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-6bde7.firebaseapp.com",
  projectId: "admin-panel-6bde7",
  storageBucket: "admin-panel-6bde7.appspot.com",
  messagingSenderId: "761715944160",
  appId: "1:761715944160:web:bd01acda226707f7ae3e85"
};

//console.log(process.env);


const app = initializeApp(firebaseConfig);
export const auth = getAuth();