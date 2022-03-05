const { stringify } = require('uuid');
const { v4: generateUuid } = require('uuid');
const DB = require('../db.js');
const bodyValidator = require('../validators/body-validator.js');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  const buffer = [];
  let dbEntry = {};

  req.on('data', (data) => {
    buffer.push(data);
  });

  req.on('end', () => {
    const body = Buffer.concat(buffer).toString();
    console.log(body);

    const validate = bodyValidator(body);

    if (validate.isValid) {
      dbEntry = { id: generateUuid(), ...JSON.parse(body) };
      DB.push(dbEntry);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(dbEntry));
    }

    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(validate.msg);
  });
};

// Body:
//  {
//   name: string,
//   age: number,
//   hobbies: ntring[]
// }

// {
//   isValid: Boolean,
//   msg: 'string',
// }
