import {useLocation} from 'react-router-dom';

function School(props) {
  const location = useLocation();
  return(
    <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto py-2">
      <div className="row d-flex justify-content-center align-items-center overflow-auto">
        <div className="col col-sm-9 d-flex flex-column align-items-center overflow-auto border border-white p-0">
          <div className="row w-100 border border-danger">
            <div className="col p-0 border border-primary">
            </div>
          </div>
          <div className="row w-100">
            <div className="col-sm-8">
              <h1>{location.state.data.title}</h1>
              <p>{location.state.data.description}</p>
              <p>Rating : {location.state.data.rating} Star</p>
              <p>Fees : {location.state.data.fees} Rupees</p>
              <p>Transportation Facility : {location.state.data.transportation}</p>
              <p>Security Service : {location.state.data.securityService}</p>
            </div>
            <div className="col-sm-4 text-white">
              <h2>Contact</h2>
              <p>Phone No. :- <a href={`tel:${location.state.data.phone}`}>+91 {location.state.data.phone}</a></p>
              <p>Email :- <a href={`mailto:${location.state.data.email}`}>{location.state.data.email}</a></p>
              <address>
                {
                 <p>Address :- {location.state.data.address.map(address => address)}</p> 
                 
                }
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default School;