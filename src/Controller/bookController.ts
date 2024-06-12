import { Request, Response } from "express";
import { getAllBooks, getBookById, bookcreate, updateBookById, deleteBookById } from "../service/bookService";

const createBook = async(req:Request, res:Response)=>{
    const bookData = req.body;
    const newBook = await bookcreate(bookData);
    res.send("book created successfully")
}

const getallBooks = async (req: Request, res: Response) => {
        const books = await getAllBooks();
        res.json(books);
};

const getbookByID = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const book = await getBookById(bookId);
    res.json(book);
};

const updatebookById = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const bookData = req.body;
    const updatedBook = await updateBookById(bookId, bookData);
    res.json(updatedBook);
};

const deletebookById = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const deleteData = await deleteBookById(bookId);
    res.json(deleteData);
};

export {createBook, getbookByID, getallBooks, updatebookById, deletebookById}

