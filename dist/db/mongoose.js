'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/app-development';

_mongoose2.default.connect(MONGODB_URI, function () {
  console.log('Connected to MongoDB');
});
_mongoose2.default.Promise = global.Promise;
//# sourceMappingURL=mongoose.js.map