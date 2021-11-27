import React, { useState, useEffect } from "react";
import Axios from "axios";

export const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [cinema,setCinema]=useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!username||!password){
      console.log("campi vuoti")
      return
    }
    console.log("sono nel submit")
    try {
      const result = await Axios.post("http://localhost:3001/", {
        username: username,
        password: password,
      }).then((res)=>{
        
        if (res.data){
          setCinema(res.data);
        } else{
          alert("password non corrispondente")
        }
      });
      
    } catch (error) {
      console.log("error axios", error);
    }
  };

  useEffect(() => {
    console.log("login", username, password);
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="login-form bg-light mt-4 p-4">
            <form className="row g-3" onSubmit={onSubmit}>
              <h4>Login for start to tracing</h4>
              <div className="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={(event)=>setUser(event.currentTarget.value)}
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event)=>setPass(event.currentTarget.value)}
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-dark float-end">
                  Login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-6">
              <p className="text-end mb-0 fs-6">dev by FC</p>
            </div>
            <p>result {cinema}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
