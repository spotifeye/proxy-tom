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

// Popular
// server.get('/artist/:id', function (req, res) {
//   // let artistID = parseInt(req.query.id, 10);
//   // Artist.findOne({id: artistID})
//   //   .then(artist => res.json(artist))
//   //   .catch(err => console.log(err));
//   console.log("Andrew");
//   axios
//     .get ('http://localhost:3003/artist/' + req.params.id)
//     .then (function (response) {
//       console.log(response.data);
//       res.send(response.data)
//     })
//     .catch (function (error) {
//       console.log ('error', error);
//     });
// });

// app.post('/artist/update', function (req, res) {
//   let update = {};
//   var objProp = `albums.${req.body.albumID}.songs.${req.body.songID}.library`;
//   update[objProp] = !!parseInt(req.body.added,10);

//   Artists.findOneAndUpdate({id: req.body.artistID}, {$set:update})
//     .then(() => res.json({message: 'success', added: !!parseInt(req.body.added,10)}))
//     .catch(() => res.status(400).json({message: 'bad request'}));   
// });

server.listen(3000, console.log('Listening on:', 3000));