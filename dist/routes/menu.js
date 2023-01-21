"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterMenu = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const menu_1 = require("../controller/menu");
const validate_1 = require("../middleware/validate");
// Global Config
exports.RouterMenu = express_1.default.Router();
exports.RouterMenu.use(express_1.default.json());
// GET
exports.RouterMenu.get("/", menu_1.getAll);
exports.RouterMenu.get("/:id", menu_1.getSingle);
// POST
exports.RouterMenu.post("/", validate_1.saveContact, menu_1.createSingle);
// PUT
exports.RouterMenu.put("/:id", validate_1.saveContact, menu_1.updateSingle);
// DELETE
exports.RouterMenu.delete("/:id", menu_1.deleteSingle);
//# sourceMappingURL=menu.js.map