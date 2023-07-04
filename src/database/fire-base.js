// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "expences-traker.firebaseapp.com",
    databaseURL: "https://expences-traker-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "expences-traker",
    storageBucket: "expences-traker.appspot.com",
    messagingSenderId: "1097249189587",
    appId: "1:1097249189587:web:2d24989a6f1e90de432e26"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default firebaseConfig;