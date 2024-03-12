import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  
    return (
      <div className="home text-white container-xxl d-flex justify-content-center align-items-center overflow-auto p-0">
        <div className="row d-flex justify-content-center align-items-center overflow-auto">
          <div className="col d-flex flex-column align-items-center overflow-auto">
            <h1 className="text-center">List the Best School of your Choice</h1>
            <p className="text-center"> Finding school is a very important step for parents to our kids. This important role plays for the successful and bright career of your children. If you are a parent, wants to find top 6 schools in Meerut for your child, Schools Listing Website has compiled a list of top ranker school in Meerut.
                    </p>

            {
              localStorage.getItem('access')?<Link to="/Schools" className="btn btn-primary">Find the best school</Link>:<p></p>
            }

          </div>
        </div>
      </div>
    );
}
export default Home;