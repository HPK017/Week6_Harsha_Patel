import express from "express";
import { createBook, deletebookById, getallBooks, getbookByID, updatebookById } from "../Controller/bookController";

const router = express.Router();

router.post('/books', async (req , res) => createBook(req,res))
router.get('/books',getallBooks)
router.get('/books/:id',getbookByID)
router.put('/books/:id', async (req , res) => updatebookById(req,res))
router.delete('/books/:id', deletebookById)


export default router


