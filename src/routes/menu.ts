// External Dependencies
import express from "express";

import {getAll, getSingle, createSingle, updateSingle, deleteSingle} from "../controller/menu";
import {saveContact} from "../middleware/validate";
// Global Config
export const RouterMenu = express.Router();

RouterMenu.use(express.json());
// GET
RouterMenu.get("/", getAll);

RouterMenu.get("/:id", getSingle);
// POST
RouterMenu.post("/", saveContact, createSingle );

// PUT
RouterMenu.put("/:id", saveContact, updateSingle );

// DELETE
RouterMenu.delete("/:id", deleteSingle);