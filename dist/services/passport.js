'use strict';

var _User = require('../db/models/User.js');

var _User2 = _interopRequireDefault(_User);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require('passport-google-oauth20');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();


_passport2.default.serializeUser(function (user, done) {
  done(null, user.id); //passing user.id to done to serialize
});

_passport2.default.deserializeUser(function (userId, done) {
  _User2.default.findById(userId).then(function (user) {
    done(null, user); //passing deserialized user object to done
  });
});
_passport2.default.use(new _passportGoogleOauth.Strategy({
  clientID: process.env.googleClientId,
  clientSecret: process.env.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User2.default.createOAuthUser('google', profile.id);

          case 2:
            user = _context.sent;

            done(null, user);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));
//# sourceMappingURL=passport.js.map