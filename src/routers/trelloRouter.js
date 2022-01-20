import express from "express";

const trelloRouter = express.Router();

const handleTrello = (req,res) => res.send("Trello");

trelloRouter.get("/", handleTrello);

export default trelloRouter;