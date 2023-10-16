// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcK_fI5IkPEtt0pDVVlS_TcjwrIAWh2SQ",
  authDomain: "infinityauth-b797f.firebaseapp.com",
  projectId: "infinityauth-b797f",
  storageBucket: "infinityauth-b797f.appspot.com",
  messagingSenderId: "592328424507",
  appId: "1:592328424507:web:aa4ba7198448782690f01e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//!  Authontation provides by google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);
