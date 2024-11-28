import Router from 'express';
import { signUp } from '../controllers/signup';
import {signIn} from '../controllers/signin';

const userRouter = Router();


userRouter.post('/signup',signUp);
userRouter.post('/signin',signIn);

export {userRouter};