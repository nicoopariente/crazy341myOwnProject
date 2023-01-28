import express from "express";
import swaggerUi  from "swagger-ui-express";
const swaggerDocument = require('../swagger.json');
import {isLoggedIn} from "../controller/login";


export const routes = express.Router();

routes.use('/api-docs', isLoggedIn, swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

