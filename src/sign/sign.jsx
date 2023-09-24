import React from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Signup(email,pass)
{
  
/*if(firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
}))console.log("Success");*/
const auth = getAuth();
//const navigate=useNavigate();
return true;
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    console.log("Success")
  return true; })
  .catch((error) => {
    //console.log("Fail")
    if(error.code=="auth/email-already-in-use")
    {
      alert("E-mail already in Use")

    }
    else
    {
      alert(error.message)
    }
    //const errorCode = error.code;
   // const errorMessage = error.message;
 //   console.log(errorCode)
    // ..
  });
return false;

}