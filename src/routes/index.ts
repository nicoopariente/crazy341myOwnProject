import express, { Request, Response } from "express";
import { RouterMenu } from "./menu";
import { routes } from "./swagger";
import { router } from "./login";
import { router2 } from "./logout";
import {isLoggedIn} from "../controller/login";
// Global Config
export const Router = express.Router();


Router.use("/menu", isLoggedIn, RouterMenu);

Router.get('/', async (req: Request, res: Response) => {
  if (req.user){
    res.send(`<h3>Welcome ${req.user.displayName}</h3>`);
  }else{
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  }
    
  });


Router.use("/", routes);

Router.use("/", router);

Router.use("/", isLoggedIn, router2);