const express = require('express');
import { Request, Response } from 'express';
const passport = require('passport');
import {Logout} from "../controller/login";
require('../middleware/auth')

export const router = express.Router();
router.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']}));


router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/menu',
    failureRedirect: '/',
}));

router.get('/logout', Logout)

