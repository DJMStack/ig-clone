  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWoJfSo3hAHfrrinrB8E1hjADqVllQRMg",
    authDomain: "ig-clone-958ea.firebaseapp.com",
    projectId: "ig-clone-958ea",
    storageBucket: "ig-clone-958ea.appspot.com",
    messagingSenderId: "120097510697",
    appId: "1:120097510697:web:861c3f506c1749d4a6d338",
    measurementId: "G-Q96QG5XS0E"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export{ db, auth, storage };