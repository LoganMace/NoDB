import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import FutureLaunches from './components/FutureLaunches/FutureLaunches';
import PastLaunches from './components/PastLaunches/PastLaunches';
import WatchList from './components/WatchList/WatchList';
import RocketInfo from './components/RocketInfo/RocketInfo';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newLaunches: [],
      pastLaunches: [],
      rockets: [],
      pastFlag: false,
      homeFlag: true,
      rocketFlag: false,
      watchFlag: false
    };
    this.homeHandler = this.homeHandler.bind(this);
    this.rocketHandler = this.rocketHandler.bind(this);
    this.pastHandler = this.pastHandler.bind(this);
    this.watchHandler = this.watchHandler.bind(this);
  }

  componentDidMount(){
    axios
      .get("/api/getFutureLaunches")
      .then(response=>{
        this.setState({
          newLaunches: response.data
        })
      });

      axios
      .get("/api/getPastLaunches")
      .then(response=>{
        this.setState({
          pastLaunches: response.data
        })
      });

      axios
      .get("/api/getRockets")
      .then(response=>{
        this.setState({
          rockets: response.data
        })
      });
  }

  homeHandler(){
    this.setState({
      homeFlag: true,
      rocketFlag: false,
      watchFlag: false,
      pastFlag: false
    })
  }

  rocketHandler(){
    this.setState({
      homeFlag: false,
      rocketFlag: true,
      watchFlag: false,
      pastFlag: false
    })
  }

  pastHandler(){
    this.setState({
      homeFlag: false,
      rocketFlag: false,
      watchFlag: false,
      pastFlag: true
    })
  }

  watchHandler(){
    this.setState({
      homeFlag: false,
      rocketFlag: false,
      watchFlag: true,
      pastFlag: false
    })
  }

  render() {
    let rocket = this.state.rockets.map(rocket =>
      <RocketInfo 
        name={rocket.name}
        first_flight={rocket.first_flight}
        description={rocket.description}
      />
    );
    let future = this.state.newLaunches.map(mission =>
      <FutureLaunches 
        key={mission.flight_number}
        flight_number={mission.flight_number}
        mission_name={mission.mission_name}
        launch_date_utc={mission.launch_date_utc}
      />
    );
    let past = this.state.pastLaunches.map(mission =>
      <PastLaunches 
        key={mission.flight_number}
        flight_number={mission.flight_number}
        mission_name={mission.mission_name}
        launch_date_utc={mission.launch_date_utc}
        details={mission.details}
        patch={mission.links.mission_patch_small}
      />
    );
    return (
      <div className="App">
        <NavBar 
          home={this.homeHandler}
          rocket={this.rocketHandler}
          past={this.pastHandler}
          watch={this.watchHandler}
        />
        {this.state.pastFlag ? past : null}
        {this.state.homeFlag ? future : null}
        {this.state.rocketFlag ? rocket : null}
        {this.state.watchFlag ? <WatchList /> : null }
      </div>
    );
  }
}

export default App;
