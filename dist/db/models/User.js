'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userSchema = new _mongoose.Schema({
  googleId: String
});

userSchema.statics.createOAuthUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(strategy, identifier) {
    var googleUser, facebookUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = strategy;
            _context.next = _context.t0 === 'google' ? 3 : _context.t0 === 'facebook' ? 11 : 19;
            break;

          case 3:
            _context.next = 5;
            return this.findOne({ googleId: identifier });

          case 5:
            googleUser = _context.sent;

            if (googleUser) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', new User({ googleId: identifier }).save());

          case 10:
            return _context.abrupt('return', googleUser);

          case 11:
            _context.next = 13;
            return this.findOne({ facebookId: identifier });

          case 13:
            facebookUser = _context.sent;

            if (facebookUser) {
              _context.next = 18;
              break;
            }

            return _context.abrupt('return', new User({ facebookId: identifier }).save());

          case 18:
            return _context.abrupt('return', facebookUser);

          case 19:
            return _context.abrupt('return', '');

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var User = _mongoose2.default.model('Users', userSchema);

exports.default = User;
//# sourceMappingURL=User.js.map