const jwt = require('jwt-simple');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWTsecret);
}

const sendJwt = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: 'You must log in' });
  } else {
    res.send({ token: tokenForUser(req.user), success: 200 });
    next();
  }
};

module.exports = { sendJwt, tokenForUser };
