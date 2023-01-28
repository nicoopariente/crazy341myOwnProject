"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = exports.Logout = exports.isLoggedIn = void 0;
require('express-session');
const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};
exports.isLoggedIn = isLoggedIn;
const Logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
    });
    req.session.destroy(null);
    res.send('You Logged out successfully');
};
exports.Logout = Logout;
const welcome = (req, res) => {
    res.send(`Welcome ${req.user.displayName}`);
};
exports.welcome = welcome;
//# sourceMappingURL=login.js.map