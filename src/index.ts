import express from "express";
import bookRouter from "./bookRouters.js";

const app = express();

app.use(express.json());

app.use("/libreria",bookRouter);

app.listen(3000,()=>{
console.log("Server is running on port 3000")
})