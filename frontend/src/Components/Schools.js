import {useState,useEffect} from 'react';

import './Schools.css';
import Card from './Card';

function Schools() {
 
  let [schoolList, setSchoolList] = useState([]);
  let [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from an API
        const response = await fetch('http://localhost:8080/auth/school');
        const data = await response.json();
        setSchoolList(data);
        setFilteredSchools(data);
        
        // Handle the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    // Call the async function
    fetchData();
    
   },[]); // Empty dependency array, so the effect runs only once
  

  const feesFilter = (school) => {
      const fees = parseInt(filters.fees);
      if (fees && fees <= 10000) {
        return school.fees <= 10000;
      } else if (fees && fees <= 20000) {
        return school.fees <= 20000;
      } else if (fees && fees <= 30000) {
        return school.fees <= 30000;
      } else if (fees && fees > 30000) {
        return school.fees > 30000;
      } else {
        return true;
      }
    };
  const [filters, setFilters] = useState({
    rating: '',
    fees: '',
    transportation: '',
    securityService: '',
  });
  filteredSchools = schoolList.filter(school => {
    const ratingMatch = filters.rating === '' || parseInt(school.rating) >= parseInt(filters.rating);
    const feesMatch = feesFilter(school);
    const transportationMatch =
      filters.transportation === '' || school.transportation === filters.transportation;
    const securityServiceMatch =
      filters.securityService === '' || school.securityService === filters.securityService;
    return ratingMatch && feesMatch && transportationMatch && securityServiceMatch;
  });
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };
  const btnclick = () => {
    let filterdiv = document.querySelector('.filterDiv');
    filterdiv.style.display = "block";
  };
  const closeHandle = () => {
    let filterdiv = document.querySelector('.filterDiv');
    filterdiv.style.display = "none";
  };
  const resetHandle = () => {
    setFilters({
      rating: '',
      fees: '',
      transportation: '',
      securityService: ''
    });
  };
  return(
    <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto py-2">
      <div className="row d-flex justify-content-center align-items-center overflow-auto">
        <div className="col col-sm-9 d-flex flex-column align-items-center overflow-auto p-0">
          <div className="row w-100">
            <div className="col-sm-4 mb-3 mb-sm-0 p-0">
              <div className="filters d-flex justify-content-center align-items-center">
                  <button type="button" className="btn btn-primary d-sm-none" onClick={btnclick}>Filters</button>
                  <div className="filterDiv p-2 p-sm-0 overflow-auto">
                    <button type="button" className="btn btn-outline-danger d-sm-none" onClick={closeHandle}>Close</button>
                    <form>
                      <div className="rating my-3 mt-sm-0">
                        <h5>Rating</h5>
                        <div className="form-check">
                          <input type="radio" className="form-check-input" id="ratingAll" name="rating" value="" checked={filters.rating===""} onChange={handleFilterChange} />
                          <label className="form-check-label" htmlFor="ratingAll">All</label>
                        </div>
                        <div className="form-check">
                          <input type="radio" className="form-check-input" id="rating4" name="rating" value="4" checked={filters.rating==="4"} onChange={handleFilterChange} />
                          <label className="form-check-label" htmlFor="rating4">4 stars and above</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="rating3" name="rating" value="3" checked={filters.rating==="3"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="rating3">3 stars rating and above</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="rating2" name="rating" value="2" checked={filters.rating==="2"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="rating2">2 stars rating and above</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="rating1" name="rating" value="1" checked={filters.rating==="1"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="rating1">1 star rating and above</label>
                          </div>
                        </div>
                        <div className="fees mb-3">
                          <h5>Fees</h5>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="feesAll" name="fees" value="" checked={filters.fees===""} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="feesAll">All</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="fees10000" name="fees" value="10000" checked={filters.fees==="10000"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="fees10000">10000 and below</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="fees20000" name="fees" value="20000" checked={filters.fees==="20000"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="fees20000">20000 and below</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="fees30000" name="fees" value="30000" checked={filters.fees==="30000"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="fees30000">30000 and below</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="fees30001" name="fees" value="30001" checked={filters.fees==="30001"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="fees30001">Above 30000</label>
                          </div>
                        </div>
                        <div className="transportation mb-3">
                          <h5>Transportation</h5>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="transportationAll" name="transportation" value="" checked={filters.transportation===""} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="transprtationAll">All</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="transportationAvailable" name="transportation" value="Available" checked={filters.transportation==="Available"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="transportationAvailable">Available</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="transportationNot Available" name="transportation" value="Not Available" checked={filters.transportation==="Not Available"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="transportationNot Available">Not Available</label>
                          </div>
                        </div>
                        <div className="security mb-3">
                          <h5>Security Service</h5>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="securityAll" name="securityService" value="" checked={filters.securityService===""} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="securityAll">All</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="securityAvailable" name="securityService" value="Available" checked={filters.securityService==="Available"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="securityAvailable">Available</label>
                          </div>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="securityNot Available" name="securityService" value="Not Available" checked={filters.securityService==="Not Available"} onChange={handleFilterChange} />
                            <label className="form-check-label" htmlFor="securityNot Available">Not Available</label>
                          </div>
                        </div>
                        <div>
                          <input type="reset" className="w-100 btn btn-outline-warning mb-2" onClick={resetHandle} />
                        </div>
                      </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                {
                filteredSchools && filteredSchools.map((school) => {
                  return <Card key={school._id} title={school.title} description={school.description} imgLink={school.imgLink} rating={school.rating}
               fees={school.fees} transportation={school.transportation} securityService={school.securityService} phone={school.phone}
               email={school.email} address={school.address}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Schools;