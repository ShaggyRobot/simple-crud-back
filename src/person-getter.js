const url = require('url');

function getter(req, res) {
  if (url.parse(req.url, true).pathname === '/person' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Beep-beep!');
    process.stdout.write('Beep.\n');
    req.on('data', (data) => {
      // console.log(JSON.parse(data));
      if (JSON.parse(data).close === true) {
        this.close();
        process.exit(42);
      }
    });
  }
  if (url.parse(req.url, true).pathname === '/person' && req.method === 'POST') {
    // TODO post method
  }
  if (url.parse(req.url, true).pathname === '/person' && req.method === 'PUT') {
    // TODO put method
  }
  if (url.parse(req.url, true).pathname === '/person' && req.method === 'DELETE') {
    // TODO delete method
  }
}

module.exports = { getter };
