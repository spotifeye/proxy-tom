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
  res.redirect('http://localhost:3001' + req.url);
});

// Related Artists
server.get('/relatedArtists/id/artist', (req, res) => {
  res.redirect('http://localhost:3002' + req.url);
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
  res.redirect('http://localhost:3003/' + req.url);
});

// Header
server.get('/artists/:artistID', (req, res) => {
   res.redirect('http://localhost:3004' + req.url);
});

server.listen(3000, console.log('Listening on:', 3000));