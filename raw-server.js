
const http = require('http'); //built in module

const server = http.createServer((req, res) => {


  if(req.method === 'GET' && req.url === '/'){
    //manual route check
    res.writeHead(200, { 'Content-Type': 'text/plain'});//manual headers
    res.end('Hello from node js!'); // send body and close
  } else{
    res.writeHead(404, { 'Content-Type' : 'text/plain'});
    res.end('Not Found :( '); //Basic error]
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Raw server running on http://localhost:${PORT}`);
});