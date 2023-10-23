// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
initializeApp(firebaseConfig);

//!  Authontation provides by google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

//!SIGNOUT

export const signOutUser = async () => await signOut(auth);

//! Creating User collection;

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalDetails = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapsort = await getDoc(userDocRef);

  if (!userSnapsort.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
    } catch (err) {
      alert(err);
    }
  }

  return userSnapsort;
};

//! For signUp
export const createUserAccount = async (email, password) => {
  if (!email || !password) return; //If email or password are not true i.e. empty. then stop to exicute further
  return await createUserWithEmailAndPassword(auth, email, password);
};

//! For signIn
export const signInUserAccount = async (email, password) => {
  if (!email || !password) return; //If email or password are not true i.e. empty. then stop to exicute further
  return signInWithEmailAndPassword(auth, email, password);
};
