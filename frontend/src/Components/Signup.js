import React, { useState } from "react";

import { useNavigate,Link } from "react-router-dom";
import './Home.css';




const Signup = () => {

  const navigate = useNavigate();

  const [cred, setCred] = useState({ name: "", email: "", password: "" });

  const onclickHandle = async (e) => {

    e.preventDefault(); //will not reload the page

    const response = await fetch("http://localhost:8080/auth/signup", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        name: cred.name,

        email: cred.email,

        password: cred.password,

      }),

    });

    const json = await response.json();

    if (json.success) {

      localStorage.setItem("access", json.success);

      navigate("/");

    }

  };

  const onchange = (e) => {

    setCred({ ...cred, [e.target.name]: e.target.value });

  };

  return (

    <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto p-0">
        <div className="row d-flex justify-content-center align-items-center overflow-auto">
          <div className="col d-flex flex-column align-items-center overflow-auto">
            <div className="row w-100 d-flex justify-content-center align-items-center">
              <div className="col-sm-9 col-md-6">
                <h1 className="text-center">Sign Up</h1>
                <form method="POST" className="mt-4">
                  <div className="my-2">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={cred.name} onChange={onchange} placeholder="Enter Name..." />
                  </div>
                  <div className="my-2">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={cred.email} onChange={onchange} placeholder="Enter Email..." />
                  </div>
                  <div className="my-2">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={cred.password} onChange={onchange} placeholder="Enter Password..." />
                  </div>
                  <div className="my-2">
                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" value={cred.cpassword} onChange={onchange} placeholder="Enter Confirm Password..." />
                  </div>
                  <div className="my-3">
                    <input className="w-100 btn btn-outline-primary" type="submit" onClick={onclickHandle} />
                  </div>
                  <div>
                  <p>Already a user? <Link to="/Login">Login</Link></p>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

  );

};




export default Signup;