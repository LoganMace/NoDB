const axios = require("axios");

let info = {};

module.exports = {
  getInfo(req, res){
    res.status(200).json(info);
  }
}

axios
  .get('https://api.spacexdata.com/v2/info')
  .then(response => {
    info = response.data;
    // console.log(info);
  })
