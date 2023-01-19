// External Dependencies
import express from "express";

import {getAll, getSingle, createSingle} from "../controller/menu";
// Global Config
export const RouterMenu = express.Router();

RouterMenu.use(express.json());
// GET
RouterMenu.get("/", getAll);

RouterMenu.get("/:id", getSingle);
// POST
RouterMenu.post("/", createSingle );

// PUT

// DELETE