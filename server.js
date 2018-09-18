const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

var server = express();

server.use(bodyParser.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './')));

server.get('/artists/:artistID', (req, res) => {
  axios
   .get ('http://localhost:3001/artists/' + req.params.artistID)
   .then (function (response) {
     res.send(response.data)
   })
   .catch (function (error) {
     console.log ('error', error);
   });
});

server.listen(3000, console.log('Listening on:', 3000));