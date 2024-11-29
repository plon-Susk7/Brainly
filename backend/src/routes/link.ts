import Router from 'express';
import { shareLink,getLink } from '../controllers/link';
import { userAuth } from '../auth';

const linkRouter = Router();

linkRouter.post('/brain/share',userAuth,shareLink);
linkRouter.get('/brain/:shareLink',userAuth,getLink);

export {linkRouter}