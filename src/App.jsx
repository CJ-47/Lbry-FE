import logo from './logo.svg';
import './App.css';
import Form from './form/form';
import Home from './Home/home';
// Import the functions you need from the SDKs you need
import { Route, Routes } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6wKiJM-k5KCXwWmF6nDgfG7FK9q_7qgk",
  authDomain: "lbry-c4311.firebaseapp.com",
  projectId: "lbry-c4311",
  storageBucket: "lbry-c4311.appspot.com",
  messagingSenderId: "1071321171981",
  appId: "1:1071321171981:web:a3d9ba3f77f30a02b1ed44",
  measurementId: "G-GXS92NNGSC"
};


function App() {
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div className="App" style={{"backgroundColor":"gray","height":"90vh","margin":"3vh"}} >
      <h1 style={{"textAlign":"center"}}>Welcome to BookReads</h1>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/home" element={<Home />} />
    </Routes>              
    </div>
  );
}

export default App;
