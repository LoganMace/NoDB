import React from 'react';
import './FutureLaunches.css';
import axios from 'axios';
import WatchList from "./../WatchList/WatchList";


class FutureLaunches extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(info){
    axios
      .post(`/api/watchList`,info)
      .then(response=>{
        console.log(response.data);
      })
    
  }
render(){

  return(
      <div className="mission-card">
        <h3>Mission Name: {this.props.mission_name}</h3>
        <h4>Flight Number: {this.props.flight_number}</h4>
        <h5>Launch Date: {this.props.launch_date_utc}</h5>
        <button className='add' onClick={()=>this.handleClick({name:this.props.mission_name, number: this.props.flight_number, date: this.props.launch_date_utc})}>Add</button>
      </div>
  )
}
  }

export default FutureLaunches;