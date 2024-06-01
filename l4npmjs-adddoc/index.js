// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNMghiL4J3H7FNMRUOu6p4EwwRy3h4nMU",
  authDomain: "my-first-project-b67b4.firebaseapp.com",
  projectId: "my-first-project-b67b4",
  storageBucket: "my-first-project-b67b4.appspot.com",
  messagingSenderId: "477331161133",
  appId: "1:477331161133:web:85ae82cc6c084af59738a4",
  measurementId: "G-Z9328D5070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app);

const db = getFirestore(app);
console.log(db);

// addDoc(collection(db,"users"),{
//     name : "Aung Aung",
//     city : "Yangon",
//     age : 20
// });


// => display auto generated id ! after data set 
addDoc(collection(db,"users"),{
    name : "Aung Aung",
    city : "Yangon",
    age : 20
}).then(docRef=>{
    console.log(docRef.id);
}).catch(error=>{
    console.log(error);
});



// => Create Database 
// https://console.firebase.google.com/ > Build > Firestore Datebase > Create Database ->
// Database ID : (default)
// Location : asia-southeast1 (Singapore)
// next > Start in production mode > creatae 

// Error 
// [FirebaseError: 7 PERMISSION_DENIED: Missing or insufficient permissions.] {
//     code: 'permission-denied',
//     customData: undefined,
//     toString: [Function (anonymous)]
//   }
  

// Error for writting (Solved)
// rules > allow read, write: if true; > click "Publish"

