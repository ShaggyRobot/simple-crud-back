const { validate } = require('uuid');

module.exports = (req, res) => {
  switch (true) {
    case !req.id:
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(req.DB));
      break;

    case !validate(req.id):
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(`"${req.id}" ID IS NOT VALID UUID.`);
      break;

    case !!req.DB.find((item) => item.id === req.id):
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(req.DB.find((item) => item.id === req.id)));
      break;

    case !req.DB.find((item) => item.id === req.id):
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(`ITEM WITH "${req.id}" ID IS NOT FOUND`);
      break;

    default:
      // const dbItem = req.DB.find((item) => item.id === req.id)
      break;
  }
};
