// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAsxeFvZ8EVc7cWSz8xudnv5va01tVQTs",
  authDomain: "clone-29818.firebaseapp.com",
  projectId: "clone-29818",
  storageBucket: "clone-29818.appspot.com",
  messagingSenderId: "139440206694",
  appId: "1:139440206694:web:dad075a863e92c36fdcea7",
  measurementId: "G-1XWG6RXVKZ"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};