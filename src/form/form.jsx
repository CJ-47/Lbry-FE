import React, { useState } from "react";
import Signup from '../sign/sign';
import { useNavigate } from "react-router-dom";
import Signin from '../sign/signin';
export default function Form()
{
   function Doit(){
      console.log("Doit");
      navigate('/home');
   }
   let flg=false;
   const navigate=useNavigate();
const [data,setdata]=useState({email:"",pass:""});    
const [typ,settyp]=useState(true);
const handle=async(event)=>
{
   setdata({...data,[event.target.id]:event.target.value,});
   }
return(<div style={{"backgroundColor":"grey","border":"10px solid skyblue","width":"40vw","padding":"20px","marginLeft":"30vw"}}>
<img alt="books" src="https://www.nicepng.com/png/full/43-432045_school-book-pictures-free-download-clip-art-transparent.png" height="150px" width="100px" align="right" ></img>
<h4 style={{"margin":"3px"}}>E-Mail</h4>
<input style={{"border":"3px solid black"}} label="Enter your email address" id="email" onChange={handle}></input>
<h4 style={{"margin":"3px"}}>Password</h4>
<input  style={{"marginBottom":"5px","border":"3px solid black"}} type="password" id="pass" onChange={handle}></input><br/>
{typ? <button onClick={()=>{if(Signup(data.email,data.pass))Doit();}} style={{"backgroundColor":"dodgerblue","color":"white","border":"3px solid grey","fontWeight":"bold"}}>Signup</button> : <button onClick={()=>{if(Signup(data.email,data.pass))navigate('/home');}} style={{"backgroundColor":"dodgerblue","color":"white","border":"3px solid grey","fontWeight":"bold"}}>Signin</button> }
<br/>
Are you a {typ ? <span style={{"fontWeight":"Bold","cursor":"grab"}} onClick={()=>{ settyp(!typ);}}>Existing User</span> : <span style={{"fontWeight":"Bold","cursor":"grab"}} onClick={()=>{settyp(!typ);}}>New User</span>} ?
</div>

)

}