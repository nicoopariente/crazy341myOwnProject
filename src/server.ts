import express, { Express, Request, Response } from 'express';
import { connectToDatabase } from "./services/database.services"
import { Router } from "./routes/index";
import dotenv from 'dotenv';
import { Session } from 'inspector';
const session = require('express-session');
const passport = require('passport');
require('./middleware/auth');


declare global {
    namespace Express {
      interface User {
        displayName: string,
        given_name: string
      }
    }
  }





dotenv.config();


const app: Express = express();

const port = process.env.PORT;


connectToDatabase()
    .then(() => {
        app.use(session({ secret: 'cats'}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use("/", Router,);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });