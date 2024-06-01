// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection,setDoc,doc} from "firebase/firestore";
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
// console.log(app);

const db = getFirestore(app);
// console.log(db);


// setDoc(doc(db,"products","myid1001"),{
//     name : "redbull",
//     type : "food",
//     price : 1000
// });


// setDoc(doc(db,"products","myid1002"),{
//     name : "redbull",
//     type : "food",
//     price : 1000
// }).then(()=>{
//     console.log("Created Successfully!!");
// }).catch(error=>{
//     console.log(error);
// });

setDoc(doc(collection(db,"products")),{
    name : "redbull",
    type : "food",
    price : 1000
}).then(()=>{
    console.log("Created Successfully!!");
}).catch(error=>{
    console.log(error);
});

// Note:: setDoc is usually used on ground 
// setDoc can create both manually id or auto generated id , so it use mostly.

