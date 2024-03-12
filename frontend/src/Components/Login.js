import React, { useState } from 'react'

import { useNavigate, Link } from 'react-router-dom';




const Login = () => {

  const navigate = useNavigate()

  const [cred, setCred] = useState({ email: "", password: "" })

  const onclickHandle = async (e) => {

    e.preventDefault();//will not reload the page
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cred.email, password: cred.password })
    });
    const json = await response.json();
    
    if (json.success) {

      localStorage.setItem('access', json.success)

      navigate('/')

    }



  }

  const onchange = (e) => {

    setCred({ ...cred, [e.target.name]: e.target.value })

  }

  return (

    <>
      <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto p-0">
        <div className="row d-flex justify-content-center align-items-center overflow-auto">
          <div className="col d-flex flex-column align-items-center overflow-auto">
            <div className="row w-100 d-flex justify-content-center align-items-center">
              <div className="col-sm-9 col-md-6">
                <h1 className="text-center">Login</h1>




                <form onSubmit={onclickHandle}>



                  <div className="mb-3">

                    <label htmlFor="Email" className="form-label">Email address</label>

                    <input type="email" name='email' value={cred.email} onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />



                  </div>

                  <div className="mb-3">

                    <label htmlFor="Password" className="form-label">Password</label>

                    <input type="password" name='password' value={cred.password} onChange={onchange} className="form-control" id="exampleInputPassword1" />

                  </div>



                  <div className='text-center submit-btn'><button type="submit" className="btn btn-success mb-2"  >Login</button></div>
                  <div>
                  <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
                  </div>
                  


                </form>






                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )

}




export default Login;