import { Router } from 'express';
const router = Router();
import { register, login, viewPatients} from '../controllers/adminControllers.js'; 

router.post('/register', register);
router.post('/login', login);

router.get('/patients', viewPatients);
export default router;
