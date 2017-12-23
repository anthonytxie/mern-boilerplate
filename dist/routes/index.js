'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicRouter = (0, _express2.default)();

basicRouter.get('/api', function (req, res) {
  res.send('Hello welcome to the starter application');
});

exports.default = basicRouter;
//# sourceMappingURL=index.js.map