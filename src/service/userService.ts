import { JWT_KEY } from "../common/credentials";
import { User } from "../model/userModel";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";

 const register = async(username:any, password:any , email:any) =>{
    const hashedPassword = await bcrypt.hash(password, 8);
    const app =await User.create({username, password: hashedPassword, email});
    return app;
}

const login = async (username: any, password:any) :Promise<any>=>{
    try{
        const users = await User.findOne({where : {username}})
        if(users){
            let confirm = await bcrypt.compare(password, users.password)
            if(confirm){
                let token = jwt.sign({id: users.id}, `${JWT_KEY}`)
                return {users, token};
            }
        }
        else{
            return "invalid password"
        }
    }
    catch(error){
        throw error;
    }
}

const getCurrentuser = async(userId:any)=>{
    return await User.findByPk(userId)
}


export {register, login, getCurrentuser}

