"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router2 = void 0;
const express = require('express');
const passport = require('passport');
const login_1 = require("../controller/login");
require('../middleware/auth');
exports.router2 = express.Router();
exports.router2.get('/logout', login_1.Logout);
//# sourceMappingURL=logout.js.map