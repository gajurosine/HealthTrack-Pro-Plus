import { Router } from 'express';
const router = Router();

import { register } from '../controllers/adminControllers';

router.post('/register',register);
// router.post('/login', adminController.login);
// router.get('/patients', adminController.viewPatient);

export default router;
