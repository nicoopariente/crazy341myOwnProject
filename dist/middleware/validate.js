"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveContact = void 0;
const joi_1 = __importDefault(require("joi"));
const saveContact = (req, res, next) => {
    const schema = joi_1.default.object({
        foodName: joi_1.default.string().max(30).required(),
        preparationTime: joi_1.default.number().required(),
        ingredients: joi_1.default.array().items(joi_1.default.string()),
        chefName: joi_1.default.string().max(30).required(),
        idInTheMenu: joi_1.default.number().required(),
        restaurantName: joi_1.default.string().max(30).required(),
        score: joi_1.default.number().max(5).required(),
    });
    try {
        const value = joi_1.default.assert(req.body, schema);
        next();
    }
    catch (err) {
        res.status(412).send(err.message);
    }
};
exports.saveContact = saveContact;
//# sourceMappingURL=validate.js.map