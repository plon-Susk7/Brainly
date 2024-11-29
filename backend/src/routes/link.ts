import Router from 'express';
import { shareLink } from '../controllers/link';
import { userAuth } from '../auth';

const linkRouter = Router();

linkRouter.post('/link',userAuth,shareLink);