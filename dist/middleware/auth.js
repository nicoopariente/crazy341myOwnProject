const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const dotenv = require('dotenv');
dotenv.config();
/*
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken:string, refreshToken:string, profile:any, done:(err: any, user: any) => void) {
    done(null, profile);
})
);

passport.serializeUser((user: any, done: (err: any, user: any) => void) => {
    done(null, user);
});

passport.deserializeUser((user: any, done: (err: any, user: any) => void) => {
    done(null, user);
    
});
*/
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
}, function (request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
//# sourceMappingURL=auth.js.map