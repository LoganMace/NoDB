import React from 'react';
import './RocketInfo.css';


export default function RocketInfo(props){
  // console.log(props)
  return(
    <div className="rocket-cards">
      <h2 className='title'>{props.name}</h2>
      <h3>First Flight: {props.first_flight}</h3>
      <p className='desc'>Description: {props.description}</p>
    </div>
  )
}