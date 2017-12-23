require('dotenv').config();
import bodyParser from 'body-parser';
import express from 'express';
import indexRouter from './routes/index.js';
const app = express();

//Middleware
app.use(bodyParser.json());

app.use(indexRouter);

if (process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  app.use(express.static('client/build'));
  // Express will serve up index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
