import { Router } from "express";
import { createBook, readBook, updateBook, deleteBook } from "./bookControllers.js";

const bookRouter = Router();

bookRouter.post("/",createBook);
bookRouter.get("/:id",readBook);
bookRouter.put("/:id",updateBook);
bookRouter.delete("/:id",deleteBook);

export default bookRouter;