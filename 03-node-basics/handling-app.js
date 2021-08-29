const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
	const url = request.url;
	const method = request.method;

	if (url === '/fuck') {
		// Creating the response
		response.setHeader("Content-Type", "text/html");
		response.write(`
		<html>
			<head><title>Sup motherfucker</title></head>
			<body>
				<h1>Hello Motherfucker!!!!</h1>
				<form action="/scott" method="POST">
					<input type="test" name="idk"/>
					<button type="submit">This is a button</button>
				</form>
			</body>
		</html>
		`);

		// We return the function so no more code is executed
		return response.end();
		// If we keep executing code and access
		// the response it will throw an error
	} else if (url === '/scott' && method === 'POST') {
		fs.writeFileSync('idk-form', 'Different text from form');
		response.statusCode = 302; // This status code indicates that
		// we have redirected the user
		response.setHeader('Location', '/');
		return response.end();
	} else {
		response.setHeader("Content-Type", "text/html");
		response.write(`
		<html>
			<head><title>Sup motherfucker</title></head>
			<body>
				<h1>Hello Motherfucker!!!!</h1>
			</body>
		</html>
		`);

		// We return the function so no more code is executed
		return response.end();
	}
});

server.listen(8000);