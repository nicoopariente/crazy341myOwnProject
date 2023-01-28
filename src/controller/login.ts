import { Request, Response, NextFunction } from 'express';
import { runInNewContext } from 'vm';
require('express-session');

const isLoggedIn = (req:Request, res: Response, next:NextFunction)=>{
    req.user ? next() : res.sendStatus(401)
}

const Logout = (req: Request, res: Response, next:NextFunction)=>{
    req.logout(function(err) {
        if (err) { 
            console.log(err);
            return next(err);}});
    req.session.destroy(null);
    res.send('You Logged out successfully')

    
}
const welcome = (req: Request, res: Response)=>{
    res.send(`Welcome ${req.user.displayName}`)
}
export { isLoggedIn, Logout, welcome};