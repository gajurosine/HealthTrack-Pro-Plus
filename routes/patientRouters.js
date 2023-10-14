import { Router } from 'express';
const router = Router();

import { viewMyData ,addPatient} from '../controllers/patientControllers.js';

router.post('/submit-data', viewMyData);
router.get('/my-data/:patientID', viewMyData); // Note the corrected route definition
router.post('/addpatient', addPatient);
export default router;
