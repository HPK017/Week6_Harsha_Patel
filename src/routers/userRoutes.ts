import express from "express";
import { Request, Response } from "express";
import { getCurrentUserDetails, loginUser, registerUser } from "../Controller/userController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.post('/register', async (req :Request, res:Response) => registerUser(req,res))
router.post('/login', async (req :Request, res:Response) => loginUser(req,res))
router.get('/me', authenticate, getCurrentUserDetails)

export default router;

