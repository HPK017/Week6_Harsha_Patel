import express from "express";
import { createAuthors, getallAuthors, getauthorByID, updateauthorById } from "../Controller/authorController";
import { deletebookById } from "../Controller/bookController";

const router = express.Router();

router.post('/authors', async (req , res) => createAuthors(req,res))
router.get('/authors',getallAuthors)
router.get('/authors/:id',getauthorByID)
router.put('/authors/:id', async (req , res) => updateauthorById(req,res))
router.delete('/authors/:id', deletebookById)

export default router

