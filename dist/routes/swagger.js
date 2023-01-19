"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = require('../swagger.json');
exports.routes = express_1.default.Router();
exports.routes.use('/api-docs', swagger_ui_express_1.default.serve);
exports.routes.get('/api-docs', swagger_ui_express_1.default.setup(swaggerDocument));
//# sourceMappingURL=swagger.js.map