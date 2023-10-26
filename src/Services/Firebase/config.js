// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ZHiQp8Tfjrf_3y0VtYMo2XfsDCB6kWg",
  authDomain: "fanitosmarket-ecommerce.firebaseapp.com",
  projectId: "fanitosmarket-ecommerce",
  storageBucket: "fanitosmarket-ecommerce.appspot.com",
  messagingSenderId: "348908567036",
  appId: "1:348908567036:web:67e9462790fdaab5f2da79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);