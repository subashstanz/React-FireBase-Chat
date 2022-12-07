import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl6DPQnYc22c6OjTe0COrw65IsqE6ZNbY",
  authDomain: "cricchat-7c8eb.firebaseapp.com",
  projectId: "cricchat-7c8eb",
  storageBucket: "cricchat-7c8eb.appspot.com",
  messagingSenderId: "508374134553",
  appId: "1:508374134553:web:5ca1e23a724dc23b421f88",
  measurementId: "G-M24J1DBRX0",
};
const firebaseAuth = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };

export default firebaseAuth;
