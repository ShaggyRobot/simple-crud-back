const path = require('path');
const http = require('http');
const dotenv = require('dotenv');

const DB = require('./db.js');
const validateRoute = require('./validators/route-validator.js');

const getHandler = require('./handlers/get-handler.js');
const postHandler = require('./handlers/post-handler.js');
const putHandler = require('./handlers/put-handler.js');
const deleteHandler = require('./handlers/delete-handler.js');

dotenv.config();

const server = http.createServer();

// /person
// /person/1f9ddffc-d1f0-424f-8477-776084c73b7a

// {
//   name: string,
//   age: number,
//   hobbies: string[]
// }

server.on('request', (req, res) => {
  req.DB = DB;
  if (validateRoute(req, res)) {
    console.log(req.url, req.method);
    switch (req.method) {
      case 'OPTIONS':
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        res.setHeader(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE');
        res.end();
        break;
      case 'GET':
        getHandler(req, res);
        break;
      case 'POST':
        postHandler(req, res);
        break;
      case 'PUT':
        putHandler(req, res);
        break;
      case 'DELETE':
        deleteHandler(req, res);
        break;
      default:
        res.statusCode = 400;
        res.end(`THIS SERVER DOES NOT HANDLE THE "${req.method}" METHOD.`);
        break;
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(`BAD REQUEST :: ${req.method} @ ${req.xURL}`);
  }
});

server.listen(process.env.PORT, (e) => {
  if (e) {
    console.log(e.message);
  }
  console.log(`${path.resolve(__dirname, __filename)}\nlistening @ port:${process.env.PORT}`);
});
