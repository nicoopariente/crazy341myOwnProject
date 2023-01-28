import { Request, Response, NextFunction } from 'express';
import { runInNewContext } from 'vm';
require('express-session');

const isLoggedIn = (req:Request, res: Response, next:NextFunction)=>{
    req.user ? next() : res.sendStatus(401)
}

const Logout = (req: Request, res: Response, next:NextFunction)=>{
    let name = req.user.given_name;
    console.log(name);       
    req.logout(function(err) {
       if (err) { 
            console.log(err);
            return next(err);}});
   
    req.session.destroy(null);
    res.send(`You logged out Successfully. We will miss you ${name}`)
    

    
}
/*
const welcome = (req: Request, res: Response)=>{
    res.send(`Welcome ${req.user.displayName}`)
}*/
export { isLoggedIn, Logout};