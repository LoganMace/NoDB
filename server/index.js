const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3001,
      rc = require('./controllers/rockets.js'),
      lc = require('./controllers/launches.js'),
      wc = require('./controllers/watchList.js');

app.use(cors());
app.use(bodyParser.json());


app.get('/api/getRockets', rc.getRockets);

app.get('/api/getPastLaunches', lc.getPastLaunches);
app.get('/api/getFutureLaunches', lc.getFutureLaunches);

app.get('/api/watchList', wc.getList);
app.post('/api/watchList', wc.addLaunch);


app.listen(port, ()=> console.log(`Listening on port ${port}`));