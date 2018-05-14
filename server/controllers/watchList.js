const axios = require('axios');

let watchList = [];

module.exports = {

  getList(req, res){
    res.status(200).json(watchList)
  },
  
  addLaunch(req, res){
    watchList.push(req.body);
    res.status(200).json(watchList);
  },

  deleteLaunch(req, res){
    // console.log(req.params);
    deleteId = req.params.number;
    // console.log(deleteId);
    let index = watchList.findIndex(launch => launch.number == deleteId);
    watchList.splice(index, 1);
    res.status(200).json(watchList);
  },

  updateNotes(req, res){
    watchList.forEach(launch => launch.number == req.params.number ? Object.assign(launch, req.body) : null)
    // console.log(watchList);
    return res.status(200).json(watchList);
  }
}