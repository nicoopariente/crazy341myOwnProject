import express, { Request, Response } from "express";
import { RouterMenu } from "./menu";
import { routes } from "./swagger";
// Global Config
export const Router = express.Router();


Router.use("/menu", RouterMenu);

Router.get('/', async (_req: Request, res: Response) => {
    res.send('Nicolas Pariente Fros');
  });

Router.use("/", routes);