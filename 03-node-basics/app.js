const http = require('http');

const server = http.createServer((request, response) => {

	response.setHeader("Content-Type", "text/html");
	response.write(`
	<html>
		<head><title>Sup motherfucker</title></head>
		<body>
			<h1>Hello Motherfucker!!!!</h1>
		</body>
	</html>
	`);

	// We tell Node we have written all the response
	response.end();
	// We don't need to return anything, reponse.end() will
	// return the response to the client/user
	// return response;
});

server.listen(8000);