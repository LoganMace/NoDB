import React from 'react';
import './PastLaunches.css';

const PastLaunches = (props) => {

    return(
        <div className="past-cards">
          <h3>Mission Name: {props.mission_name}</h3>
          <h4>Flight Number: {props.flight_number}</h4>
          <img src={props.patch} alt="patch"/>
          <h5>Launch Date: {props.launch_date_utc}</h5>
          <p><span>Mission Details: </span>{props.details}</p>
        </div>
    )
  }

export default PastLaunches;