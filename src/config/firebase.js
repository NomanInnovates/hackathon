import firebase  from "firebase";
 var firebaseConfig = {
    apiKey: "AIzaSyCySmCvtzbxaH6MKvWN3TUrItqEIp_abVY",
    authDomain: "authentication-528e0.firebaseapp.com",
    projectId: "authentication-528e0",
    storageBucket: "authentication-528e0.appspot.com",
    messagingSenderId: "689687407686",
    appId: "1:689687407686:web:43156bdd55151051252e47",
    measurementId: "G-7P8VXGXVS8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  export const auth = firebase.auth()