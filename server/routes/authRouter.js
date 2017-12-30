const express = require('express');
const passport = require('passport');
const { tokenForUser, sendJwt } = require('../middlewares/Jwt.js');
const requireAuth = passport.authenticate('jwt', { session: false });
const localLogin = passport.authenticate('local', { session: false });
const googleAuth = passport.authenticate('google', { session: false });

const User = require('../db/models/User.js');

const authRouter = express();

authRouter.post('/api/auth/localsignup', async (req, res) => {
  const { email, password } = req.body;
  const localUser = await User.findOrCreateUser('local', { email, password });
  res.send({ token: tokenForUser(localUser), success: 200 });
});

authRouter.post('/api/auth/locallogin', localLogin, sendJwt, (req, res) => {
  console.log(req.body);
});

authRouter.get(
  '/api/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/api/auth/google/callback', googleAuth, sendJwt);

authRouter.get('/api/current_user', requireAuth, (req, res) =>
  res.send(req.user)
);
module.exports = authRouter;
