import { Request, Response } from "express";
import { authorcreate, deleteAuthorById, getAllAuthors, getAuthorById, updateAuthorById } from "../service/authorService";

const createAuthors = async(req:Request, res:Response) =>{
    const authorData = req.body;
    const newAuthor = await authorcreate(authorData);
    res.send("Author created successfully")
}

const getallAuthors = async (req: Request, res: Response) => {
        const authors = await getAllAuthors();
        res.json(authors);
};

const getauthorByID = async (req: Request, res: Response) => {
    const authorId = parseInt(req.params.id);
    const author = await getAuthorById(authorId);
    res.json(author);
};

const updateauthorById = async (req: Request, res: Response) => {
    const authorId = parseInt(req.params.id);
    const authorData = req.body;
    const updatedAuthor = await updateAuthorById(authorId, authorData);
    res.json(updatedAuthor);
};

const deleteauthorById = async (req: Request, res: Response) => {
    const authorId = parseInt(req.params.id);
    const authourData = await deleteAuthorById(authorId);
    res.json(authourData);
};

export {createAuthors, getallAuthors, getauthorByID, updateauthorById, deleteauthorById}


