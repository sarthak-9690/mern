import {useNavigate} from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();
  const btnHandle = (props) => {
    navigate('/School', {state: {data: props}});

  };
  return(

     props && <div className="card bg-transparent border border-white mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description.slice(0, 100)}...</p>
        <p className="text-muted">Rating : {props.rating} Star</p>
        <p className="text-muted">Fees : {props.fees} Rupees</p>
        <p className="text-muted">Transportation Facility : {props.transportation}</p>
        <p className="text-muted">Security Service : {props.securityService}</p>
        <button type="button" className="btn btn-outline-success" onClick={() => btnHandle(props)}>Know More</button>
      </div>
    </div>
    );
}
export default Card;