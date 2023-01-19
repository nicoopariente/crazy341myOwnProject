// External dependencies
import  { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.services";


const game = class {
    constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
};

const getAll = async (_req: Request, res: Response) => {
    try {
       const food = (await collections.food.find({}).toArray());

        res.status(200).send(food);
    } catch (error) {
        if (error instanceof Error) {
            // ✅ TypeScript knows err is Error
            res.status(500).send(error.message);
          } else {
            console.log('Unexpected error', error);
          }
       
    }
};

const getSingle = async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const food = (await collections.food.findOne(query));

        if (food) {
            res.status(200).send(food);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
};


const createSingle = async (req: Request, res: Response) => {
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
        const result = await collections.food.insertOne(newFood);

        result
            ? res.status(201).send(`Successfully created a new food with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new food.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

export {game, getAll, getSingle, createSingle};