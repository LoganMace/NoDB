const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3001,
      rc = require('./controllers/rockets.js'),
      lc = require('./controllers/launches.js'),
      wc = require('./controllers/watchList.js'),
      ic = require('./controllers/info.js');

app.use(cors());
app.use(bodyParser.json());

app.get('/api/getInfo', ic.getInfo);

app.get('/api/getRockets', rc.getRockets);

app.get('/api/getPastLaunches', lc.getPastLaunches);
app.get('/api/getFutureLaunches', lc.getFutureLaunches);

app.get('/api/watchList', wc.getList);
app.post('/api/watchList', wc.addLaunch);
app.delete('/api/watchList/:number', wc.deleteLaunch);
app.put('/api/watchList/:number', wc.updateNotes);


app.listen(port, ()=> console.log(`Listening on port ${port}`));