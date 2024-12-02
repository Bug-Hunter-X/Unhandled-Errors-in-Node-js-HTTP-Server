const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate an error
    //const result = someFunctionThatMightThrowAnError();
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error processing request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

//Handle Server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});