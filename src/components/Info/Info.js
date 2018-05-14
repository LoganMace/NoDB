import React, {Component} from 'react';
import axios from 'axios';
import './Info.css';


class Info extends Component{

  constructor(props){
    super(props);
    this.state={
      info: {}
    }
  }


  componentDidMount(){
    axios
    .get("/api/getInfo")
    .then(response=>{
      // console.log(response.data);
      this.setState({
        info: response.data
      })
    });
  }


  render(){
    // console.log(this.state.info);
    return(
      <div className='info-box'>
        <h2 className='title-box'>
          <img className='spacex' src="http://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png" alt={this.state.info.name}/>
        </h2>
        <div className='founded'>
          Founded by: {this.state.info.founder} in {this.state.info.founded}
        </div>
        <div className='employees'>
          Number of employees: {this.state.info.employees}
        </div>
        <p className='summary'>
          {this.state.info.summary}
        </p>
        <div className='images'>
          <img className='img' src="https://cdn.vox-cdn.com/thumbor/93tByTYU0DSHuJauDaGCjayqiMo=/0x0:481x601/1200x800/filters:focal(188x108:264x184)/cdn.vox-cdn.com/uploads/chorus_image/image/58094227/Screen_Shot_2017_12_23_at_8.39.02_AM.0.png" alt="rocket"/>
          <img className='img' src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/spacexstages.jpg" alt="starman"/>
          <img className='img' src="https://i.ytimg.com/vi/X0wzNh_kHTc/maxresdefault.jpg" alt="dragon"/>
          <img className='img' src="https://media.wired.com/photos/5a7cb68fa2d3835392e1b469/master/pass/spacexrocketreturn.jpg" alt="duo landing"/>
          <img className='img' src="https://cnet1.cbsistatic.com/img/TE4kiGgA-h45iGNH7scm41kcF2Q=/2018/03/30/635cf85c-b5ee-4c80-ba5b-7669e1b78f66/irid.jpg" alt="iridium"/>
          <img className='img' src="http://dailynova.org/wp-content/uploads/2016/04/SpaceX_ASDS_moving_into_position_for_CRS-7_launch_18610429514.png" alt="barge"/>
          <img className='img' src="https://cdn.vox-cdn.com/thumbor/i1FVrTN-e9JFhUqIdZfs1A1wzqI=/0x0:1180x776/1200x800/filters:focal(496x294:684x482)/cdn.vox-cdn.com/uploads/chorus_image/image/56589375/Screen_Shot_2017_09_08_at_4.34.18_PM.0.png" alt="space-suit"/>
          <img className='img' src="https://cdn.teslarati.com/wp-content/uploads/2016/12/SpaceX-Cape-Canaveral-FL.jpg" alt="facility"/>
        </div>
      </div>
    )
  }
}

export default Info;