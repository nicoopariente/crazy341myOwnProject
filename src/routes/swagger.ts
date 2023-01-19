import express from "express";
import swaggerUi  from "swagger-ui-express";
const swaggerDocument = require('../swagger.json');


export const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

