
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
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
  const analytics = getAnalytics(app);

  console.log(app);
//   console.log(analytics);
