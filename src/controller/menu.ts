// External dependencies
import  { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.services";




const getAll = async (_req: Request, res: Response) => {
    try {
       const food = (await collections.food.find({}).toArray());

       
       res.status(200).send(food);

       // res.status(200).send(food);
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
        res.setHeader('Content-Type', 'application/json');
        console.log(food)
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

const updateSingle = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    
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
        
            const query = { _id: new ObjectId(id) };
            const result = await collections.food.replaceOne(query, newFood);
            if (result.modifiedCount > 0) {
                res.status(204).send();
              } else {
                res.status(500).json( 'Some error occurred while updating the contact.');
              }
        
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

const deleteSingle = async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
            const query = { _id: new ObjectId(id) };
        const result = (await collections.food.deleteOne(query));
        
        if (result && result.deletedCount) {
            res.status(200).send(`Successfully removed food with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove food with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Food with id ${id} does not exist`);
        }
        
        

        
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
};

export { getAll, getSingle, createSingle, updateSingle, deleteSingle};