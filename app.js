const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer();

const port = 3000;
let frenchMovies = [];

app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/movies', (req, res) => {
	const title = 'Films Français';
	frenchMovies = [
		{ title: 'Intouchable', year: 2012 },
		{ title: 'Les tuches', year: 2004 },
		{ title: 'Les trois frères', year: 1995 },
		{ title: 'Les Visiteurs', year: 1993 }
	];

	res.render('movies', {
		movies: frenchMovies,
		title: title
	});
});

/*
app.post('/movies', (req, res) => {
	const newMovie = { 
		title: req.body.movietitle, 
		year: req.body.movieyear 
	};

	//frenchMovies.push(newMovie);
	frenchMovies = [...frenchMovies, newMovie];
	console.log(frenchMovies);

	res.sendStatus(201);
});
*/

app.post('/movies', upload.fields([]), (req, res) => {
	if(!req.body)
	{
		return res.status(500);
	}
	else
	{
		const formData = req.body;
		console.log('formData: ', formData);
		const newMovie = {
			title: req.body.movietitle,
			year: req.body.movieyear
		};

		frenchMovies = [...frenchMovies, newMovie];
		console.log('frenchMovies: ', frenchMovies);
		res.sendStatus(201);
	}
});

app.get('/movies/add', (req, res) => {
	res.send('Formulaire en construction');
});

app.get('/movies/:id', (req, res) => {
	const id = req.params.id;
	const title = 'Terminator';

	res.render('movies-details', { 
		moviesId: id,
		movieTitle: title
	});
});

app.listen(port, () => {
	console.log('listening on port 3000');
});