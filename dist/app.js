'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var app = (0, _express2.default)();

//Middleware
app.use(_bodyParser2.default.json());

app.use(_index2.default);

if (process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  app.use(_express2.default.static('client/build'));
  // Express will serve up index.html if it doesn't recognize the route
  var path = require('path');
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

exports.default = app;
//# sourceMappingURL=app.js.map