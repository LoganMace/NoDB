import React, {Component} from 'react';
import axios from 'axios';
import './WatchList.css';

class WatchList extends Component{

  constructor(props){
    super(props);
    this.state = {
      savedList: [],
      input: '',
      // notes: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddNotes = this.handleAddNotes.bind(this);
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

  handleDelete(number){
    // console.log(number);
    axios
      .delete(`/api/watchList/${number}`,)
      .then(response=>{
        // console.log(response.data);
        this.setState({
          savedList: response.data
        })
      })
  }

  handleAddNotes(number){
    axios
      .put(`/api/watchList/${number}`, {notes: this.state.input})
      .then(response=>{
        // console.log(response.data);
        this.setState({
          savedList: response.data,
          input: ''
        })
      })
  }

  handleInput(event){
    this.setState({
      input: event.target.value
    })
  }

  // handleNotes(){
  //   this.setState({
  //     notes: this.state.input,
  //     input: ''
  //   })
  // }
  

  render(){
    // console.log(this.state.notes);
    let launch = this.state.savedList.map((launch)=>{
      return(
        <div key={launch.number} className="saved-card">
          <h2 className='mission-name'>Mission Name: {launch.name}</h2>
          <h3>Flight Number: {launch.number}</h3>
          <h4 className='l-date'>Launch Date: {launch.date}</h4>
          <p className='notes-box'>Notes: {launch.notes}</p>
          <input className='notes' type="text" onChange={event => this.handleInput(event)}/>
          <button className='remove' onClick={()=>this.handleDelete(launch.number)}>Remove</button>
          <button className='update' onClick={()=>this.handleAddNotes(launch.number)}>Update</button>
        </div>
      )
    })
    return(
        <div>
          {launch}
        </div>
    )
  }
}

export default WatchList;