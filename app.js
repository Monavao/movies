const express = require('express');
const app = express();
const port = 3000;

app.use('/public',express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/movies', (req, res) => {
	res.render('movies');
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