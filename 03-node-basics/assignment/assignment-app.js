const http = require('http');

// Define the server
const server = http.createServer((request, response) => {
	// Retrieve important information
	const url = request.url;
	const method = request.method;

	if (url === "/") {
		// What kind of response are we sending
		response.setHeader("Content-Type", "text/html");
		response.write(`
			<html>
			<body>
				<h1>Hi there,</h1>
				<p>Welcome to my awesome server</p>
			</body>
			</html>
		`);
		return response.end();
	} else if (url === "/users") {
		response.setHeader("Content-Type", "text/html");
		response.write(`
			<html>
			<body>
				<h1>Listing users</h1>
				<ul>
		`);	
		for (let i = 0; i < 10; i++) {
			response.write(`
				<li>Awesome User #${i}</li>
			`);
		}
		response.write(`
			</uL>
		</body>
		</html>
		`);
		return response.end();
	} else if (url === "/create-user") {
		response.setHeader("Content-Type", "text/html");
		response.write(`
			<html>
			<body>
				<h1>Create a new user</h1>
				<h3>(but not really tho)</h3>
				
				<form action="/new-user" method="POST">
					<input type="text" name="username">
					<button action="submit">Click me to save</button>
				</form>
			</body>
			</html>
		`);
		return response.end();
	} else if (url === "/new-user" && method === "POST") {
		const data = [];
		request.on("data", (chunk) => {
			data.push(chunk);
		});

		return request.on("end", () => {
			const parsedData = Buffer.concat(data).toString();
			const text = parsedData.split("=")[1];
			console.log(text);

			response.statusCode = 302;
			response.setHeader('Location', '/');
			return response.end();
		});
	}
});

// Start the server
server.listen(8080);