import Joi from "joi";
import  { Request, Response, NextFunction} from "express";

const saveContact = (req: Request, res: Response, next: NextFunction)=>{
    const schema = Joi.object({
        foodName: Joi.string().max(30).required(),
        preparationTime: Joi.number().required(),
        ingredients: Joi.array().items(Joi.string()),
        chefName: Joi.string().max(30).required(),
        idInTheMenu: Joi.number().required(),
        restaurantName: Joi.string().max(30).required(),
        score: Joi.number().max(5).required(),

    })

    try {
       const value = Joi.assert(req.body, schema);
        next();
    }
    catch (err) { 
        res.status(412).send(err.message);

    }

}

export{saveContact};