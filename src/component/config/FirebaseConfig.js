
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCF7M6tNjuAjO6qn1CV-T6Xcj8Vvr8TJtA",
  authDomain: "olx-clone-7268.firebaseapp.com",
  projectId: "olx-clone-7268",
  storageBucket: "olx-clone-7268.appspot.com",
  messagingSenderId: "858143753073",
  appId: "1:858143753073:web:79789eb05ab2cade89ecd0",
  measurementId: "G-RBHRM22DEX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();
  export const storage = firebase.storage();


//   export const storage = firebase.storage();
  export const auth = firebase.auth();
  firebase.analytics();
  export default firebase;