const fs = require('fs');
const { throwError } = require('rxjs');

function addMovieToList(movie) {
    let dataFromFile;
    movie.id = generateId(movie);
    try {
        let data = fs.readFileSync('mock-data/movies.json', 'utf8');
        dataFromFile = JSON.parse(data);
    } catch (e) {
        console.error(e);
    }
    dataFromFile['movies'].push(movie);
    try {
        fs.writeFileSync('mock-data/movies.json', JSON.stringify(dataFromFile), 'utf8');
    } catch(err) {
        console.error(error);
    }
    try {
        let data = fs.readFileSync('mock-data/movies.json', 'utf8');
        dataFromFile = JSON.parse(data);
    } catch (e) {
        console.error(e);
    }
    return dataFromFile;
}

function generateId(movie) {
    let movieNameArray = movie.name.split(' ');
    let idString = '';
    movieNameArray.forEach(name => {
        name = name.substring(0, 3);
        idString += name;
    })
    return idString;
}

function deleteMovieFromList(id) {
    let dataFromFile;
    try {
        let data = fs.readFileSync('mock-data/movies.json', 'utf8');
        dataFromFile = JSON.parse(data);
    } catch (e) {
        console.error(e);
    }

    let reqdInd = dataFromFile.movies.findIndex(movie => movie.id === id);

    dataFromFile.movies.splice(reqdInd, 1);

    try {
        fs.writeFileSync('mock-data/movies.json', JSON.stringify(dataFromFile), 'utf8');
    } catch(err) {
        console.error(error);
    }
    try {
        let data = fs.readFileSync('mock-data/movies.json', 'utf8');
        dataFromFile = JSON.parse(data);
    } catch (e) {
        console.error(e);
    }
    return dataFromFile
}

module.exports = { addMovieToList, deleteMovieFromList }