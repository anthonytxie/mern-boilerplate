'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requireLogin = function requireLogin(req, res, next) {
  if (!req.user) {
    res.status(401).send({ error: 'You must log in' });
  } else {
    next();
  }
};

exports.default = requireLogin;
//# sourceMappingURL=requireLogin.js.map