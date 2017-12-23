import express from 'express';

const basicRouter = express();

basicRouter.get('/api', (req, res) => {
  res.send('Hello welcome to the starter application');
});

export default basicRouter;
