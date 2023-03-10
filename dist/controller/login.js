"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.isLoggedIn = void 0;
require('express-session');
const passport = require('passport');
const isLoggedIn = (req, res, next) => {
    console.log(req.user);
    req.user ? next() : res.sendStatus(401);
};
exports.isLoggedIn = isLoggedIn;
const Logout = (req, res, next) => {
    let name = req.user.given_name;
    console.log(name);
    req.logOut(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
    });
    req.session.destroy(null);
    res.clearCookie('connect.sid');
    res.send(`You logged out Successfully. We will miss you ${name}`);
};
exports.Logout = Logout;
//# sourceMappingURL=login.js.map