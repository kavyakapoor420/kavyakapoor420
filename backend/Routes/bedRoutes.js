
import express from 'express'
const router = express.Router();

import  Bed from '../Models/Bed.js';
import { bookBed, getAllBeds } from '../controller/BedController.js';



// Get all beds
router.get('/',getAllBeds)

// Book a bed
router.post('/book',bookBed)
export default router 