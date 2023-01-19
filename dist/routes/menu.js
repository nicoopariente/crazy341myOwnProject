"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterMenu = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const menu_1 = require("../controller/menu");
// Global Config
exports.RouterMenu = express_1.default.Router();
exports.RouterMenu.use(express_1.default.json());
// GET
exports.RouterMenu.get("/", menu_1.getAll);
exports.RouterMenu.get("/:id", menu_1.getSingle);
// POST
exports.RouterMenu.post("/", menu_1.createSingle);
// PUT
// DELETE
//# sourceMappingURL=menu.js.map