require('dotenv').config();
const User = require('../db/models/User.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-as-promised');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, async function(
  email,
  password,
  done
) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      done(null, false);
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        done(null, user);
      } else {
        done(null, false);
      }
    }
  } catch (e) {
    done(e);
  }
});

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWTsecret,
};

// create jwt strategy

const jwtLogin = new JwtStrategy(jwtOptions, async function(payload, done) {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      done(null, false);
    } else {
      done(null, user);
    }
  } catch (e) {
    done(e);
  }
});

const googleLogin = new GoogleStrategy(
  {
    clientID: process.env.googleClientId,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/oauth',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOrCreateUser('google', {
        oauthId: profile.id,
      });
      done(null, user);
    } catch (e) {
      console.log(e);
    }
  }
);

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
passport.use(googleLogin);
