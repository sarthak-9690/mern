import React, {useState} from "react";
import './Home.css';

function Contact() {

  const [cred, setCred] = useState({firstname: "", lastname: "", phone: "", email: "", state: "", district: "", zipcode: "", message: ""});

  const onclickHandle = async (e) => {

    e.preventDefault();//will not reload the page
    const response = await fetch("http://localhost:8080/auth/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstname: cred.firstname, lastname: cred.lastname, phone: cred.phone,  email: cred.email, state: cred.state, district: cred.district, zipcode: cred.zipcode, message: cred.message})
    });
    const json = await response.json();
    
    if (json.success) {
      alert("We will contact you soon...")
    }



  }

  const onchange = (e) => {

    setCred({ ...cred, [e.target.name]: e.target.value })

  }

    return(
    <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto py-2">
      <div className="row d-flex justify-content-center align-items-center overflow-auto">
        <div className="col col-sm-9 d-flex flex-column align-items-center overflow-auto">
          <h2>Contact Us</h2>
          
          <div className="row">
            <div className="col-sm-6 border border-2 border-white">
              <form onSubmit={onclickHandle}>
                <div className="row">
                  <div className="col-sm-6 mt-2">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstname" id="firstName" placeholder="first name ..." required="true" onChange={onchange} />
                  </div>
                  <div className="col-sm-6 mt-2">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastname" id="lastName" placeholder="last name ..." required="true" onChange={onchange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-2">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" name="phone" id="phone" placeholder="phone number ..." required="true" onChange={onchange} />
                  </div>
                  <div className="col-sm-6 mt-2">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="email ..." required="true" onChange={onchange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mt-2">
                    <label className="form-label" htmlFor="state">State</label>
                    <input type="text" className="form-control" name="state" id="state" required="true" placeholder="State..." onChange={onchange} /> 
                  </div> 
                  <div className="col-sm-4 mt-2">
                    <label className="form-label" htmlFor="district">District</label>
                    <input type="text" className="form-control" name="district" id="district" required="true" placeholder="District..." onChange={onchange} /> 
                  </div>
                  <div className="col-sm-4 mt-2">
                    <label className="form-label" htmlFor="zipcode">ZIP Code</label>
                    <input type="number" className="form-control" name="zipcode" id="zipcode" min="100000" max="999999" placeholder="zipcode ..." required="true" onChange={onchange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-2">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" name="message" id="message" placeholder="message ..." required="true" onChange={onchange}></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-2">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" name="t&c" id="t&c" required="true" />
                      <label className="form-check-label" htmlFor="t&c">Agree to terms and conditions.</label>
                    </div>
                  </div>
                </div>
                <p className="mt-2 mb-0">I hereby confirm that the above mentioned information i submitted is true.</p>
                <div className="row">
                  <div className="col my-2">
                    <input type="submit" className="w-100 btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 border border-2 border-white text-center">
              <h3 className="mt-3">Address</h3>
              <p>Head Office :- 220 Western Road, New Delhi</p>
              <p>Email :- schoollisting@gmail.com</p>
              <p>Pin Code :- 110002</p>
              <p>Phone No. :-0121-2513636,2644321,2643737 (RECEPTION)</p>
              <p>Phone No. :- 0121-2653935 (HEAD OFFICE)</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Contact;