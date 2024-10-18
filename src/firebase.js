// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC4pbhAjWNp3EXFdxgwQJ7BOresNE4ywOo",

//   authDomain: "im-store-a481c.firebaseapp.com",

//   projectId: "im-store-a481c",

//   storageBucket: "im-store-a481c.appspot.com",

//   messagingSenderId: "436513911335",

//   appId: "1:436513911335:web:72f7d5f48f381645cc9402",
// };

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,

  authDomain: "im-store-a481c.firebaseapp.com",

  projectId: "im-store-a481c",

  storageBucket: "im-store-a481c.appspot.com",

  messagingSenderId: "436513911335",

  appId: "1:436513911335:web:72f7d5f48f381645cc9402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
