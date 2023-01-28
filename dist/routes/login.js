"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require('express');
const passport = require('passport');
require('../middleware/auth');
exports.router = express.Router();
exports.router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
exports.router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/menu',
    failureRedirect: '/',
}));
//# sourceMappingURL=login.js.map