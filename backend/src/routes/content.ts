import Router from 'express';
import { addContent,getAllContent,deleteContent} from '../controllers/content';

const contentRouter = Router();

contentRouter.post('/content',addContent);
contentRouter.get('/content',getAllContent);
contentRouter.delete('/content/:id',deleteContent);

export {contentRouter};

