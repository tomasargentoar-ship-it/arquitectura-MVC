import { Router } from "express";
import { getAllBooks,createBook, readBook, updateBook, deleteBook } from "./bookControllers.js";

const bookRouter = Router();

bookRouter.post("/",createBook);
bookRouter.get("/",getAllBooks);
bookRouter.get("/:id",readBook);
bookRouter.put("/:id",updateBook);
bookRouter.delete("/:id",deleteBook);

export default bookRouter;