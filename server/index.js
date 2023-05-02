const http = require('http');

const host = '0.0.0.0';
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(process.env.HOSTNAME);
  res.end();
}).listen(port, host, () => console.log(`Listening on port ${port}`));
