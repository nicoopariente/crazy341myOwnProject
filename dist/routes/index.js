"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const menu_1 = require("./menu");
const swagger_1 = require("./swagger");
const login_1 = require("./login");
const login_2 = require("../controller/login");
// Global Config
exports.Router = express_1.default.Router();
exports.Router.use("/menu", login_2.isLoggedIn, menu_1.RouterMenu);
exports.Router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
}));
exports.Router.use("/", swagger_1.routes);
exports.Router.use("/", login_1.router);
//# sourceMappingURL=index.js.map