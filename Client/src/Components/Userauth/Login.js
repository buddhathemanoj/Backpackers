import React, { useState, useEffect } from "react";

import axios from "axios";
import { Loader } from "../Hostelrooms/Loader";
import { Error} from "../Hostelrooms/Error";
import { Link, Navigate } from "react-router-dom";
import { Success } from "../Hostelrooms/Success";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const[success, setsuccess]=useState(false)  

   useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location="/home"
        }
    },[])
  

  async function handleLogin() {

    const user = {
      email,
      password,
    };
    try {
        setLoading(true)
      const result = await axios.post( "http://localhost:5001/api/users/login", user).data;
        localStorage.setItem('currentUser',JSON.stringify(result) );
    
      
      Navigate.push("/home")
    } catch (error) {
       
      console.log(error); 
     setError(true)
     setLoading(false)
    } 

    
  }

  return (
    <div>
        {loading&&(<Loader/>)}
      <div className="row justify-content-center ">
        <div className="col-md-5">
            {error&&(<Error/>)}
          <div>
            <h1>Login</h1>
    {success&& (<Success/>)}
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={handleLogin}>
              Log In
            </button>
            <Link to={"/signup"}>
              <p>Click to register here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
