import { Router } from 'express'
import * as userController from '../controller/api'
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/users', authMiddleware, userController.createUserController);
router.get('/users', authMiddleware, userController.getAllUsersController);
router.get('/users/:id', authMiddleware, userController.getUserByIdController);
router.get('/users/:id', authMiddleware, userController.getUserByIdController);
router.put('/users/:id', authMiddleware, userController.updateUserController);


export default router