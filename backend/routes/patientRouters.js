import { Router } from 'express';
const router = Router();


import { viewMyData } from '../controllers/patientControllers';
router.post('/submit-data',viewMyData);
router.get('/my-data:patientID',patientController.viewMyData);

export default router;


