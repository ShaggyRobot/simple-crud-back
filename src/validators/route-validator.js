const { stringify } = require('uuid');

module.exports = (req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  req.xURL = url;

  const routes = url.pathname.split('/').splice(1);

  if (routes.length > 1 && req.method === 'POST') {
    return false;
  }
  if (routes[0] !== 'person' || routes.length > 2) {
    return false;
  }
  if (routes.length === 2) {
    const id = routes[1] !== '' ? routes[1] : 'NOT SPECIFIED';
    req.id = id;
    return true;
  }
  return true;
};

// /person
// /person/1f9ddffc-d1f0-424f-8477-776084c73b7a
