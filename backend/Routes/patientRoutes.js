import  express  from 'express'

const router = express.Router();
import  Patient from '../Models/Patient.js';
import { createNewPatient, getAllPatients } from '../controller/PatientController.js';


// Get all patients
router.get('/',getAllPatients) ;
// Create a new patient
router.post('/',createNewPatient) 

export default router ;