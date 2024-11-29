import { userModel } from "../db/schema";
import {z} from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const signIn = async (req:any,res:any) => {

    const username = req.body.username;
    const password = req.body.password;

    const schema = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(20)
    });

    try{
        schema.parse({username:username,password:password});

    }catch(error:any){
        res.status(400).json({message:error.issues});
        return
    }

    const user = await userModel.findOne({
        username:username
    })

    if(!username){
        res.status(404).json({message:"User not found"});
        return
    }

    const isPassword = await bcrypt.compare(password,user?.password as string);

    if(!isPassword){
        res.status(401).json({message:"Invalid Password"});
        return
    }

    const token = jwt.sign({userId:user?._id},process.env.JWT_SECRET as string);

    res.status(200).json({token:token});

}

export  {signIn};