import express from 'express';
import { getPatients, addPatients } from '../controllers/patientController.js';

const router = express.Router();

router.get('/all', getPatients);
router.post('/add', addPatients);

export default router;