const API_KEY = 'YOUR KEY';
const term = document.querySelector('#term');
const btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', search);

let results = document.querySelector('#results');

function search()
{
	const query = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term.value}&language=fr`;

	axios.get(query).then((res) => {
		console.log(res);
		displayResults(res.data.results);
	});
}

function displayResults(results)
{
	match.innerHTML = '';

	for(let result of results)
	{
		let movieDiv = document.createElement('div');
		movieDiv.innerHTML = result.title;
		match.appendChild(movieDiv);
	}
}