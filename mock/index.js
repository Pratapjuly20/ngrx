const express = require('express')
const app = express();
const movies = require('../mock/mock-data/movies.json');
const bodyParser = require('body-parser');
const { addMovieToList, deleteMovieFromList } = require('./utils.js');

app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  res.send(movies);
});

app.post('/movies', (req, res) => {
  let updatedList = addMovieToList(req.body);
  res.send(updatedList);
});

app.delete('/movies/:id', (req, res) => {
  let updatedList = deleteMovieFromList(req.params.id);
  res.send(updatedList);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});