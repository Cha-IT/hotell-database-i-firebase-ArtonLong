// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// Your web app's Firebase configuration
// NB! HER KOMMER DINE UNIKE KODER
const firebaseConfig = {
  apiKey: "AIzaSyDG9Z7xZyKiGJimlZDkZPU8sOcSYwRK_t8",
  authDomain: "hotelrooms-e10a5.firebaseapp.com",
  projectId: "hotelrooms-e10a5",
  storageBucket: "hotelrooms-e10a5.appspot.com",
  messagingSenderId: "563464062430",
  appId: "1:563464062430:web:de8a64c11d85fe3807894f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
