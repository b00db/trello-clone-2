import express from "express";
import { trelloController } from "../controllers/trelloController";

const trelloRouter = express.Router();

trelloRouter.get("/", trelloController);

export default trelloRouter;