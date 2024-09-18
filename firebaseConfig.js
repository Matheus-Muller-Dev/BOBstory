import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkvKabz4tZlvcYZGXM_WTxUs41gYxSIo0",
    authDomain: "bob-company-c00d7.firebaseapp.com",
    projectId: "bob-company-c00d7",
    storageBucket: "bob-company-c00d7.appspot.com",
    messagingSenderId: "112051319272",
    appId: "1:112051319272:web:094a7706c48c9c50dab45d",
    measurementId: "G-NCX1BD30Y5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
