import { getCurrentuser, login, register } from "../service/userService";
import { Request, Response } from "express";

interface AuthReq extends Request{
    user? : any;
}

const registerUser = async (req:AuthReq, res:Response) => {
    try {
        const { username, password, email } = req.body;
        const result = await register(username, password, email);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send("errorv occured");
    }
};

const loginUser = async (req:AuthReq, res:Response) => {
    try {
        const { username, password } = req.body;
        const result = await login(username, password);
        res.send(result);
    } catch (error) {
        res.status(400).send({error });
    }
};


const getCurrentUserDetails = async (req:AuthReq, res:Response):Promise<void> => {
    const user = await getCurrentuser(req.user.id);
    res.send(user);
};

export {registerUser, loginUser, getCurrentUserDetails}


