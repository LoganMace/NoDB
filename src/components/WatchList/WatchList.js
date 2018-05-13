import React, {Component} from 'react';
import axios from 'axios';
import './WatchList.css';

class WatchList extends Component{

  constructor(props){
    super(props);
    this.state = {
      savedList: [],
      notes: ''
    }
  }

  componentDidMount(){
    axios
      .get('/api/watchList')
      .then(response =>{
        // console.log(response.data);
        this.setState({
          savedList: response.data
        })
      })
  }


  

  render(){
    // console.log(this.state.savedList);
    let launch = this.state.savedList.map((launch)=>{
      return(
        <div key={launch.number}>
          <h3>Mission Name: {launch.name}</h3>
          <h3>Launch Date: {launch.date}</h3>
          <h3>Flight Number: {launch.number}</h3>
          <input type="text"/>
          <button className='remove'>Remove</button>
        </div>
      )
    })
    return(
        <div className="saved-card">
          {launch}
        </div>
    )
  }
}

export default WatchList;