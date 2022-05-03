const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/cool') res.end(JSON.stringify({ cool: true }));
  })
  .listen(666, () => console.log('Servidor ta de pé'));
