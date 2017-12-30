require('dotenv').config();
require('./services/passport.js');
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/index');

const app = express();

//Middleware
app.use(bodyParser.json());

app.use(indexRouter);
app.use(authRouter);

if (process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  app.use(express.static('client/build'));
  // Express will serve up index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
