const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

var server = express();

server.use(bodyParser.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './')));
server.use(cors());

// Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  console.log("Wissem")
  axios
   .get ('http://localhost:3001/artists/albums/' + req.params.artistID)
   .then (function (response) {
     res.send(response.data);
   })
   .catch (function (error) {
     console.log ('error', error);
   });
});

// Header
server.get('/artists/:artistID', (req, res) => {
  console.log("David")
  axios
   .get ('http://localhost:3004/artists/' + req.params.artistID)
   .then (function (response) {
     res.send(response.data);
   })
   .catch (function (error) {
     console.log ('error', error);
   });
});

server.listen(3000, console.log('Listening on:', 3000));