// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc } from "firebase/firestore";
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
const db = getFirestore(app);
// console.log(db);

// setDoc(doc(db,"products","myid1001"),{
//     name:"sponsor",
//     type:"food",
//     price:1000
// });

// setDoc(doc(db,"products","qZdoz7iBsLZKtswvgWMh"),{
//     name:"deedo",
//     type:"food",
//     price:500
// }).then(()=>{
//     console.log("Updated Successfully!");
// }).catch(error=>{
//     console.log(error);
// });



// Before Merge [can c,r,u,d | useful]

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:500,
//     unit:"bot"
// }).then(()=>{
//     console.log("Updated Successfully!");
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//     console.log("Updated Successfully!");
// }).catch(error=>{
//     console.log(error);
// });


// after Merge 

    // setDoc(doc(db,"products","myid1002"),{
    //     name:"speed",
    //     type:"food",
    //     price:500,
    //     unit:"bot"
    // }).then(()=>{
    //     console.log("Updated Successfully!");
    // }).catch(error=>{
    //     console.log(error);
    // });


//note :: after mege delete new update data, not old data
    // setDoc(doc(db,"products","myid1002"),{
    // },{merge:true}).then(()=>{
    //     console.log("Updated Successfully!");
    // }).catch(error=>{
    //     console.log(error);
    // });



// Before Merge 

//     setDoc(doc(db,"products","myid1002"),{
//         name:"deedo"
//     }).then(()=>{
//         console.log("Updated Successfully!");
//     }).catch(error=>{
//         console.log(error);
// });



// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:500,
//     unit:"bot"
// }).then(()=>{
//     console.log("Updated Successfully!");
// }).catch(error=>{
//     console.log(error);
// });


// after Merge 

    // setDoc(doc(db,"products","myid1002"),{
    //     name:"deedo",
    //     type:"food",
    //     price:500,
    //     unit:"bot"
    // },{merge:true}).then(()=>{
    //     console.log("Updated Successfully!");
    // }).catch(error=>{
    //     console.log(error);
    // });


// Before Merge 

//     setDoc(doc(db,"products","myid1002"),{
//         stock:200
//     }).then(()=>{
//         console.log("Updated Successfully!");
//     }).catch(error=>{
//         console.log(error);
// });


// after Merge 

    // setDoc(doc(db,"products","myid1002"),{
    //     name:"speed",
    //     type:"food",
    //     price:500,
    //     unit:"bot"
    // }).then(()=>{
    //     console.log("Updated Successfully!");
    // }).catch(error=>{
    //     console.log(error);
    // });


    setDoc(doc(db,"products","myid1002"),{
        stock : 200,
        promo : "10%"
    },{merge:true}).then(()=>{
        console.log("Updated Successfully!");
    }).catch(error=>{
        console.log(error);
    });