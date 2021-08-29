const fs = require('fs');

const requestHandler = (request, response) => {
	const url = request.url;
	const method = request.method;
	
	if (url === '/form-test') {
		// Creating the response
		response.setHeader("Content-Type", "text/html");
		response.write(`
		<html>
			<head><title>Sup motherfucker</title></head>
			<body>
				<h1>Hello Motherfucker!!!!</h1>
				<form action="/form-submit" method="POST">
					<input type="text" name="idk"/>
					<button type="submit">This is a button</button>
				</form>
			</body>
		</html>
		`);
	
		// We return the function so no more code is executed
		return response.end();
		// If we keep executing code and access
		// the response it will throw an error
	} else if (url === '/form-submit' && method === 'POST') {
		const body = [];
		// The request's body is parsed in chunks so that nothing
		// is blocked
		// Every time a request's body chunk is parsed we add it
		// to the body
		request.on("data", (chunk) =>  {
			body.push(chunk);
		});
	
		// Node has parsed all the request
		request.on("end", () => {
			// We concatenate all the body-chunks in a string
			const data = Buffer.concat(body).toString();
			// Retrieve the data
			const text = data.split('=')[1];
			// Save in file
			fs.writeFileSync("test-form-value", text);
		});
	
		// Tell the browser we want to redirect the client
		// And where to
		response.statusCode = 302;
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
}

// HOW TO EXPORT
// Method: 1
module.exports = requestHandler;