const express = require('express');
const router = express.Router();

const movies =[
    {id: 101, name: "The Shawshank Redemption", year: 1994, rating: 9.3},
    {id: 102, name: "The Godfather", year: 1972, rating: 9.2},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9.0},
    {id: 104, name: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9}
];

//routers for movies
router.get('/', function(req, res) {
    res.json(movies);
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var movie = movies.filter(function(movie) {
        return movie.id == id;
    });
    res.json(movie);
});

router.post('/', function(req, res) {
    movies.push(req.body);
    res.json(req.body);
    console.log(req.body);
});

router.put('/:id', function(req, res) {
    var id = req.params.id;

    // Find the index of the movie with the given ID
    var index = movies.findIndex(function(movie) {
        return movie.id == id;
    });

    if (index === -1) {
        // Movie with the given ID does not exist
        return res.status(404).json({ error: 'Movie not found' });
    }

    // Update the movie at the found index with the new data
    movies[index] = { ...movies[index], ...req.body };
    
    res.json(movies[index]);
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    // Find the index of the movie with the given ID
    var index = movies.findIndex(function(movie) {
        return movie.id == id;
    }); 

    if (index === -1) {
        // Movie with the given ID does not exist
        return res.status(404).json({ error: 'Movie not found' });
    }
    
    movies.splice(index, 1);
    res.json(movies);
    console.log(movies);
});



module.exports = router;


// GET: http://localhost:8080/movies
// POST: http://localhost:8080/movies
// PUT: http://localhost:8080/movies/:id (replace :id with the actual ID)
// DELETE: http://localhost:8080/movies/:id (replace :id with the actual ID)