// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: process.env.REACT_APP_API_KEY,
	// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	// projectId: process.env.REACT_APP_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_APP_ID,
	apiKey: "AIzaSyD_M7-L-lQ7hQH7VTX1WcJ_edSFKXqgjIs",
	authDomain: "parts-manufacturer-b56f0.firebaseapp.com",
	projectId: "parts-manufacturer-b56f0",
	storageBucket: "parts-manufacturer-b56f0.appspot.com",
	messagingSenderId: "668099033961",
	appId: "1:668099033961:web:f9ffa01f43eef557611bf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
