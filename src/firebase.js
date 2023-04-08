import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAmWbKzFyP72ha3z_uqEhnm8UxkYiG9jBY",
  authDomain: "clone-c9f72.firebaseapp.com",
  projectId: "clone-c9f72",
  storageBucket: "clone-c9f72.appspot.com",
  messagingSenderId: "76183273482",
  appId: "1:76183273482:web:ca94e2ef8f7c841cef5ff3",
  measurementId: "G-X6HQLGJPCM"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth }; 