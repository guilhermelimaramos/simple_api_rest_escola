import { Router } from 'express';
import homeController from '../controllers/home';

const router = new Router();

router.get('/', homeController.index);

export default router;
