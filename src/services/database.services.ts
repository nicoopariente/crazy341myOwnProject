// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
// Global Variables
export const collections: { food?: mongoDB.Collection } = {}
// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();

 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING?? "");
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const foodCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME?? "");
 
  collections.food = foodCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${foodCollection.collectionName}`);
 }