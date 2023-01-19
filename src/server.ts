import express, { Express, Request, Response } from 'express';
import { connectToDatabase } from "./services/database.services"
import { Router } from "./routes/index";
import dotenv from 'dotenv';

dotenv.config();


const app: Express = express();
const port = process.env.PORT;

connectToDatabase()
    .then(() => {
        app.use("/", Router);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });