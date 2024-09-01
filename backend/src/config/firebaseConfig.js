const admin = require('firebase-admin');
const serviceAccount = require('./agenda-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Opcional si usas Firestore sin Realtime Database
});

const db = admin.firestore();

console.log('Firestore Initialized:', !!db); // Debería mostrar `true`

module.exports = { db };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC5QOfI76fo-Ty8DdEj-ewS0v0jFKKxan8",
//   authDomain: "agenda-13a55.firebaseapp.com",
//   projectId: "agenda-13a55",
//   storageBucket: "agenda-13a55.appspot.com",
//   messagingSenderId: "33770119395",
//   appId: "1:33770119395:web:bb890a1397c0721247e5d6",
//   measurementId: "G-B4DPCC3PDF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);