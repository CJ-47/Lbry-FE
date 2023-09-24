import React from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin(email,pass)
{console.log(email,pass)
  
//  console.log(data.email,data.pass);
const auth = getAuth();
signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    console.log("Success")
    return true;
    //const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    //console.log(error.code)
    if(error.code==="auth/invalid-login-credentials")
    {
      alert("User Account does not Exist")
    }
    else
    {
      alert(error.message);
    }
    //const errorCode = error.code;
    //const errorMessage = error.message;
//    console.log(errorCode,errorMessage)
    // ..
  });
return false;

}