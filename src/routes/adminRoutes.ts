import express, { Request, Response} from 'express';

// import UserController from '../controllers/UserController';

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.send('Sou Administrador');
  });
  

// router.get('/:id', UserController.getUser);
// router.post('/', UserController.createUser);

export default router