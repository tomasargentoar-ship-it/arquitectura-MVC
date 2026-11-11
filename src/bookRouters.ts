import { Router } from "express";
import { createBook, readBook, updateBook, deleteBook } from "./bookControllers.js";

const bookRouter = Router();

bookRouter.post("/book",createBook);
bookRouter.get("/book/:id",readBook);
bookRouter.put("/book/:id",updateBook);
bookRouter.delete("/book/:id",deleteBook);

export default bookRouter;