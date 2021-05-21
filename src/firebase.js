// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3Nxq615PShekf8F-uSIstV2LXIDGQrMI",
    authDomain: "challenge-59fde.firebaseapp.com",
    projectId: "challenge-59fde",
    storageBucket: "challenge-59fde.appspot.com",
    messagingSenderId: "291770497785",
    appId: "1:291770497785:web:d746f25006ed2c1e84c028",
    measurementId: "G-DFMH4X9NTY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };