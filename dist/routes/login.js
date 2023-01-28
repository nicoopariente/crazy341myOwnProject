"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require('express');
const passport = require('passport');
const login_1 = require("../controller/login");
const login_2 = require("../controller/login");
require('../middleware/auth');
exports.router = express.Router();
exports.router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
exports.router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/menu',
    failureRedirect: '/',
}));
exports.router.get('/logout', login_2.isLoggedIn, login_1.Logout);
//# sourceMappingURL=login.js.map