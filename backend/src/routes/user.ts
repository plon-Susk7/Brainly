import Router from 'express';
import { signUp } from '../controllers/signup';

const userRouter = Router();


userRouter.post('/signup',signUp);

export {userRouter};