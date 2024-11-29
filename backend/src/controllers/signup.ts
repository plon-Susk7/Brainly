import {userModel} from '../db/schema';
import bcrypt from 'bcrypt';
import {z} from 'zod';


// Username shoudl be 3-10 letters
// Password should be 8 to 20 letters, should have atleast one uppercase, one lowercase, one special character, one number

// Regex pattern for password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;


const signUp = async (req:any,res:any) => {
    const username = req.body.username;
    const password = req.body.password;

    const schema = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(20).regex(passwordRegex,"Password should have atleast one uppercase, one lowercase, one special character, one number")
    });

    try{
        schema.parse({username:username,password:password});
    } catch (error:any){
        res.status(400).json({message:error.issues});
        return
    }
    const hashedPassword = bcrypt.hashSync(password,2);

    const newUser = new userModel({
        username : username,
        password : hashedPassword
    });

    try{
        await newUser.save();

        res.status(201).send("User created successfully");
    }  catch (error){
        console.log(error);
        res.status(500).json({message:"Error Creating the user!"});
    }
}

export {signUp};