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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSingle = exports.getSingle = exports.getAll = exports.game = void 0;
const mongodb_1 = require("mongodb");
const database_services_1 = require("../services/database.services");
const game = class {
    constructor(name, price, category, id) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = id;
    }
};
exports.game = game;
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = (yield database_services_1.collections.food.find({}).toArray());
        res.status(200).send(food);
    }
    catch (error) {
        if (error instanceof Error) {
            // ✅ TypeScript knows err is Error
            res.status(500).send(error.message);
        }
        else {
            console.log('Unexpected error', error);
        }
    }
});
exports.getAll = getAll;
const getSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const food = (yield database_services_1.collections.food.findOne(query));
        if (food) {
            res.status(200).send(food);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
exports.getSingle = getSingle;
const createSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFood = {
            foodName: req.body.foodName,
            preparationTime: req.body.preparationTime,
            ingredients: req.body.ingredients,
            chefName: req.body.chefName,
            idInTheMenu: req.body.idInTheMenu,
            restaurantName: req.body.restaurantName,
            score: req.body.score
        };
        const result = yield database_services_1.collections.food.insertOne(newFood);
        result
            ? res.status(201).send(`Successfully created a new food with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new food.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
exports.createSingle = createSingle;
//# sourceMappingURL=menu.js.map