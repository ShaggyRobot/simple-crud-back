const { validate } = require('uuid');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  switch (true) {
    case !validate(req.id):
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(`"${req.id}" ID IS NOT VALID UUID.`);
      break;

    case !req.DB.find((item) => item.id === req.id):
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(`ITEM WITH "${req.id}" ID IS NOT FOUND`);
      break;

    default:
      req.DB.map((item, i) => {
        if (item.id === req.id) {
          req.DB.splice(i, 1);
        }
        return true;
      });

      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.end();
      break;
  }
  return res.end();
};
