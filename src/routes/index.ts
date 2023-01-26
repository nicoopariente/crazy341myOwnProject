import express, { Request, Response } from "express";
import { RouterMenu } from "./menu";
import { routes } from "./swagger";
import { router } from "./login";
import {isLoggedIn, welcome} from "../controller/login";
// Global Config
export const Router = express.Router();


Router.use("/menu", isLoggedIn, RouterMenu);

Router.get('/', async (_req: Request, res: Response) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });


Router.use("/", routes);

Router.use("/", router);