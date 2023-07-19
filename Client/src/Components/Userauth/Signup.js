import React, { useState, useEffect } from "react";
import { Loader } from "../Hostelrooms/Loader";
import { Error} from "../Hostelrooms/Error";
import { Success } from "../Hostelrooms/Success";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 const [success , setSuccess] = useState();
  async function handleRegisterr() {
    if (password === cpass) {
      const user = {
        name,
        email,
        password,
        cpass,
      }
      try {
        setLoading(true)
        const result = await axios.post("http://localhost:5001/api/users/register" , user).data
        setLoading(false)
        setSuccess(true)

        setName('')
        setEmail('')
        setPassword('')
        setCpass('')

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true)
      }
      
      
      
      
      console.log(user);
    } else {
      alert("password did not match");
    }
  }
  return (
    <div style={{ padding: "100px" }}>
        {loading && (<Loader/>)}
        {error&& (<Error/>)}
        
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5 boxshaows">
          <div>
          {success&&(<Success/>)}
            <h2 style={{textAlign:'center'}}>Signup</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input
              type="text"
              className="form-control"
              placeholder="confirm password"
              value={cpass}
              onChange={(e) => {
                setCpass(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={handleRegisterr}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
