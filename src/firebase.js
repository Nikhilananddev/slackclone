import firebase from firebase/app
import { app } from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzbnDJ2cbEWx6bZ_1HUbbf4HtbAFFmj-Q",
    authDomain: "slack-a3619.firebaseapp.com",
    databaseURL: "https://slack-a3619.firebaseio.com",
    projectId: "slack-a3619",
    storageBucket: "slack-a3619.appspot.com",
    messagingSenderId: "664964231781",
    appId: "1:664964231781:web:497d337beffdc41f64cc8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};