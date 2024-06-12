import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { JWT_KEY } from "../common/credentials";

interface AuthReq extends Request{
    user? : any;
}

const authenticate = (req: AuthReq, res:Response, next:any)=>{
    let authheaders = req.headers["authorization"];
    let token = authheaders && authheaders.split(" ")[1];

    if(token == null){
        return res.send("token not found")
    }

    jwt.verify(token, `${JWT_KEY}`, (err, user)=>{
        if(err){
            return res.send("invalid token");
        }
        else{
            req.user = user;
            next()
        }
    })

}

export { authenticate, AuthReq };