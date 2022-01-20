import express from "express";
import trelloRouter from "./routers/trelloRouter";

const PORT = 4000;
const app = express();

app.use("/", trelloRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);