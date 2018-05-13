import React from 'react';
import './NavBar.css'

export default function NavBar(props){
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-links" onClick={() => props.home()}>Home</li>
        <li className="nav-links" onClick={() => props.rocket()}>Rockets</li>
        <li className="nav-links" onClick={() => props.past()}>Past Launches</li>
        <li className="nav-links" onClick={() => props.watch()}>Watch List</li> 
      </ul>
    </nav>
    )
}