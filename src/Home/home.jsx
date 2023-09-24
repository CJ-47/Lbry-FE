import React from "react"
import axios from "axios";
import { useState } from "react";
export default function Home(){
var result;
const [users, setUsers] = useState([])
function makeGetRequest(path) {
    /*    axios.get(path).then(
            (response) => {
                result = response.data;
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );*/
        

        const fetchUserData = () => {
          fetch(path)
            .then(response => {
              return response.json()
            })
            .then(data => {
              setUsers(data)
              console.log("hi")
              console.log(data)
            })
        }
        fetchUserData()   
    }
   makeGetRequest('https://srvrls-cqau4plod-cj-47.vercel.app/');

return<>
<h4>Home</h4>

</>
}