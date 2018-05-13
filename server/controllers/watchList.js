const axios = require('axios');

let watchList = [];

module.exports = {

  getList(req, res){
    res.status(200).json(watchList)
  },
  
  addLaunch(req, res){
    // req.body.id = id;
    // const {number} = req.params
    // const {name, date, number}=req.body;
    console.log("hit!!!!")
    watchList.push(req.body);
    res.status(200).json(watchList);
  }

}