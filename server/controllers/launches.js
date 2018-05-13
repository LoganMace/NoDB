const axios = require("axios");

let pastLaunches = [];
let futureLaunches = [];

module.exports = {

  getPastLaunches(req, res) {
    return res.status(200).json(pastLaunches);
  },

  getFutureLaunches(req, res) {
    return res.status(200).json(futureLaunches);
  }

}
 
axios
  .get('https://api.spacexdata.com/v2/launches')
  .then(response => {
    pastLaunches = response.data;
  })
  
axios
  .get('https://api.spacexdata.com/v2/launches/upcoming')
  .then(response => {
    futureLaunches = response.data;
  })

  


