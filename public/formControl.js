const form = document.querySelector('form');

form.addEventListener('submit', addMovie);

function addMovie(event)
{
	event.preventDefault();

	if(window.fetch())
	{
		fetch('/movies', {
			method: 'POST',
			body: new FormData(form)
		})
		.then(checkStatus)
		.catch((error) => {
			console.error('request failed', error);
		});
	}
}

function checkStatus(response)
{
	if(response.status >= 200 && response.status < 300)
	{
		let newMovieDiv = document.createElement('div');
		const movietitle = document.getElementById('movietitle').value;
		const movieyear = document.getElementById('movieyear').value;

		newMovieDiv.innerHTML = `${movietitle} (${movieyear})`;
		document.querySelector('.movies').appendChild(newMovieDiv);
		form.reset();
	}
}