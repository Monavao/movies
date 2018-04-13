const form = document.querySelector('form');

form.addEventListener("submit", loginUser);

function loginUser(event)
{
	loginUserWithXHR(event);
}

function loginUserWithXHR(event)
{
	event.preventDefault();
	console.log(loginUserWithXHR);

	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/login', true);

	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
		{
			form.reset();
		}
	}

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const payload = `email=${email}&password=${password}`;

	xhr.send(payload);
}