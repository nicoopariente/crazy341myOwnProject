const express = require('express');
const passport = require('passport');
import {Logout} from "../controller/login";

require('../middleware/auth')

export const router2 = express.Router();


router2.get('/logout', Logout)

