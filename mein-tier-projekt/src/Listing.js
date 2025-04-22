// import { Link } from "react-router-dom";
import "./Listing.css"

function Listing(props) {
    return (
        <div className="listing-tile">
            <img width="250px" src={props.image} alt=""></img>
            <h3>Name: {props.Name}</h3>
            <h3>Alter: {props.Alter} Jahre</h3>
            <h3>Art: {props.Art}</h3>
            <h3>Krankheit: {props.Krankheit}</h3>
            {/* <Link to="/">Leite zu Behandlung weiter</Link> */}
            </div>
    );
}

export default Listing;