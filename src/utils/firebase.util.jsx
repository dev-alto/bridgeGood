// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc, 
  setDoc,
  getDocs
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1HMBVzJ_sUeWzlte3ovgaIrmJKBrrIL0",
  authDomain: "bridgegood-5a93a.firebaseapp.com",
  projectId: "bridgegood-5a93a",
  storageBucket: "bridgegood-5a93a.appspot.com",
  messagingSenderId: "105789635155",
  appId: "1:105789635155:web:2d497c40f8f6cde67624a6",
  measurementId: "G-N09E8Z5S2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log("Error creating User, ", error.message);
    }
  }

  return userDocRef;
}