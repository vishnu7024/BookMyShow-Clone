// import firebase from "firebase";
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";



// project-748716778741



const firebaseConfig = {
    apiKey: "AIzaSyChScMr6Z_Z600AOxNLs07Az5E1E_Lse7Q",
    authDomain: "bookmyshow-clone-f8189.firebaseapp.com",
    projectId: "bookmyshow-clone-f8189",
    storageBucket: "bookmyshow-clone-f8189.appspot.com",
    messagingSenderId: "112449024653",
    appId: "1:112449024653:web:ddd89cb2e4fc7afa9be8c4",
    measurementId: "G-7H5XLVXTSS",
  };


  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  // const db = firebase.firestore();
  // const auth = firebase.auth();
  // const provider = new GoogleAuthProvider();
  // const storage = firebase.storage();

  // export { auth, provider, storage}
  // export default db;

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
   
