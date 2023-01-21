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
exports.deleteSingle = exports.updateSingle = exports.createSingle = exports.getSingle = exports.getAll = void 0;
const mongodb_1 = require("mongodb");
const database_services_1 = require("../services/database.services");
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = (yield database_services_1.collections.food.find({}).toArray());
        res.status(200).send(food);
        // res.status(200).send(food);
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
        res.setHeader('Content-Type', 'application/json');
        console.log(food);
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
const updateSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    const newFood = {
        foodName: req.body.foodName,
        preparationTime: req.body.preparationTime,
        ingredients: req.body.ingredients,
        chefName: req.body.chefName,
        idInTheMenu: req.body.idInTheMenu,
        restaurantName: req.body.restaurantName,
        score: req.body.score
    };
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_services_1.collections.food.replaceOne(query, newFood);
        if (result.modifiedCount > 0) {
            res.status(204).send();
        }
        else {
            res.status(500).json('Some error occurred while updating the contact.');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});
exports.updateSingle = updateSingle;
const deleteSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = (yield database_services_1.collections.food.deleteOne(query));
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed food with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove food with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`Food with id ${id} does not exist`);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
exports.deleteSingle = deleteSingle;
//# sourceMappingURL=menu.js.map